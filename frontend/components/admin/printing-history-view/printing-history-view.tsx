import { ArrowPathIcon } from "@heroicons/react/20/solid";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import {
  Button,
  Table,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  IconButton,
  TextField,
  Tooltip,
} from "@radix-ui/themes";
import { FC, useEffect, useState } from "react";
import { HistoryDataObject, HistoryViewProps } from "./models/types";
import { mData } from "./mock-data";
import {
  ADMIN_MANAGEMENT_VIEW,
  SORT_CONFIG_PRINTER_MANAGEMENT,
} from "../../../models/constant";
import PrintingHistoryState from "./models/printing-history-state";
import { SORT_CONFIG } from "./models/constant";
import TableViewBottom from "./printing-history-view-bottom";
import PrinterViewTableBody from "./printing-history-view-table-body";

const state = new PrintingHistoryState();

type TableHeaderProps = {
  label: string;
  ASConfig: SORT_CONFIG;
  DESConfig: SORT_CONFIG;
};

const PrintingTableView = () => {
  const [tableList, setTableList] = useState<HistoryDataObject[]>(mData);
  const [tableListRendered, setTableListRendered] =
    useState<HistoryViewProps[]>(mData);
  const [textFilter, setTextFilter] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<SORT_CONFIG | undefined>(
    undefined
  );
  const [filterTime, setFilterTime] = useState<string>("Tất cả lịch sử");
  const [rowsNumPerPage, setRowsNumPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const newTableListRendered = state.getSorted(
      getFilteredTimeList(tableList),
      sortConfig
    );

    setTableListRendered(newTableListRendered);
  }, [filterTime]);

  useEffect(() => {
    const newTableListRendered = state.getSorted(
      getFilteredList(tableList),
      sortConfig
    );

    setTableListRendered(getFilteredTimeList(newTableListRendered));
  }, [textFilter]);

  useEffect(() => {
    const newHistoryListRendered = state.getSorted(
      tableListRendered,
      sortConfig
    );
    setTableListRendered(
      getFilteredTimeList(getFilteredList(newHistoryListRendered))
    );
  }, [sortConfig]);

  const getFilteredTimeList = (list: HistoryViewProps[]) => {
    const oldDate = new Date().setMonth(new Date().getMonth() - 36);
    return list.flatMap((row: HistoryViewProps) => {
      if (filterTime === "Lịch sử 1 tuần trước") {
        const oldDate = new Date();
        oldDate.setDate(new Date().getDate() - 7);
        if (oldDate < row.time) return [row];
      }
      if (filterTime === "Lịch sử 2 tuần trước") {
        const oldDate = new Date();
        oldDate.setDate(new Date().getDate() - 14);
        if (oldDate < row.time) return [row];
      }
      if (filterTime === "Lịch sử 1 tháng trước") {
        const oldDate = new Date();
        oldDate.setMonth(new Date().getMonth() - 1);
        if (oldDate < row.time) return [row];
      }
      if (filterTime === "Lịch sử 2 tháng trước") {
        const oldDate = new Date();
        oldDate.setMonth(new Date().getMonth() - 2);
        if (oldDate < row.time) return [row];
      }
      if (filterTime === "Lịch sử 4 tháng trước") {
        const oldDate = new Date();
        oldDate.setMonth(new Date().getMonth() - 4);
        if (oldDate < row.time) return [row];
      }
      if (filterTime === "Lịch sử 6 tháng trước") {
        const oldDate = new Date();
        oldDate.setMonth(new Date().getMonth() - 6);
        if (oldDate < row.time) return [row];
      }
      if (filterTime === "Tất cả lịch sử") {
        return [row];
      }

      return [];
    });
  };

  const getFilteredList = (list: HistoryViewProps[]) => {
    const text = textFilter.toLowerCase();
    if (!text) {
      return list;
    }
    return list.flatMap((row: HistoryViewProps) => {
      if (row.username.toLowerCase().includes(text)) {
        return [row];
      }
      if (row.time.toLocaleString().toLowerCase().includes(text)) {
        return [row];
      }
      if (row.location.facility.toLowerCase().includes(text)) {
        return [row];
      }
      if (row.location.building.toLowerCase().includes(text)) {
        return [row];
      }
      if (row.location.room.toLowerCase().includes(text)) {
        return [row];
      }
      if (row.file_name.toLowerCase().includes(text)) {
        return [row];
      }
      if (row.file_name.toLowerCase().includes(text)) {
        return [row];
      }
      if (row.pages.toString().includes(text)) {
        return [row];
      }
      if (row.size.toString().includes(text)) {
        return [row];
      }
      if (row.type.toLowerCase().includes(text)) {
        return [row];
      }
      return [];
    });
  };

  const RenderSortableHeaderCell: FC<TableHeaderProps> = ({
    label,
    ASConfig,
    DESConfig,
  }) => {
    const handleSortClick = () => {
      if (sortConfig === ASConfig) {
        setSortConfig(DESConfig);
      } else if (sortConfig === DESConfig) {
        setSortConfig(undefined);
      } else {
        setSortConfig(ASConfig);
      }
    };
    return (
      <div
        className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1"
        onClick={handleSortClick}
      >
        <span className="text-sm font-semibold">{label}</span>
        {sortConfig === ASConfig ? (
          <ArrowUpIcon />
        ) : sortConfig === DESConfig ? (
          <ArrowDownIcon />
        ) : (
          <CaretSortIcon />
        )}
      </div>
    );
  };

  return (
    <div className=" w-full h-full flex flex-col gap-5 p-5 overflow-x-auto">
      {/* <div className="flex flex-col gap-5"> */}
      <div className="flex flex-col">
        <span className="font-bold text-2xl">Xin chào SPSO!</span>
        <span className="font-semibold text-base text-[#71717A]">
          Đây là lịch sử in.
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
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="w-full">
              <Button className="w-fit px-0 h-5">
                <div className="flex items-center justify-between focus-within:outline-none w-full">
                  {filterTime}
                  <CaretSortIcon width="22" height="22" />
                </div>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenuContent className="w-[50]">
              <DropdownMenuCheckboxItem
                checked={filterTime === "Lịch sử 1 tuần trước"}
                onSelect={() => {
                  setFilterTime("Lịch sử 1 tuần trước");
                }}
              >
                Lịch sử 1 tuần trước
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterTime === "Lịch sử 2 tuần trước"}
                onSelect={() => {
                  setFilterTime("Lịch sử 2 tuần trước");
                }}
              >
                Lịch sử 2 tuần trước
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={filterTime === "Lịch sử 1 tháng trước"}
                onSelect={() => {
                  setFilterTime("Lịch sử 1 tháng trước");
                }}
              >
                Lịch sử 1 tháng trước
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterTime === "Lịch sử 2 tháng trước"}
                onSelect={() => {
                  setFilterTime("Lịch sử 2 tháng trước");
                }}
              >
                Lịch sử 2 tháng trước
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterTime === "Lịch sử 4 tháng trước"}
                onSelect={() => {
                  setFilterTime("Lịch sử 4 tháng trước");
                }}
              >
                Lịch sử 4 tháng trước
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterTime === "Lịch sử 6 tháng trước"}
                onSelect={() => {
                  setFilterTime("Lịch sử 6 tháng trước");
                }}
              >
                Lịch sử 6 tháng trước
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={filterTime === "Tất cả lịch sử"}
                onSelect={() => {
                  setFilterTime("Tất cả lịch sử");
                }}
              >
                Tất cả lịch sử
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu.Root>
        </div>
      </div>
      <div className="border rounded overflow-x-auto overflow-auto">
        <Table.Root className="overflow-auto">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
                <RenderSortableHeaderCell
                  label="Người dùng"
                  ASConfig={SORT_CONFIG.USERNAME_ASC}
                  DESConfig={SORT_CONFIG.USERNAME_DESC}
                />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <RenderSortableHeaderCell
                  label="Thời gian"
                  ASConfig={SORT_CONFIG.TIME_ASC}
                  DESConfig={SORT_CONFIG.TIME_DESC}
                />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <RenderSortableHeaderCell
                  label="Địa điểm"
                  ASConfig={SORT_CONFIG.LOCATION_ASC}
                  DESConfig={SORT_CONFIG.LOCATION_DESC}
                />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <RenderSortableHeaderCell
                  label="Tên File"
                  ASConfig={SORT_CONFIG.FILENAME_ASC}
                  DESConfig={SORT_CONFIG.FILENAME_DESC}
                />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <RenderSortableHeaderCell
                  label="Số trang"
                  ASConfig={SORT_CONFIG.PAGES_ASC}
                  DESConfig={SORT_CONFIG.PAGES_DESC}
                />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <RenderSortableHeaderCell
                  label="Số bản sao"
                  ASConfig={SORT_CONFIG.COPYS_ASC}
                  DESConfig={SORT_CONFIG.COPYS_DESC}
                />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <RenderSortableHeaderCell
                  label="Kích thước"
                  ASConfig={SORT_CONFIG.SIZE_ASC}
                  DESConfig={SORT_CONFIG.SIZE_DESC}
                />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1">
                  <span className="text-sm font-semibold">In trang</span>
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body className="overflow-x-auto overflow-y-auto">
            <PrinterViewTableBody
              rowListRendered={tableListRendered}
              rowsNumPerPage={rowsNumPerPage}
              currentPage={currentPage}
            />
          </Table.Body>
        </Table.Root>
      </div>
      <TableViewBottom
        rowsNumPerPage={rowsNumPerPage}
        rowsNum={tableListRendered.length}
        setRowsNumPerPage={setRowsNumPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PrintingTableView;
