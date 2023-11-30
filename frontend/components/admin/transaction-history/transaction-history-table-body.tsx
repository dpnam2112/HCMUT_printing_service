import { FC } from "react";
import type { TransactionHistoryObject } from "../../../models/types";
import TransactionHistoryTableRow from "./transaction-history-table-row";

type TransactionHistoryTableBodyProps = {
  data: TransactionHistoryObject[];
  rowsNumPerPage: number;
  currentPage: number;
};

const TransactionHistoryTableBody: FC<TransactionHistoryTableBodyProps> = ({
  data,
  rowsNumPerPage,
  currentPage,
}) => {
  return (
    <>
      {data.map((obj: TransactionHistoryObject, index: number) => {
        const start = (currentPage - 1) * rowsNumPerPage;
        const end = start + rowsNumPerPage;
        const shouldRender = index >= start && index < end;

        if (!shouldRender) {
          return null;
        }

        return (
          <TransactionHistoryTableRow
            key={`Transaction History Table ${index}`}
            data={obj}
          />
        );
      })}
    </>
  );
};

export default TransactionHistoryTableBody;
