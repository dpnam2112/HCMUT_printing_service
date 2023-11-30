import { FC } from "react";
import type { TransactionHistoryObject } from "../../../models/types";
import { Table } from "@radix-ui/themes";
import moment from "moment";

type TransactionHistoryTableRowProps = {
  data: TransactionHistoryObject;
};

const TransactionHistoryTableRow: FC<TransactionHistoryTableRowProps> = ({
  data,
}) => {
  return (
    <Table.Row>
      <Table.Cell>{renderText(data.name)}</Table.Cell>
      <Table.Cell>{renderText(`${data.amount} VNĐ`)}</Table.Cell>
      <Table.Cell>
        {renderText(moment(data.madeAt).format("DD/MM/YYYY"))}
      </Table.Cell>
    </Table.Row>
  );
};

const renderText = (text: string) => {
  return (
    <div className="w-full h-full flex items-center pl-2">
      <span className={`select-none font-medium text-sm`}>{text}</span>
    </div>
  );
};

export default TransactionHistoryTableRow;
