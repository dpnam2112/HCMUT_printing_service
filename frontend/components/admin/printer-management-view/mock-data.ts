import { PrinterViewObject } from "../../../models/types";

const mockPrinterData: PrinterViewObject[] = [
  {
    id: "1",
    name: "Máy in C5 Lầu 1",
    facility: "Lý Thường Kiệt",
    building: "Toà C5",
    room: "Phòng 101",
    description: "This is a printer",
    isRunning: false,
  },
  {
    id: "2",
    name: "Máy in H1",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 101",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "3",
    name: "Máy in A1",
    facility: "Lý Thường Kiệt",
    building: "Toà A1",
    room: "Phòng 104",
    description: "This is a printer",
    isRunning: true,
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
  {
    id: "10",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },

  {
    id: "11",
    name: "Máy in H1 Lầu 1",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "12",
    name: "Máy in H2 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H2",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "13",
    name: "Máy in H6 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H6",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "14",
    name: "Máy in A1 Lầu 4",
    facility: "Lý Thường Kiệt",
    building: "Toà A1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "15",
    name: "Máy in C5 Lầu 4",
    facility: "Lý Thường Kiệt",
    building: "Toà C5",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "16",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "17",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "18",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "19",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "20",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "21",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "22",
    name: "Máy in H1 H1",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "23",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "24",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "25",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "26",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "27",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
  {
    id: "28",
    name: "Máy in H1 Lầu 4",
    facility: "Dĩ An",
    building: "Toà H1",
    room: "Phòng 401",
    description: "This is a printer",
    isRunning: true,
  },
];

export { mockPrinterData };
