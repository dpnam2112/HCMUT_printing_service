import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Button, Table, TextField, Tooltip } from "@radix-ui/themes";
import { useState } from "react";
import {
  HISTORY_TIME,
  SORT_CONFIG_TRANSACTION_HISTORY,
} from "../../../models/constant";
import MenuHistoryTime from "../../menus/menu-history-time";
import { TransactionHistoryObject } from "../../../models/types";
import dataTransactionHistory from "./mock-data";
import moment from "moment";
import TransactionHistoryTableBody from "./transaction-history-table-body";
import TransactionHistoryViewBottom from "./transaction-history-view-bottom";
import TransactionHistoryState from "./models/transaction-history-state";

const state = new TransactionHistoryState();

const TransactionHistoryView = () => {
  const [sortConfig, setSortConfig] = useState<
    SORT_CONFIG_TRANSACTION_HISTORY | undefined
  >(undefined);
  const [historyTime, setHistoryTime] = useState<HISTORY_TIME>(
    HISTORY_TIME.A_WEEK_AGO
  );
  const [data, setData] = useState<TransactionHistoryObject[]>(
    dataTransactionHistory
  );
  const [textFilter, setTextFilter] = useState<string>("");
  const [rowsNumPerPage, setRowsNumPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredData = state.getSortedList(
    data.flatMap((obj: TransactionHistoryObject) => {
      const date = moment(obj.madeAt).format("DD/MM/YYYY");
      const text = `${obj.name} ${obj.amount} ${date}`;

      if (text.toLowerCase().includes(textFilter.toLowerCase())) {
        return [obj];
      }
      return [];
    }),
    sortConfig
  );

  return (
    <div className="w-full h-full flex flex-col gap-5 p-5 overflow-x-auto">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <span className="font-bold text-2xl">Xin chào SPSO!</span>
          <span className="font-semibold text-base text-[#71717A]">
            Đây là giao diện lịch sử giao dịch.
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2 w-full">
            <TextField.Root className="w-full" variant="surface" size={"2"}>
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input
                id="inputFilterPrinter"
                placeholder="Lọc các hàng"
                value={textFilter}
                onChange={(e) => {
                  setTextFilter(e.target.value);
                }}
              />
            </TextField.Root>

            <div className="w-[220px]">
              <MenuHistoryTime
                historyTime={historyTime}
                setSelectedItem={setHistoryTime}
              />
            </div>

            <Tooltip content={"Xuất ra dữ liệu sang file excel."}>
              <Button
                className={`cursor-pointer`}
                onClick={() => {}}
                variant={"classic"}
              >
                <div className="flex items-center gap-2">Xuất dữ liệu</div>
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="border rounded overflow-x-auto">
        <Table.Root className="overflow-x-auto">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
                <div
                  className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1"
                  onClick={() => {
                    if (
                      sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.NAME_ASC
                    ) {
                      setSortConfig(SORT_CONFIG_TRANSACTION_HISTORY.NAME_DESC);
                    } else if (
                      sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.NAME_DESC
                    ) {
                      setSortConfig(undefined);
                    } else {
                      setSortConfig(SORT_CONFIG_TRANSACTION_HISTORY.NAME_ASC);
                    }
                  }}
                >
                  <span className="text-sm font-semibold">Tên</span>
                  {sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.NAME_ASC ? (
                    <ArrowUpIcon />
                  ) : sortConfig ===
                    SORT_CONFIG_TRANSACTION_HISTORY.NAME_DESC ? (
                    <ArrowDownIcon />
                  ) : (
                    <CaretSortIcon />
                  )}
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div
                  className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1"
                  onClick={() => {
                    if (
                      sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.AMOUNT_ASC
                    ) {
                      setSortConfig(
                        SORT_CONFIG_TRANSACTION_HISTORY.AMOUNT_DESC
                      );
                    } else if (
                      sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.AMOUNT_DESC
                    ) {
                      setSortConfig(undefined);
                    } else {
                      setSortConfig(SORT_CONFIG_TRANSACTION_HISTORY.AMOUNT_ASC);
                    }
                  }}
                >
                  <span className="text-sm font-semibold">Chi phí</span>
                  {sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.AMOUNT_ASC ? (
                    <ArrowUpIcon />
                  ) : sortConfig ===
                    SORT_CONFIG_TRANSACTION_HISTORY.AMOUNT_DESC ? (
                    <ArrowDownIcon />
                  ) : (
                    <CaretSortIcon />
                  )}
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div
                  className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1"
                  onClick={() => {
                    if (
                      sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.DATE_ASC
                    ) {
                      setSortConfig(SORT_CONFIG_TRANSACTION_HISTORY.DATE_DESC);
                    } else if (
                      sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.DATE_DESC
                    ) {
                      setSortConfig(undefined);
                    } else {
                      setSortConfig(SORT_CONFIG_TRANSACTION_HISTORY.DATE_ASC);
                    }
                  }}
                >
                  <span className="text-sm font-semibold">Ngày giao dịch</span>
                  {sortConfig === SORT_CONFIG_TRANSACTION_HISTORY.DATE_ASC ? (
                    <ArrowUpIcon />
                  ) : sortConfig ===
                    SORT_CONFIG_TRANSACTION_HISTORY.DATE_DESC ? (
                    <ArrowDownIcon />
                  ) : (
                    <CaretSortIcon />
                  )}
                </div>
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body className=" overflow-x-auto">
            <TransactionHistoryTableBody
              data={filteredData}
              rowsNumPerPage={rowsNumPerPage}
              currentPage={currentPage}
            />
          </Table.Body>
        </Table.Root>
      </div>

      <TransactionHistoryViewBottom
        rowsNum={data.length}
        rowsNumPerPage={rowsNumPerPage}
        setRowsNumPerPage={setRowsNumPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TransactionHistoryView;
