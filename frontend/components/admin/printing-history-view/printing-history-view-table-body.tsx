import { FC } from "react";
import type {
  HistoryDataObject,
  HistoryViewProps,
} from "./models/types";
import PrinterViewTableRow from "./printing-history-view-table-row";

type TableBodyProps = {
  rowListRendered: HistoryViewProps[];
  rowsNumPerPage: number;
  currentPage: number;

};

const PrinterViewTableBody: FC<TableBodyProps> = ({
  rowListRendered,
  rowsNumPerPage,
  currentPage,
}) => {
  return (
    <>
      {rowListRendered.map((row: HistoryDataObject, index: number) => {
        const start = (currentPage - 1) * rowsNumPerPage;
        const end = start + rowsNumPerPage;
        const shouldRender = index >= start && index < end;
        if (!shouldRender) {
          return null;
        }
        return (
          <PrinterViewTableRow
            key={row.id}
            data={row}
          />
        );
      })}
    </>
  );
};

export default PrinterViewTableBody;
