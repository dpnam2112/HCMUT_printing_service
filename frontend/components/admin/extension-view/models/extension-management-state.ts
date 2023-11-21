import { SORT_CONFIG_EXTENSION_MANAGEMENT } from "../../../../models/constant";
import { ExtensionViewObject } from "../../../../models/types";

class ExtensionManagementState {
  public getSortedPrinters(
    listInput: ExtensionViewObject[],
    sortConfig: SORT_CONFIG_EXTENSION_MANAGEMENT | undefined
  ): ExtensionViewObject[] {
    const list = [...listInput];
    if (!sortConfig) {
      return list;
    }

    if (sortConfig === SORT_CONFIG_EXTENSION_MANAGEMENT.NAME_ASC) {
      list.sort((a, b) => {
        return a.name < b.name ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG_EXTENSION_MANAGEMENT.NAME_DESC) {
      list.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    }

    if (sortConfig === SORT_CONFIG_EXTENSION_MANAGEMENT.EXTENSION_ASC) {
      list.sort((a, b) => {
        return a.extension < b.extension ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG_EXTENSION_MANAGEMENT.EXTENSION_DESC) {
      list.sort((a, b) => {
        return a.extension > b.extension ? 1 : -1;
      });
    }

    return list;
  }
}

export default ExtensionManagementState;
