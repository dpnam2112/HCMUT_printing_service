import { PrinterViewObject } from "../../../models/types";

const mockPrinterData: PrinterViewObject[] = [
  {
    id: "1",
    name: "Máy in H1",
    facility: "Dĩ An",
    building: "H1",
    room: "101",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "2",
    name: "Máy in A1",
    facility: "Lý Thường Kiệt",
    building: "A1",
    room: "104",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "3",
    name: "Máy in C5 Lầu 1",
    facility: "Lý Thường Kiệt",
    building: "Toà C5",
    room: "Phòng 101",
    description: "This is a printer",
    isRunning: false,
  },
  {
    id: "4",
    name: "Máy in B2",
    facility: "Lý Thường Kiệt",
    building: "Toà B2",
    room: "Phòng 207",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "5",
    name: "Máy in C6",
    facility: "Lý Thường Kiệt",
    building: "Toà C6",
    room: "Phòng 207",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "6",
    name: "Máy in H2",
    facility: "Dĩ An",
    building: "Toà H2",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: false,
  },
  {
    id: "7",
    name: "Máy in H3",
    facility: "Dĩ An",
    building: "Toà H3",
    room: "Phòng 101",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "8",
    name: "Máy in H6",
    facility: "Dĩ An",
    building: "Toà H6",
    room: "Phòng 601",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "9",
    name: "Máy in H6 Lầu 1",
    facility: "Dĩ An",
    building: "Toà H6",
    room: "Phòng 502",
    description: "This is a printer",
    isRunning: true,
  },
];

export { mockPrinterData };
