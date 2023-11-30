import {HistoryDataObject} from "./models/types"

const mData: HistoryDataObject[] = [
  {
    id: "1",
    username: "Tuan",
    time: new Date("2023-01-01"),
    location:{
      facility: "Lý Thường Kiệt",
      building: "Toà C6",
      room: "Phòng 101",
    } ,
    file_name: "PDF.pdf",
    pages: 21,
    size: 3,
    copys:2,
    type: "Chỉ in các trang lẻ",
  },
  {
    id: "2",
    username: "An",
    time: new Date("2023-02-01"),
    location:{
      facility: "Dĩ An",
      building: "Toà H1",
      room: "Phòng 101",
    } ,
    file_name: "A.pdf",
    pages: 9,
    size: 4,
    copys:4,
    type: "Chỉ in các trang lẻ",
  },
  {
    id: "3",
    username: "Tuan",
    time: new Date("2023-01-03"),
    location:{
      facility: "Lý Thường Kiệt",
      building: "Toà C5",
      room: "Phòng 101",
    } ,
    file_name: "C.pdf",
    pages: 3,
    size: 4,
    copys:6,
    type: "Tất cả",
  },
  {
    id: "4",
    username: "Bao",
    time: new Date("2023-01-03"),
    location:{
      facility: "Dĩ An",
      building: "Toà H6",
      room: "Phòng 101",
    } ,
    file_name: "PDF.pdf",
    pages: 12,
    size: 4,
    copys:10,
    type: "Chỉ in các trang lẻ",
  },
  {
    id: "5",
    username: "Zack",
    time: new Date("2023-02-02"),
    location:{
      facility: "Lý Thường Kiệt",
      building: "Toà C2",
      room: "Phòng 101",
    } ,
    file_name: "Y.pdf",
    pages: 11,
    size: 3,
    copys:2,
    type: "Tất cả",
  },
  {
    id: "6",
    username: "Tuan",
    time: new Date("2023-01-01"),
    location:{
      facility: "Lý Thường Kiệt",
      building: "Toà B1",
      room: "Phòng 101",
    } ,
    file_name: "Y.pdf",
    pages: 3,
    size: 4,
    copys:1,
    type: "Chỉ in các trang lẻ",
  },
  {
    id: "7",
    username: "Tuan",
    time: new Date("2023-11-18"),
    location:{
      facility: "Dĩ An",
      building: "Toà H1",
      room: "Phòng 101",
    } ,
    file_name: "PDF.pdf",
    pages: 11,
    size: 4,
    copys:3,
    type: "Tất cả",
  },
  {
    id: "8",
    username: "Tuan",
    time: new Date("2023-11-5"),
    location:{
      facility: "Lý Thường Kiệt",
      building: "Toà B1",
      room: "Phòng 101",
    } ,
    file_name: "PDF.pdf",
    pages: 1,
    size: 4,
    copys:1,
    type: "Chỉ in các trang lẻ"
  },
  {
    id: "9",
    username: "Tuan",
    time: new Date("2023-02-02"),
    location:{
      facility: "Dĩ An",
      building: "Toà H2",
      room: "Phòng 101",
    } ,
    file_name: "PDF.pdf",
    pages: 2,
    size: 4,
    copys:10,
    type: "Chỉ in các trang chẵn",
  },
  {
    id: "10",
    username: "Tuan",
    time: new Date("2023-01-01"),
    location:{
      facility: "Dĩ An",
      building: "Toà H3",
      room: "Phòng 101"
    } ,
    file_name: "PDF.pdf",
    pages: 6,
    size: 3,
    copys:3,
    type: "Tất cả",
  },

  {
    id: "11",
    username: "Tuan",
    time: new Date("2023-01-02"),
    location:{
      facility: "Lý Thường Kiệt",
      building: "Toà B2",
      room: "Phòng 101"
    } ,
    file_name: "PDF.pdf",
    pages: 20,
    size: 4,
    copys:4,
    type: "Chỉ in các trang chẵn",
  },
  {
    id: "12",
    username: "Tuan",
    time: new Date("2023-11-20"),
    location:{
      facility: "Dĩ An",
      building: "Toà H6",
      room: "Phòng 101"
    } ,
    file_name: "PDF.pdf",
    pages: 10,
    size: 3,
    copys:10,
    type: "Tất cả",
  },
  {
    id: "13",
    username: "Tuan",
    time: new Date("2023-10-01"),
    location:{
      facility: "Lý Thường Kiệt",
      building: "Toà C5",
      room: "Phòng 101"
    } ,
    file_name: "PDF.pdf",
    pages: 1,
    size: 4,
    copys:10,
    type: "Chỉ in các trang chẵn",
  },
];

export { mData };
