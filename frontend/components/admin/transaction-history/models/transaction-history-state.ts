import { SORT_CONFIG_TRANSACTION_HISTORY } from "../../../../models/constant";
import { TransactionHistoryObject } from "../../../../models/types";

class TransactionHistoryState {
  constructor() {}

  public getSortedList(
    listInput: TransactionHistoryObject[],
    sortConfig: SORT_CONFIG_TRANSACTION_HISTORY | undefined
  ): TransactionHistoryObject[] {
    const list = [...listInput];
    if (!sortConfig) {
      return list;
    }

    if (sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.NAME_ASC) {
      list.sort((a, b) => {
        return a.name < b.name ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.NAME_DESC) {
      list.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    }

    if (sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.AMOUNT_ASC) {
      list.sort((a, b) => {
        return a.amount < b.amount ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.AMOUNT_DESC) {
      list.sort((a, b) => {
        return a.amount > b.amount ? 1 : -1;
      });
    }

    if (sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.DATE_ASC) {
      list.sort((a, b) => {
        return a.madeAt < b.madeAt ? 1 : -1;
      });
    }
    if (sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.DATE_DESC) {
      list.sort((a, b) => {
        return a.madeAt > b.madeAt ? 1 : -1;
      });
    }

    return list;
  }
}

export default TransactionHistoryState;
