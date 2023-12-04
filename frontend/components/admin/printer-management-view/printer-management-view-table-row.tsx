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
      <Table.Cell>{renderText(data.name, data.isSelectedDelete)}</Table.Cell>
      <Table.Cell>
        {renderText(data.location.campus, data.isSelectedDelete)}
      </Table.Cell>
      <Table.Cell>
        {renderText(data.location.building_name, data.isSelectedDelete)}
      </Table.Cell>
      <Table.Cell>
        {renderText(data.location.room_code, data.isSelectedDelete)}
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

const renderText = (text: string, isSelectedDelete: boolean) => {
  return (
    <div className="w-full h-full flex items-center pl-2">
      <span
        className={`select-none font-medium text-sm ${
          isSelectedDelete && "line-through"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default PrinterViewTableRow;
