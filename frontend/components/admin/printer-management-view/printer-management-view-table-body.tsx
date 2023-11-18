import { FC } from "react";
import type {
  PrinterRenderViewProps,
  PrinterViewObject,
} from "../../../models/types";
import PrinterViewTableRow from "./printer-management-view-table-row";

type PrinterViewTableBodyProps = {
  printerListRendered: PrinterRenderViewProps[];
  rowsNumPerPage: number;
  currentPage: number;
  isDeleting: boolean;
  isEditing: boolean;
  handleSelectRow: (idRow: string) => void;
  handleClickSave: (newData: PrinterRenderViewProps) => void;
};

const PrinterViewTableBody: FC<PrinterViewTableBodyProps> = ({
  printerListRendered,
  rowsNumPerPage,
  currentPage,
  isDeleting,
  isEditing,
  handleSelectRow,
  handleClickSave,
}) => {
  return (
    <>
      {printerListRendered.map((printer: PrinterViewObject, index: number) => {
        const start = (currentPage - 1) * rowsNumPerPage;
        const end = start + rowsNumPerPage;
        const shouldRender = index >= start && index < end;

        if (!shouldRender) {
          return null;
        }

        return (
          <PrinterViewTableRow
            key={printer.id}
            data={printer}
            isEditing={isEditing}
            isDeleting={isDeleting}
            handleSelectRow={handleSelectRow}
            handleClickSave={handleClickSave}
          />
        );
      })}
    </>
  );
};

export default PrinterViewTableBody;
