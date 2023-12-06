export type PrinterRenderViewProps = Printer & {
  isSelectedDelete?: boolean;
};

export type Extension = {
  name: string;
  ext: string;
  status: boolean;
};

export type Location = {
  campus: string;
  floor: number;
  room_code: string;
  building_name: string;
};

export type Printer = {
  id: string;
  location: Location;
  description: string;
  manufacturer: string;
  name: string;
};

export type PrintingHistory = {
  date: string;
  user: User;
  printer_name: string;
  file_name: string;
  file_ext: string;
  page_count: number;
  two_sided: boolean;
  sheet_type: string;
};

export type TransactionHistory = {
  user: User;
  transaction_id: string;
  a0_sheets: number;
  a1_sheets: number;
  a2_sheets: number;
  a3_sheets: number;
  a4_sheets: number;
  total_cost: string;
  status: string;
  date: string;
};

export type User = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  id: number;
};

export type UserInfo = {
  base_user: User;
  page_balance: number;
  is_admin: boolean;
};

export type PayLoadPrinting = {
  filename: any;
  pages_print: string;
  printer_name: string;
  page_size: string;
  num_copies: number;
  side: string;
  orient: string;
};
