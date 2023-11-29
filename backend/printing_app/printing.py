from dataclasses import dataclass
from . import enums as module_enums

@dataclass
class PrintConfig:
    page_ranges: str
    copies_count: int
    paper_type: module_enums.PaperType
    left_to_right: bool
    printer_name: str

class PrintClient:
    def __init__(self):
        pass

    def print(self, config: PrintConfig, file):
        """ print the file referenced by the `file` object.

        Args:
            config (PrintConfig): configuration used for printing process.
            file (fileObject): a file object referencing to the file that will be printed.

        Returns:
            True if the printing process is successful, False otherwise
        """
        pass