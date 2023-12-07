"use client";

import { useEffect, useState } from "react";
import {
  MENU_NUMBER_OF_COPY,
  MENU_PRINT_PAGE,
  MENU_PRINT_TYPE,
} from "../../models/constant";
import MenuPaperSize from "../menus/menu-paper-size";
import MenuPrintType from "../menus/menu-print-type";
import MenuPrintPage from "../menus/menu-print-page";
import MenuCopyNumber from "../menus/menu-copy-number";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { Location, UserInfo } from "../../models/types";
import networkService from "../../models/network-service";
import { sortLocations } from "../../models/utils";
import MenuLocation from "../menus/menu-location";
import toast from "react-hot-toast";
import { getPayLoadPrinting } from "./utils";

const SectionPrinting = () => {
  const [selectedPaperSize, setSelectedPaperSize] = useState<"A3" | "A4">("A4");
  const [selectedPrintType, setSelectedPrintType] = useState<MENU_PRINT_TYPE>(
    MENU_PRINT_TYPE.DOUBLE_LONG
  );
  const [selectedPrintPage, setSelectedPrintPage] = useState<MENU_PRINT_PAGE>(
    MENU_PRINT_PAGE.ALL
  );
  const [selectedCopyNumber, setSelectedCopyNumber] =
    useState<MENU_NUMBER_OF_COPY>(MENU_NUMBER_OF_COPY.ONE);
  const [selectedLocation, setSelectedLocation] = useState<
    Location | undefined
  >(undefined);

  const [selectedFilePath, setSelectedFilePath] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const [printingPage, setPrintingPage] = useState<string>("");
  const [printingCopyNumber, setPrintingCopyNumber] = useState<number>(10);

  const [locations, setLocations] = useState<Location[]>([]);

  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    fetchLocations();
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const newUserInfo = await networkService.getUserInfo();
    setUserInfo(newUserInfo);
  };

  const fetchLocations = async () => {
    const newLocations = await networkService.getLocations();
    const locationsCS1: Location[] = newLocations.flatMap((location) =>
      location.campus.toLowerCase().includes("cs1") ? [location] : []
    );
    const locationsCS2: Location[] = newLocations.flatMap((location) =>
      location.campus.toLowerCase().includes("cs2") ? [location] : []
    );
    const sortedLocations = [
      ...sortLocations(locationsCS1),
      ...sortLocations(locationsCS2),
    ];

    setLocations(sortedLocations);

    if (sortedLocations.length > 0) {
      setSelectedLocation(sortedLocations[0]);
    }
  };

  const handleOnClickDone = async () => {
    if (!userInfo) {
      toast.error("Vui lòng đăng nhập để tiến hành in tài liệu!");
      return;
    }

    if (!selectedFile) {
      toast.error("Vui lòng chọn tài liệu!");
      return;
    }

    if (!selectedLocation) {
      toast.error("Vui lòng chọn vị trí máy in!");
      return;
    }

    if (selectedPrintPage === MENU_PRINT_PAGE.CUSTOM && !printingPage) {
      toast.error("Vui lòng nhập trang cần in!");
      return;
    }

    const payLoad = await getPayLoadPrinting(
      selectedFile,
      selectedPaperSize,
      selectedPrintPage,
      printingPage,
      selectedCopyNumber,
      printingCopyNumber,
      selectedPrintType,
      selectedLocation
    );

    if (!payLoad) {
      toast.error("Có lỗi xảy ra khi in!");
      return;
    }

    const data = networkService.fetchPrinting(payLoad);
    if (!data) {
      toast.error("Có lỗi xảy ra khi in!");
    } else {
      toast.success(`${data}`);
    }
  };

  function handleFileSelect(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      setSelectedFilePath(fileInput.value);
      setSelectedFile(file);
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
            <span className="w-2/5 text-lg font-semibold select-none">
              Vị trí máy in:
            </span>
            <MenuLocation
              locations={locations}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>

          <div className="flex items-center w-full px-5 ">
            <span className="w-2/5 text-lg font-semibold select-none">
              Kích thước giấy:
            </span>
            <MenuPaperSize
              selectedPaperSize={selectedPaperSize}
              setSelectedPaperSize={setSelectedPaperSize}
            />
          </div>

          <div className="flex items-center w-full px-5 ">
            <span className="w-2/5 text-lg font-semibold select-none">
              Kiểu in:
            </span>
            <MenuPrintType
              selectedItem={selectedPrintType}
              setSelectedItem={setSelectedPrintType}
            />
          </div>

          <div className="flex items-center w-full px-5 ">
            <span className="w-2/5 text-lg font-semibold select-none">
              Số lượng bản sao:
            </span>
            <MenuCopyNumber
              selectedItem={selectedCopyNumber}
              setSelectedItem={setSelectedCopyNumber}
            />
          </div>
          {selectedCopyNumber === MENU_NUMBER_OF_COPY.CUSTOM && (
            <div className="flex items-center w-full px-5 fade-in">
              <span className="w-2/5 text-lg font-semibold select-none"></span>
              <input
                className="w-3/5 h-full border rounded px-2 "
                type="number"
                value={printingCopyNumber}
                onChange={(e) => {
                  const newNum = Number(e.target.value);
                  if (newNum < 1) {
                    return;
                  }

                  setPrintingCopyNumber(newNum);
                }}
              />
            </div>
          )}

          <div className="flex items-center w-full px-5 ">
            <span className="w-2/5 text-lg font-semibold select-none">
              Chọn trang in:
            </span>
            <MenuPrintPage
              selectedItem={selectedPrintPage}
              setSelectedItem={setSelectedPrintPage}
            />
          </div>
          {selectedPrintPage === MENU_PRINT_PAGE.CUSTOM && (
            <div className="flex items-center w-full px-5 h-10 fade-in">
              <span className="w-2/5 text-lg font-semibold select-none"></span>
              <input
                className="w-3/5 h-full border rounded px-2"
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
          <Button className="w-[120px]" onClick={handleOnClickDone}>
            Hoàn thành
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionPrinting;
