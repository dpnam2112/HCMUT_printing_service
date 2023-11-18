"use client";

import MenuFacility from "../menus/menu-facility";
import { useState } from "react";
import {
  MENU_BUILDING_CS1,
  MENU_BUILDING_CS2,
  MENU_FACILITY,
  MENU_NUMBER_OF_COPY,
  MENU_PAPER_SIZE,
  MENU_PRINT_PAGE,
  MENU_PRINT_TYPE,
  MENU_ROOM,
} from "../../models/constant";
import MenuBuildingCS1 from "../menus/menu-building-cs1";
import MenuBuildingCS2 from "../menus/menu-building-cs2";
import MenuRoom from "../menus/menu-room";
import MenuPaperSize from "../menus/menu-paper-size";
import MenuPrintType from "../menus/menu-print-type";
import MenuPrintPage from "../menus/menu-print-page";
import MenuCopyNumber from "../menus/menu-copy-number";
import { Button } from "@radix-ui/themes";
import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

const SectionPrinting = () => {
  const [selectedFacility, setSelectedFacility] = useState<MENU_FACILITY>(
    MENU_FACILITY.LY_THUONG_KIET
  );
  const [selectedBuildingCS1, setSelectedBuildingCS1] =
    useState<MENU_BUILDING_CS1>(MENU_BUILDING_CS1.A1);
  const [selectedBuildingCS2, setSelectedBuildingCS2] =
    useState<MENU_BUILDING_CS2>(MENU_BUILDING_CS2.H2);
  const [selectedRoom, setSelectedRoom] = useState<MENU_ROOM>(MENU_ROOM.R_101);
  const [selectedPaperSize, setSelectedPaperSize] = useState<MENU_PAPER_SIZE>(
    MENU_PAPER_SIZE.SIZE_A3
  );
  const [selectedPrintType, setSelectedPrintType] = useState<MENU_PRINT_TYPE>(
    MENU_PRINT_TYPE.DOUBLE
  );
  const [selectedPrintPage, setSelectedPrintPage] = useState<MENU_PRINT_PAGE>(
    MENU_PRINT_PAGE.ALL
  );
  const [selectedCopyNumber, setSelectedCopyNumber] =
    useState<MENU_NUMBER_OF_COPY>(MENU_NUMBER_OF_COPY.NONE);
  const [selectedFile, setSeleectedFile] = useState<any>(undefined);

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleSelectFile = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSeleectedFile(file);
      // const reader = new FileReader();

      // reader.onload = (event) => {
      //   // The result attribute contains the data as a data URL
      //   const fileData = event.target.result;
      // };

      // // Read the file as text or other formats based on your requirements
      // reader.readAsText(file);
    }
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="flex items-center gap-5 mt-12 mb-4 mx-40 h-[650px] p-10 rounded border">
      <div className="flex flex-col justify-center items-center w-3/5 h-full rounded border">
        <label className="w-1/3 py-1 px-5 bg-[#3E62DD] hover:bg-[#3E62DD]/90 rounded cursor-pointer text-center text-white font-medium">
          <span className="cursor-pointer">Chọn file bạn cần in</span>
          <input
            id="inputSelectLocalFile"
            onChange={handleSelectFile}
            type="file"
            className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
          />

          {selectedFile !== undefined && (
            <Document file={selectedFile} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
          )}
        </label>
      </div>
      <div className="flex flex-col w-3/6 h-full justify-between rounded border py-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center w-full px-5">
            <span className="w-2/4 text-lg font-semibold select-none">
              Máy in tại cơ sở:
            </span>
            <MenuFacility
              selectedFacility={selectedFacility}
              setSelectedFacility={setSelectedFacility}
            />
          </div>

          <div className="flex items-center w-full px-5">
            <span className="w-2/4 text-lg font-semibold select-none">
              Máy in tại toà:
            </span>
            {selectedFacility === MENU_FACILITY.LY_THUONG_KIET ? (
              <MenuBuildingCS1
                selectedItem={selectedBuildingCS1}
                setSelectedItem={setSelectedBuildingCS1}
              />
            ) : (
              <MenuBuildingCS2
                selectedItem={selectedBuildingCS2}
                setSelectedItem={setSelectedBuildingCS2}
              />
            )}
          </div>

          <div className="flex items-center w-full px-5 ">
            <span className="w-2/4 text-lg font-semibold select-none">
              Máy in tại phòng:
            </span>
            <MenuRoom
              selectedItem={selectedRoom}
              setSelectedItem={setSelectedRoom}
            />
          </div>

          <div className="flex items-center w-full px-5 ">
            <span className="w-2/4 text-lg font-semibold select-none">
              Kích thước giấy:
            </span>
            <MenuPaperSize
              selectedItem={selectedPaperSize}
              setSelectedItem={setSelectedPaperSize}
            />
          </div>

          <div className="flex items-center w-full px-5 ">
            <span className="w-2/4 text-lg font-semibold select-none">
              Kiểu in:
            </span>
            <MenuPrintType
              selectedItem={selectedPrintType}
              setSelectedItem={setSelectedPrintType}
            />
          </div>

          <div className="flex items-center w-full px-5 ">
            <span className="w-2/4 text-lg font-semibold select-none">
              Số lượng bản sao:
            </span>
            <MenuCopyNumber
              selectedItem={selectedCopyNumber}
              setSelectedItem={setSelectedCopyNumber}
            />
          </div>
          {selectedCopyNumber === MENU_NUMBER_OF_COPY.CUSTOM && (
            <div className="flex items-center w-full px-5 fade-in">
              <span className="w-2/4 text-lg font-semibold select-none">
                Nhập số lượng bản sao:
              </span>
              <input
                className="w-2/4 h-full border rounded px-2 "
                placeholder="Ví dụ: 10"
              />
            </div>
          )}

          <div className="flex items-center w-full px-5 ">
            <span className="w-2/4 text-lg font-semibold select-none">
              Chọn trang in:
            </span>
            <MenuPrintPage
              selectedItem={selectedPrintPage}
              setSelectedItem={setSelectedPrintPage}
            />
          </div>
          {selectedPrintPage === MENU_PRINT_PAGE.CUSTOM && (
            <div className="flex items-center w-full px-5 fade-in">
              <span className="w-2/4 text-lg font-semibold select-none">
                Nhập trang bạn cần in:
              </span>
              <input
                className="w-2/4 h-full border rounded px-2 "
                placeholder="Ví dụ: 1, 2, 5, 7, 12"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between w-full px-5">
          <div className="flex items-center gap-4">
            <Button className="w-[120px]">Mua giấy in</Button>
            <span className="text-red-500 text-lg font-semibold">
              50/20 trang
            </span>
          </div>
          <Button className="w-[120px]">Hoàn thành</Button>
        </div>
      </div>
    </div>
  );
};

export default SectionPrinting;
