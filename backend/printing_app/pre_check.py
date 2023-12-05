import re
import os
import PyPDF2 
from fpdf import FPDF
import math
from print_auth.models import CampusUser
def pre_check(document_path, pages_print, check_info, username, date_send, filename, num_copies, side):

    #check format
    #trim all space
    pages_print = pages_print.replace(' ','')

    lists = pages_print.split(',')

    for l in lists:
        if l.find('-') == -1:
            if len(re.findall("\d+",l)) == 0 or re.findall("\d+",l)[0] != l:
                check_info.append("Sai định dạng nhập trang in")
                return False
        else:
            if len(re.findall("\d+-\d+",l)) == 0 or re.findall("\d+-\d+",l)[0] != l:
                check_info.append("Sai định dạng nhập trang in")
                return False

    #Check pages valid... ex: 3-4, 4-5, 3-6 are allowed but 3-3, 3-2, 6-4

    for l in lists:
        if l.find('-') != -1:
            if int(re.findall("\d+",l)[0]) >= int(re.findall("\d+",l)[1]):
                check_info.append("Số trang trước '-' phải nhỏ hơn số trang ở sau")
                return False
    
    
    file = open(document_path, "rb")
    pdfReader = PyPDF2.PdfReader(file)

    total_pages = len(pdfReader.pages)
    all_pages = re.findall("\d+", pages_print)
    all_pages = [eval(i) for i in all_pages]

    if min(all_pages) < 1 or max(all_pages) > total_pages:
        check_info.append("Số trang in bạn nhập nhỏ hơn 1 hoặc lớn hơn tổng số trang hiện tại")
        return False

    #tinh so trang
    count = 0
    for l in lists:
        if l.find('-') == -1:
            count = count + 1
        else:
            count = count + (int(re.findall("\d+",l)[1]) - int(re.findall("\d+",l)[0])) + 1

    if (side != 'one-sided'):
        count = math.ceil(count/2)
    count = count*int(num_copies)

    #kiem tra so trang
    page_balance = (CampusUser.objects.filter(base_user = username))[0].page_balance
    if count < page_balance:
        check_info.append("Số giấy in hiện tại không đủ để thực hiện thao tác in")
        return False
    check_info.append(count)
    
    #Create first page

    
    pdf = FPDF()
    pdf.add_page()
    pdf.set_xy(0, 0)
    pdf.set_font('arial', 'B', 13.0)
    text = "\n\n\n\n\n\nnguoi dung: {}. Ngay gui: {}. So giay in: {}. Trang in: {}".format(username.username, date_send, count, pages_print)
    pdf.write(h = 5,txt=text)
    path = 'header page for {}.pdf'.format(filename)
    pdf.output(path, 'F')

    pdfs = [path, document_path]

    merger = PyPDF2.PdfMerger()

    for pdf in pdfs:
        merger.append(pdf)

    merger.write(document_path)
    merger.close()
    os.remove(path)

    #edit pages_print
    new_pages_print = "1,"
    for l in lists:
        if l.find("-") == -1:
            new_pages_print = new_pages_print + str(int(l) + 1) + ','
        else:
            new_pages_print = new_pages_print + str(int(re.findall("\d+",l)[0]) + 1) + "-" + str(int(re.findall("\d+",l)[1]) + 1) + ','
    new_pages_print = new_pages_print[:-1]
    check_info.append(new_pages_print)  
    return True
