from dataclasses import dataclass
from . import enums as module_enums

@dataclass
class PrintConfig:
    page_ranges: str
    copies_count: int
    paper_type: module_enums.PaperType
    left_to_right: bool
    printer_name: str

class PrintServerClient:
    def __init__(self):
        pass

    def print(self, config: str, file):
        """ print the file referenced by the `file` object.

        Args:
            config (str): configuration used for printing process.
            file (fileObject): a file object referencing to the file that will be printed.

        Returns:
            true if the printing process is successful, false otherwise
        """
        pass