enum MENU_PAPER_SIZE {
  SIZE_A4 = "A4",
  SIZE_A3 = "A3",
}

enum MENU_PRINT_TYPE {
  DOUBLE_LONG = "In hai mặt cạnh dài",
  DOUBLE_SHORT = "In hai mặt cạnh ngắn",
  ONE = "In một mặt",
}

enum MENU_NUMBER_OF_COPY {
  ONE = "1 bản",
  TWO = "2 bản",
  FOUR = "4 bản",
  FIVE = "5 bản",
  CUSTOM = "Tùy chỉnh",
}

enum MENU_PRINT_PAGE {
  ALL = "Tất cả",
  CUSTOM = "Tùy chỉnh",
}

enum ADMIN_MANAGEMENT_VIEW {
  EXTENSION_MANAGEMENT = "Quản Lý Đuôi File",
  ADD_PRINTER = "Thêm Máy In",
  PRINTER_MANAGEMENT = "Quản Lý Máy In",
  PRINTING_HISTORY = "Lịch Sử In",
  TRANSACTION_HISTORY = "Lịch Sử Giao Dịch",
}

enum HISTORY_TIME {
  A_WEEK_AGO = "Lịch sử 1 tuần",
  TWO_WEEKS_AGO = "Lịch sử 2 tuần",
  A_MONTH_AGO = "Lịch sử 1 tháng",
  THREE_MONTHS_AGO = "Lịch sử 3 tháng",
  SIX_MONTHS_AGO = "Lịch sử 6 tháng",
  ALL = "Tất cả",
}

enum PROFILE_MANAGEMENT {
  PRINTING_HISTORY = "Lịch sử in",
  TRANSACTION_HISTORY = "Lịch sử giao dịch",
}

const BACKEND_API = "http://localhost:8000";

export {
  MENU_PAPER_SIZE,
  MENU_PRINT_TYPE,
  MENU_NUMBER_OF_COPY,
  MENU_PRINT_PAGE,
  ADMIN_MANAGEMENT_VIEW,
  HISTORY_TIME,
  PROFILE_MANAGEMENT,
  BACKEND_API,
};
