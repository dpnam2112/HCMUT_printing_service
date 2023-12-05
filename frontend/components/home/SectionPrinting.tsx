"use client";

import { useEffect, useState } from "react";
import {
  MENU_NUMBER_OF_COPY,
  MENU_PRINT_PAGE,
  MENU_PRINT_TYPE,
} from "../../models/constant";
import MenuBuildingCS1 from "../menus/menu-building-cs1";
import MenuBuildingCS2 from "../menus/menu-building-cs2";
import MenuPaperSize from "../menus/menu-paper-size";
import MenuPrintType from "../menus/menu-print-type";
import MenuPrintPage from "../menus/menu-print-page";
import MenuCopyNumber from "../menus/menu-copy-number";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { Printer } from "../../models/types";
import networkService from "../../models/network-service";
import MenuCampus from "../menus/menu-campus";
import MenuRoom from "../menus/menu-room";

const SectionPrinting = () => {
  const [selectedCampus, setSelectedCampus] = useState<string>("");
  const [selectedBuildingCS1, setSelectedBuildingCS1] = useState<string>("");
  const [selectedBuildingCS2, setSelectedBuildingCS2] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<number>(101);
  const [selectedPaperSize, setSelectedPaperSize] = useState<"A3" | "A4">("A4");
  const [selectedPrintType, setSelectedPrintType] = useState<MENU_PRINT_TYPE>(
    MENU_PRINT_TYPE.DOUBLE
  );
  const [selectedPrintPage, setSelectedPrintPage] = useState<MENU_PRINT_PAGE>(
    MENU_PRINT_PAGE.ALL
  );
  const [selectedCopyNumber, setSelectedCopyNumber] =
    useState<MENU_NUMBER_OF_COPY>(MENU_NUMBER_OF_COPY.NONE);
  const [selectedFilePath, setSelectedFilePath] = useState<string>("");

  const [printingPage, setPrintingPage] = useState<string>("");
  const [printingCopyNumber, setPrintingCopyNumber] = useState<number>(10);

  const [printers, setPrinters] = useState<Printer[]>([]);

  useEffect(() => {
    handleUpdateNewPrinters();
  }, []);

  const handleUpdateNewPrinters = async () => {
    const newPrinters = await networkService.getPrinters();
    setPrinters(newPrinters);
  };

  function handleFileSelect(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      setSelectedFilePath(fileInput.value);

      reader.onload = function (e) {
        // The content of the file will be available in e.target.result
        const fileContent = e.target.result;
        console.log(fileContent);

        // You can do further processing with the file content here
      };

      reader.readAsText(file);
    }
  }

  return (
    <div className="flex items-center gap-5 mt-12 mb-4 mx-40 h-[650px] p-10 rounded border">
      <div className="flex flex-col justify-center items-center w-3/5 h-full rounded border">
        <label className="relative cursor-pointer bg-blue-600 text-white rounded p-2">
          <span>Chọn tài liệu</span>
          <input
            id="inputSelectLocalFile"
            type="file"
            className="sr-only"
            onChange={handleFileSelect}
          />
        </label>
        {selectedFilePath && (
          <div className="mt-2 text-black font-semibold">
            Tài liệu: {selectedFilePath}
          </div>
        )}
      </div>
      <div className="flex flex-col w-3/6 h-full justify-between rounded border py-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center w-full px-5">
            <span className="w-2/4 text-lg font-semibold select-none">
              Máy in tại cơ sở:
            </span>
            <MenuCampus
              printers={printers}
              selectedCampus={selectedCampus}
              setSelectedCampus={setSelectedCampus}
            />
          </div>

          <div className="flex items-center w-full px-5">
            <span className="w-2/4 text-lg font-semibold select-none">
              Máy in tại toà:
            </span>
            {selectedCampus === "CS1" ? (
              <MenuBuildingCS1
                printers={printers}
                selectedBuilding={selectedBuildingCS1}
                setSelectedBuilding={setSelectedBuildingCS1}
              />
            ) : (
              <MenuBuildingCS2
                printers={printers}
                selectedBuilding={selectedBuildingCS2}
                setSelectedBuilding={setSelectedBuildingCS2}
              />
            )}
          </div>

          <div className="flex items-center w-full px-5 ">
            <span className="w-2/4 text-lg font-semibold select-none">
              Máy in tại phòng:
            </span>
            <MenuRoom
              printers={printers}
              selectedCampus={selectedCampus}
              selectedBuilding={
                selectedCampus === "CS1"
                  ? selectedBuildingCS1
                  : selectedBuildingCS2
              }
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
            />
          </div>

          <div className="flex items-center w-full px-5 ">
            <span className="w-2/4 text-lg font-semibold select-none">
              Kích thước giấy:
            </span>
            <MenuPaperSize
              selectedPaperSize={selectedPaperSize}
              setSelectedPaperSize={setSelectedPaperSize}
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
                type="number"
                value={printingCopyNumber}
                onChange={(e) => {
                  setPrintingCopyNumber(Number(e.target.value));
                }}
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
                className="w-2/4 h-full border rounded px-2"
                placeholder="Ví dụ: 5-7"
                value={printingPage}
                onChange={(e) => {
                  setPrintingPage(e.target.value);
                }}
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between w-full px-5">
          <div className="flex items-center gap-4">
            <Link href={"/pricing"}>
              <Button className="w-[120px]">Mua giấy in</Button>
            </Link>
          </div>
          <Button className="w-[120px]">Hoàn thành</Button>
        </div>
      </div>
    </div>
  );
};

export default SectionPrinting;
