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
  R_201 = "Phòng 201",
  R_207 = "Phòng 207",
  R_101 = "Phòng 101",
  R_401 = "Phòng 401",
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

export {
  MENU_FACILITY,
  MENU_BUILDING_CS1,
  MENU_BUILDING_CS2,
  MENU_ROOM,
  MENU_PAPER_SIZE,
  MENU_PRINT_TYPE,
  MENU_NUMBER_OF_COPY,
  MENU_PRINT_PAGE,
};
