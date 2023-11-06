import os
import sys
#from PyPDF2 import PdfFileReader
from pdfminer.high_level import extract_text
import docx
from docx import Document
from docx.opc.exceptions import PackageNotFoundError
import pptx
from pptx import Presentation
import pandas as pd
from bs4 import BeautifulSoup

class FileValidator:

    def validate(self, file_path):
        if( os.path.isfile(file_path) == True ):

            extension = os.path.splitext(file_path)[1]
            
            if extension == '.pdf':
                try:
                    #PdfFileReader(file_path)
                    text = extract_text(file_path)
                    return 'PDF file'
                except:
                    return 'Not a PDF file'
            elif extension == '.docx':
                try:
                    Document(file_path)
                    return 'DOCX file'
                except:
                    return 'Not a DOCX file'
            elif extension == '.doc':
                try:
                    # Attempt to open with python-docx
                    Document(file_path)
                    return 'Not a DOC file (possibly DOCX)'
                except PackageNotFoundError:
                    # If it fails, it could be a DOC file
                    return 'DOC file'
            elif extension == '.pptx':
                try:
                    Presentation(file_path)
                    return 'PPTX file'
                except:
                    return 'Not a PPTX file'
            elif extension == '.xlsx':
                try:
                    pd.read_excel(file_path,engine = 'openpyxl')
                    return 'XLSX file'
                except:
                    return 'Not a XLSX file'
            elif extension == '.html':
                try:
                    with open(file_path, 'r') as f:
                        BeautifulSoup(f, 'html.parser')
                    return 'HTML file'
                except:
                    return 'Not a HTML file'
            else:
                return 'File type not supported'
        else:
            return 'File is not exist!'
    
