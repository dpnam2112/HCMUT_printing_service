export type PrinterRenderViewProps = Printer & {
  isSelectedDelete?: boolean;
};

export type ExtensionViewObject = {
  name: string;
  extension: string;
  status: boolean;
};

export type Extension = {
  name: string;
  ext: string;
  status: boolean;
};

export type TransactionHistoryObject = {
  name: string;
  amount: number;
  madeAt: number;
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
