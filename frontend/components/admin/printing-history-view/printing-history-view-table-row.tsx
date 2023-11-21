import { FC } from "react";
import type { HistoryViewProps } from "./models/types";
import { Button, Checkbox, Dialog, Table } from "@radix-ui/themes";
// import DialogEditingPrinter from "./dialog-editing-printer";


type TableRowProps = {
  data: HistoryViewProps;
};


const TableRow : FC<TableRowProps> = ({
  data,
}) => {
  return (
    <Table.Row> 
      <Table.Cell>
        {renderText(data.username)}
      </Table.Cell>
      <Table.Cell>
        {renderText(data.time.toLocaleString())}
      </Table.Cell>
      <Table.Cell>
        {renderText(data.location.facility + ": " +
                    data.location.building + " " +
                    data.location.room)}
      </Table.Cell>
      <Table.Cell>
        {renderText(data.file_name)}
      </Table.Cell>
      <Table.Cell>
        {renderText(data.pages+ " Trang") }
      </Table.Cell>
      <Table.Cell>
        {renderText(data.copys+ " Bản sao") }
      </Table.Cell>
      <Table.Cell>
        {renderText("A" + data.size)}
      </Table.Cell>
      <Table.Cell>
        {renderText(data.type)}
      </Table.Cell>
      
    </Table.Row>
  );
};

const renderText = (
  text: any,
) => {
  return (
    <div className="w-full h-full flex items-center pl-2">
      <span
        className={`select-none font-medium text-sm`}
      >
        {text}
      </span>
    </div>
  );
};

export default TableRow;
