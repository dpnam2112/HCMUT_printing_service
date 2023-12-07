import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, TextField, Tooltip } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { HISTORY_TIME } from "../../../models/constant";
import MenuHistoryTime from "../../menus/menu-history-time";
import { TransactionHistory, UserInfo } from "../../../models/types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import networkService from "../../../models/network-service";

const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "Ngày giao dịch",
    width: 200,
  },
  {
    field: "total_cost",
    headerName: "Tổng tiền",
    width: 200,
    renderCell: (params) => {
      try {
        const totalCost = Number(params.value);
        const vndToUSD = 23000;
        const total = (totalCost * vndToUSD).toString();
        let str = "";
        let cnt = 0;
        for (let i = total.length - 1; i >= 0; i--) {
          str = total[i] + str;
          cnt++;
          if (cnt === 3 && i !== 0) {
            str = "." + str;
            cnt = 0;
          }
        }
        return <span>{str} VNĐ</span>;
      } catch (e) {
        return <span>{params.value}</span>;
      }
    },
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 200,
    renderCell: (params) => {
      const value = params.value;
      return (
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              value === "COMPLETED"
                ? "bg-[#00B341]"
                : value === "INCOMPLETED"
                ? "bg-[#FF0000]"
                : "bg-[#FFC000]"
            }`}
          ></div>
          <span>
            {value === "COMPLETED" ? "Đã thanh toán" : "Chưa thanh toán"}
          </span>
        </div>
      );
    },
  },
  {
    field: "a0_sheets",
    headerName: "Số tờ A0",
    width: 100,
  },
  {
    field: "a1_sheets",
    headerName: "Số tờ A1",
    width: 100,
  },
  {
    field: "a2_sheets",
    headerName: "Số tờ A2",
    width: 100,
  },
  {
    field: "a3_sheets",
    headerName: "Số tờ A3",
    width: 100,
  },
  {
    field: "a4_sheets",
    headerName: "Số tờ A4",
    width: 100,
  },

  {
    field: "transaction_id",
    headerName: "Mã giao dịch",
    width: 200,
  },
];

const getName = (userInfo: UserInfo) => {
  const name =
    userInfo.base_user.last_name + " " + userInfo.base_user.first_name;
  return name.length > 1 ? name : userInfo.base_user.username;
};

const convertToRows = (transactionHistory: TransactionHistory[]) => {
  return transactionHistory.map((transactionHistory: TransactionHistory) => {
    const timestamp: Date = new Date(transactionHistory.date);
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
      date: formattedDate,
      id: transactionHistory.transaction_id,
      transaction_id: transactionHistory.transaction_id,

      total_cost: transactionHistory.total_cost,
      a0_sheets: transactionHistory.a0_sheets,
      a1_sheets: transactionHistory.a1_sheets,
      a2_sheets: transactionHistory.a2_sheets,
      a3_sheets: transactionHistory.a3_sheets,
      a4_sheets: transactionHistory.a4_sheets,
      status: transactionHistory.status,
    };
  });
};

const TransactionUserHistoryView = () => {
  const [historyTime, setHistoryTime] = useState<HISTORY_TIME>(
    HISTORY_TIME.A_WEEK_AGO
  );
  const [textFilter, setTextFilter] = useState<string>("");
  const [transactionsHistory, setTransactionsHistory] = useState<
    TransactionHistory[]
  >([]);

  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    fetchUserInfo();
    handleGetNewTransactionsHistory();
  }, []);

  const fetchUserInfo = async () => {
    const newUserInfo = await networkService.getUserInfo();
    setUserInfo(newUserInfo);
  };

  const handleGetNewTransactionsHistory = async () => {
    const newTransactionsHistory =
      await networkService.getTransactionsHistory();
    setTransactionsHistory(newTransactionsHistory);
  };

  const getFilteredTimeList = (list: TransactionHistory[]) => {
    return list.flatMap((row: TransactionHistory) => {
      if (historyTime === HISTORY_TIME.ALL) {
        return [row];
      }

      const timestamp = new Date(row.date);
      const currentDate = new Date();

      if (historyTime === HISTORY_TIME.A_WEEK_AGO) {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(currentDate.getDate() - 7);
        if (timestamp >= sevenDaysFromNow) {
          return [row];
        }
      }
      if (historyTime === HISTORY_TIME.TWO_WEEKS_AGO) {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(currentDate.getDate() - 14);
        if (timestamp >= sevenDaysFromNow) {
          return [row];
        }
      }
      if (historyTime === HISTORY_TIME.A_MONTH_AGO) {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(currentDate.getDate() - 31);
        if (timestamp >= sevenDaysFromNow) {
          return [row];
        }
      }
      if (historyTime === HISTORY_TIME.THREE_MONTHS_AGO) {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(currentDate.getDate() - 93);
        if (timestamp >= sevenDaysFromNow) {
          return [row];
        }
      }

      if (historyTime === HISTORY_TIME.SIX_MONTHS_AGO) {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(currentDate.getDate() - 186);
        if (timestamp >= sevenDaysFromNow) {
          return [row];
        }
      }

      return [];
    });
  };

  const getFilteredList = (list: TransactionHistory[]) => {
    const text = textFilter.toLowerCase();
    if (!text) {
      return list;
    }
    return list.flatMap((obj: TransactionHistory) => {
      const textObj = `${obj.date} ${obj.transaction_id} ${obj.user} ${obj.total_cost} ${obj.a0_sheets} ${obj.a1_sheets} ${obj.a2_sheets} ${obj.a3_sheets} ${obj.a4_sheets} ${obj.status}`;
      return textObj.toLowerCase().includes(text.toLowerCase()) ? [obj] : [];
    });
  };

  const getUserTransactionHistory = (list: TransactionHistory[]) => {
    if (!userInfo) {
      return list;
    }

    return list.flatMap((obj: TransactionHistory) => {
      return obj.user.id === userInfo.base_user.id ? [obj] : [];
    });
  };

  const rows = convertToRows(
    getFilteredList(
      getFilteredTimeList(getUserTransactionHistory(transactionsHistory))
    )
  );

  if (!userInfo) {
    return <div className="w-full h-full">Có lỗi xảy ra</div>;
  }

  return (
    <div className="w-full h-full flex flex-col gap-5 p-5 overflow-x-auto">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <span className="font-bold text-2xl">
            Xin chào {getName(userInfo)}!
          </span>
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
                onClick={async () => {
                  await networkService.exportTransactionData();
                }}
                variant={"classic"}
              >
                <div className="flex items-center gap-2">Xuất file Excel</div>
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="border rounded overflow-x-auto">
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

export default TransactionUserHistoryView;
