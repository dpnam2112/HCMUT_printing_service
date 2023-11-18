import { FC } from "react";
import type { PrinterRenderViewProps } from "../../../models/types";
import { Button, Checkbox, Dialog, Table } from "@radix-ui/themes";
import DialogEditingPrinter from "./dialog-editing-printer";

type PrinterViewTableRowProps = {
  data: PrinterRenderViewProps;
  isDeleting: boolean;
  isEditing: boolean;
  handleSelectRow: (idRow: string) => void;
  handleClickSave: (newData: PrinterRenderViewProps) => void;
};

const PrinterViewTableRow: FC<PrinterViewTableRowProps> = ({
  data,
  isDeleting,
  isEditing,
  handleSelectRow,
  handleClickSave,
}) => {
  return (
    <Table.Row>
      <Table.Cell>
        <div
          className={`flex items-center gap-2 w-full h-full pl-2 ${
            data.isSelectedDelete && "line-through"
          }`}
        >
          <div
            className={`${
              data.isRunning ? "bg-green-500" : "bg-red-500"
            } rounded-full w-4 h-4`}
          ></div>
          <span
            className={`text-sm font-medium ${
              data.isRunning ? "text-green-500" : "text-red-500"
            }`}
          >
            {data.isRunning ? "Đang hoạt động" : "Không hoạt động"}
          </span>
        </div>
      </Table.Cell>
      <Table.Cell>
        {renderText(data.name, data.isRunning, data.isSelectedDelete)}
      </Table.Cell>
      <Table.Cell>
        {renderText(data.facility, data.isRunning, data.isSelectedDelete)}
      </Table.Cell>
      <Table.Cell>
        {renderText(data.building, data.isRunning, data.isSelectedDelete)}
      </Table.Cell>
      <Table.Cell>
        {renderText(data.room, data.isRunning, data.isSelectedDelete)}
      </Table.Cell>
      {isDeleting && (
        <Table.Cell>
          <div
            className="w-full h-full cursor-pointer"
            onClick={() => {
              handleSelectRow(data.id);
            }}
          >
            <Checkbox
              checked={data.isSelectedDelete}
              color="indigo"
              className="cursor-pointer"
              onChange={() => {}}
            />
          </div>
        </Table.Cell>
      )}
      {isEditing && (
        <Table.Cell>
          <div className="w-full h-full cursor-pointer" onClick={() => {}}>
            <Dialog.Root>
              <Dialog.Trigger>
                <Button variant="surface">Chỉnh Sửa</Button>
              </Dialog.Trigger>
              <DialogEditingPrinter
                data={data}
                handleClickSave={handleClickSave}
              />
            </Dialog.Root>
          </div>
        </Table.Cell>
      )}
    </Table.Row>
  );
};

const renderText = (
  text: string,
  isRunning: boolean,
  isSelectedDelete: boolean
) => {
  return (
    <div className="w-full h-full flex items-center pl-2">
      <span
        className={`select-none font-medium text-sm ${
          isSelectedDelete && "line-through"
        } ${!isRunning && "text-red-500"}`}
      >
        {text}
      </span>
    </div>
  );
};

export default PrinterViewTableRow;
