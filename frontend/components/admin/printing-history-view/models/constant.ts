enum MENU_FACILITY {
    LY_THUONG_KIET = "Lý Thường Kiệt",
    DI_AN = "Dĩ An",
  }
  
  enum MENU_BUILDING_CS2 {
    H1 = "Toà H1",
    H2 = "Toà H2",
    H3 = "Toà H3",
    H6 = "Toà H6",
  }
  
  enum MENU_BUILDING_CS1 {
    B1 = "Toà B1",
    B2 = "Toà B2",
    B5 = "Toà B5",
    C5 = "Toà C5",
    C6 = "Toà C6",
    A1 = "Toà A1",
  }
  
  enum MENU_ROOM {
    R_101 = "Phòng 101",
    R_201 = "Phòng 201",
    R_207 = "Phòng 207",
    R_304 = "Phòng 304",
    R_401 = "Phòng 401",
    R_502 = "Phòng 502",
    R_601 = "Phòng 601",
  }
  
  enum MENU_PAPER_SIZE {
    SIZE_A4 = "A4",
    SIZE_A3 = "A3",
  }
  
  enum MENU_PRINT_TYPE {
    DOUBLE = "In hai mặt",
    ONE = "In một mặt",
  }
  
  enum MENU_NUMBER_OF_COPY {
    NONE = "Không in bản sao",
    TWO = "2 bản",
    FOUR = "4 bản",
    FIVE = "5 bản",
    CUSTOM = "Tùy chỉnh",
  }
  
  enum MENU_PRINT_PAGE {
    ALL = "Tất cả",
    ONLY_OLD = "Chỉ in các trang lẻ",
    ONLY_EVEN = "Chỉ in các trang chẵn",
    CUSTOM = "Tùy chỉnh",
  }
  
  enum ADMIN_MANAGEMENT_VIEW {
    ADD_EXTENSION = "Thêm Đuôi File",
    ADD_PRINTER = "Thêm Máy In",
    PRINTER_MANAGEMENT = "Quản Lý Máy In",
    PRINTING_HISTORY = "Lịch Sử In",
    TRANSACTION_HISTORY = "Lịch Sử Giao Dịch",
  }
  
  enum SORT_CONFIG {
    USERNAME_ASC = "SORT_CONFIG_USERNAME_ASC",
    USERNAME_DESC = "SORT_CONFIG_USERNAME_DESC",
    LOCATION_ASC = "SORT_CONFIG_LOCATION_ASC",
    LOCATION_DESC = "SORT_CONFIG_LOCATION_DESC",
    TIME_ASC = "SORT_CONFIG_TIME_ASC",
    TIME_DESC = "SORT_CONFIG_TIME_DESC",
    FILENAME_ASC = "SORT_CONFIG_FILENAME_ASC",
    FILENAME_DESC = "SORT_CONFIG_FILENAME_DESC",
    PAGES_ASC = "SORT_CONFIG_PAGES_ASC",
    PAGES_DESC = "SORT_CONFIG_PAGES_DESC",
    COPYS_ASC = "SORT_CONFIG_COPYS_ASC",
    COPYS_DESC = "SORT_CONFIG_COPYS_DESC",
    SIZE_ASC = "SORT_CONFIG_SIZE_ASC",
    SIZE_DESC = "SORT_CONFIG_SIZE_DESC",
  }
  
  export {
    MENU_FACILITY,
    MENU_BUILDING_CS1,
    MENU_BUILDING_CS2,
    MENU_ROOM,
    MENU_PAPER_SIZE,
    MENU_PRINT_TYPE,
    MENU_NUMBER_OF_COPY,
    MENU_PRINT_PAGE,
    ADMIN_MANAGEMENT_VIEW,
    SORT_CONFIG,
  };
  