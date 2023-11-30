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
                    return True
                except:
                    return False
            elif extension == '.docx':
                try:
                    Document(file_path)
                    return True
                except:
                    return False
            elif extension == '.pptx':
                try:
                    Presentation(file_path)
                    return True
                except:
                    return False
            elif extension == '.xlsx':
                try:
                    pd.read_excel(file_path,engine = 'openpyxl')
                    return True
                except:
                    return False
            elif extension == '.html':
                try:
                    with open(file_path, 'r') as f:
                        BeautifulSoup(f, 'html.parser')
                    return True
                except:
                    return False
            else:
                return False  # File type is not supported
        else:
            return False      # File is not exist
    
