import {
  MENU_NUMBER_OF_COPY,
  MENU_PRINT_PAGE,
  MENU_PRINT_TYPE,
} from "../../models/constant";
import networkService from "../../models/network-service";
import { Location, PayLoadPrinting } from "../../models/types";

const getPayLoadPrinting = async (
  file: any,
  pageSize: "A3" | "A4",
  pagePrint: MENU_PRINT_PAGE,
  printingPage: string,
  copyNumber: MENU_NUMBER_OF_COPY,
  printingCopyNumber: number,
  side: MENU_PRINT_TYPE,
  selectedLocation: Location
): Promise<PayLoadPrinting | undefined> => {
  const printers = await networkService.getPrinters();
  const printer = printers.find((printer) => {
    const location = printer.location;
    return (
      location.campus === selectedLocation.campus &&
      location.building_name === selectedLocation.building_name &&
      location.floor === selectedLocation.floor &&
      location.room_code === selectedLocation.room_code
    );
  });

  if (!printer) {
    return undefined;
  }

  const payLoad: PayLoadPrinting = {
    filename: file,
    pages_print: getPagePrint(pagePrint, printingPage),
    printer_name: printer.name,
    page_size: pageSize,
    num_copies: getNumCopies(copyNumber, printingCopyNumber),
    side: getSide(side),
    orient: "vertical",
  };

  return payLoad;
};

const getSide = (side: MENU_PRINT_TYPE) => {
  switch (side) {
    case MENU_PRINT_TYPE.DOUBLE_LONG:
      return "two-sided-long-edge";
    case MENU_PRINT_TYPE.DOUBLE_SHORT:
      return "two-sided-short-edge";
    case MENU_PRINT_TYPE.ONE:
      return "one-sided";
  }
};

const getNumCopies = (
  copyNumber: MENU_NUMBER_OF_COPY,
  printingCopyNumber: number
) => {
  switch (copyNumber) {
    case MENU_NUMBER_OF_COPY.ONE:
      return 1;
    case MENU_NUMBER_OF_COPY.TWO:
      return 2;
    case MENU_NUMBER_OF_COPY.FOUR:
      return 4;
    case MENU_NUMBER_OF_COPY.FIVE:
      return 5;
    case MENU_NUMBER_OF_COPY.CUSTOM:
      return printingCopyNumber;
  }
};

const getPagePrint = (pagePrint: MENU_PRINT_PAGE, printingPage: string) => {
  switch (pagePrint) {
    case MENU_PRINT_PAGE.ALL:
      return "all";
    case MENU_PRINT_PAGE.CUSTOM:
      return printingPage;
  }
};

export { getPayLoadPrinting };
