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
  campus_id: string;
  file_name: string;
  page_count: number;
  sheet_type: string;
};

export type TransactionHistory = {
  user: number;
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
