import { FC } from "react";
import type { PrinterRenderViewProps } from "../../../models/types";
import { Checkbox, Table } from "@radix-ui/themes";

type PrinterViewTableRowProps = {
  data: PrinterRenderViewProps;
  isDeleting: boolean;
  handleSelectRow: (idRow: string) => void;
};

const PrinterViewTableRow: FC<PrinterViewTableRowProps> = ({
  data,
  isDeleting,
  handleSelectRow,
}) => {
  return (
    <Table.Row>
      <Table.Cell>
        <div
          className={`flex items-center gap-2 w-full h-full ${
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
              color="indigo"
              className="cursor-pointer"
              onChange={() => {}}
            />
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
    <span
      className={`select-none font-medium text-sm ${
        isSelectedDelete && "line-through"
      } ${!isRunning && "text-red-500"}`}
    >
      {text}
    </span>
  );
};

export default PrinterViewTableRow;
