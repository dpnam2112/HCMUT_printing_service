export type PrinterViewObject = {
  id: string;
  name: string;
  facility: string;
  building: string;
  room: string;
  description?: string;
  isRunning: boolean;
};

export type PrinterRenderViewProps = PrinterViewObject & {
  isSelectedDelete?: boolean;
};
