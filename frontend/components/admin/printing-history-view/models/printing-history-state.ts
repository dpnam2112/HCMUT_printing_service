import { lstat } from "fs";
import { SORT_CONFIG } from "./constant";
import { HistoryViewProps } from "./types";



class PrintingHistoryState {
  constructor() {}
  public getSorted(
    listInput: HistoryViewProps[],
    sortConfig: SORT_CONFIG | undefined
  ): HistoryViewProps[] {
    const list = [...listInput];
    if (!sortConfig) {
      return list;
    }
    if (sortConfig === SORT_CONFIG.USERNAME_ASC) {
      list.sort((a, b) => {
        return a.username < b.username ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG.USERNAME_DESC) {
      list.sort((a, b) => {
        return a.username > b.username ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG.TIME_ASC) {
      list.sort((a, b) => {
        return a.time < b.time ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG.TIME_DESC) {
      list.sort((a, b) => {
        return a.time > b.time ? 1 : -1;
      });
    }

    if (sortConfig === SORT_CONFIG.LOCATION_ASC) {
      list.sort((a, b) => {
        return  a.location.facility < b.location.facility ? 1 : 
                a.location.building < b.location.building ? 1 :
                a.location.room < b.location.room ? 1 :
                -1;
      });
    }
    if (sortConfig === SORT_CONFIG.LOCATION_DESC) {
      list.sort((a, b) => {
        return  a.location.facility > b.location.facility ? 1 : 
                a.location.building > b.location.building ? 1 :
                a.location.room > b.location.room ? 1 :
                -1;
      });
    }

    if (sortConfig === SORT_CONFIG.PAGES_ASC) {
      list.sort((a, b) => {
        return a.pages > b.pages ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG.PAGES_DESC) {
      list.sort((a, b) => {
        return a.pages < b.pages ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG.SIZE_ASC) {
      list.sort((a, b) => {
        return a.size > b.size ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG.SIZE_DESC) {
      list.sort((a, b) => {
        return a.size < b.size ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG.FILENAME_ASC) {
      list.sort((a, b) => {
        return a.file_name > b.file_name ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG.FILENAME_DESC) {
      list.sort((a, b) => {
        return a.file_name < b.file_name ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG.COPYS_ASC) {
      list.sort((a, b) => {
        return a.copys > b.copys ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG.COPYS_DESC) {
      list.sort((a, b) => {
        return a.copys < b.copys ? 1 : -1;
      });
    }
    return list;
  }
}

export default PrintingHistoryState;
