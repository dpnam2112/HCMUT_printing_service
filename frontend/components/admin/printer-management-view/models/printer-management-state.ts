import { lstat } from "fs";
import { SORT_CONFIG_PRINTER_MANAGEMENT } from "../../../../models/constant";
import { PrinterRenderViewProps } from "../../../../models/types";

class PrinterManagementState {
  constructor() {}

  public getSortedPrinters(
    listInput: PrinterRenderViewProps[],
    sortConfig: SORT_CONFIG_PRINTER_MANAGEMENT | undefined
  ): PrinterRenderViewProps[] {
    const list = [...listInput];
    if (!sortConfig) {
      return list;
    }

    if (sortConfig === SORT_CONFIG_PRINTER_MANAGEMENT.NAME_ASC) {
      list.sort((a, b) => {
        return a.name < b.name ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG_PRINTER_MANAGEMENT.NAME_DESC) {
      list.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    }

    if (sortConfig === SORT_CONFIG_PRINTER_MANAGEMENT.FACILITY_ASC) {
      list.sort((a, b) => {
        return a.facility < b.facility ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG_PRINTER_MANAGEMENT.FACILITY_DESC) {
      list.sort((a, b) => {
        return a.facility > b.facility ? 1 : -1;
      });
    }

    if (sortConfig === SORT_CONFIG_PRINTER_MANAGEMENT.BUILDING_ASC) {
      list.sort((a, b) => {
        return a.building < b.building ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG_PRINTER_MANAGEMENT.BUILDING_DESC) {
      list.sort((a, b) => {
        return a.building > b.building ? 1 : -1;
      });
    }

    if (sortConfig === SORT_CONFIG_PRINTER_MANAGEMENT.ROOM_ASC) {
      list.sort((a, b) => {
        return a.room < b.room ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG_PRINTER_MANAGEMENT.ROOM_DESC) {
      list.sort((a, b) => {
        return a.room > b.room ? 1 : -1;
      });
    }

    return list;
  }
}

export default PrinterManagementState;
