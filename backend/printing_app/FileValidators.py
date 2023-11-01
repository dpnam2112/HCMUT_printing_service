class FileValidator:
    """
        This is the interface for all file validators.
    """

    def validate(self, file):
        """ Validate the file referenced by the `file` object.

        Args:
            file: Python file object referencing to the file being validated.

        Returns:
            True if the file is valid, False otherwise.

        Raises:
            NotImplementedError: The method is not implemented in the subclass.
        """
        raise NotImplementedError()

class PDFValidator(FileValidator):
    pass