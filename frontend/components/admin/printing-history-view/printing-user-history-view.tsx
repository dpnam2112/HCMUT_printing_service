import { CaretSortIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  TextField,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { PrintingHistory, UserInfo } from "../../../models/types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import networkService from "../../../models/network-service";

const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "Ngày giao dịch",
    width: 200,
  },
  {
    field: "file_name",
    headerName: "Tên file",
    width: 200,
  },
  {
    field: "file_ext",
    headerName: "Đuôi file",
    width: 100,
  },
  {
    field: "two_sided",
    headerName: "In 2 mặt",
    width: 100,
  },
  {
    field: "page_count",
    headerName: "Số trang",
    width: 100,
  },
  {
    field: "sheet_type",
    headerName: "Loại giấy",
    width: 100,
  },
];

const convertToRows = (printingsHistory: PrintingHistory[]): any[] => {
  return printingsHistory.map((printingHistory, index) => {
    const user = printingHistory.user;
    const timestamp: Date = new Date(printingHistory.date);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    const formattedDate: string = timestamp.toLocaleDateString(
      "en-US",
      options
    );
    return {
      id: index,
      date: formattedDate,
      file_name: printingHistory.file_name,
      file_ext: printingHistory.file_ext,
      two_sided: printingHistory.two_sided ? "Có" : "Không",
      page_count: printingHistory.page_count,
      sheet_type: printingHistory.sheet_type,
    };
  });
};

const getName = (userInfo: UserInfo) => {
  const name =
    userInfo.base_user.last_name + " " + userInfo.base_user.first_name;
  return name.length > 1 ? name : userInfo.base_user.username;
};

const PrintingUserHistoryView = () => {
  const [printingsHistory, setPrintingsHistory] = useState<PrintingHistory[]>(
    []
  );
  const [textFilter, setTextFilter] = useState<string>("");
  const [filterTime, setFilterTime] = useState<string>("Tất cả lịch sử");

  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    fetchUserInfo();
    handleGetNewPrintingsHistory();
  }, []);

  const fetchUserInfo = async () => {
    const newUserInfo = await networkService.getUserInfo();
    setUserInfo(newUserInfo);
  };

  const handleGetNewPrintingsHistory = async () => {
    const newPrintingsHistory = await networkService.getPrintingsHistory();
    setPrintingsHistory(newPrintingsHistory);
  };

  const getFilteredTimeList = (list: PrintingHistory[]) => {
    return list.flatMap((row: PrintingHistory) => {
      if (filterTime === "Tất cả lịch sử") {
        return [row];
      }

      const timestamp = new Date(row.date);
      const currentDate = new Date();

      if (filterTime === "Lịch sử 1 tuần trước") {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(currentDate.getDate() - 7);
        if (timestamp >= sevenDaysFromNow) {
          return [row];
        }
      }
      if (filterTime === "Lịch sử 2 tuần trước") {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(currentDate.getDate() - 14);
        if (timestamp >= sevenDaysFromNow) {
          return [row];
        }
      }
      if (filterTime === "Lịch sử 1 tháng trước") {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(currentDate.getDate() - 31);
        if (timestamp >= sevenDaysFromNow) {
          return [row];
        }
      }
      if (filterTime === "Lịch sử 2 tháng trước") {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(currentDate.getDate() - 62);
        if (timestamp >= sevenDaysFromNow) {
          return [row];
        }
      }
      if (filterTime === "Lịch sử 4 tháng trước") {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(currentDate.getDate() - 124);
        if (timestamp >= sevenDaysFromNow) {
          return [row];
        }
      }
      if (filterTime === "Lịch sử 6 tháng trước") {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(currentDate.getDate() - 186);
        if (timestamp >= sevenDaysFromNow) {
          return [row];
        }
      }

      return [];
    });
  };

  const getFilteredList = (list: PrintingHistory[]) => {
    const text = textFilter.toLowerCase();
    if (!text) {
      return list;
    }
    return list.flatMap((obj: PrintingHistory) => {
      const user = obj.user;
      const name =
        user.first_name || user.last_name
          ? `${user.first_name} ${user.last_name}`
          : user.username;
      const textObj = `${obj.date} ${name} ${obj.two_sided ? "Có" : "Không"} ${
        obj.file_ext
      } ${obj.page_count} ${obj.sheet_type}`;
      return textObj.toLowerCase().includes(text.toLowerCase()) ? [obj] : [];
    });
  };

  const getUserPrintingHistory = (list: PrintingHistory[]) => {
    if (!userInfo) {
      return list;
    }

    return list.flatMap((obj: PrintingHistory) => {
      return obj.user.id === userInfo.base_user.id ? [obj] : [];
    });
  };

  const rows = convertToRows(
    getFilteredTimeList(
      getFilteredList(getUserPrintingHistory(printingsHistory))
    )
  );

  if (!userInfo) {
    return <div className="w-full h-full">Có lỗi xảy ra</div>;
  }

  return (
    <div className="w-full h-full flex flex-col gap-5 p-5 overflow-x-auto">
      <div className="flex flex-col">
        <span className="font-bold text-2xl">
          Xin chào {getName(userInfo)}!
        </span>
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
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
            },
          }}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default PrintingUserHistoryView;
