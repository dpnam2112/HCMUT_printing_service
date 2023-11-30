import { Button, Table, TextField, Tooltip, TextArea } from "@radix-ui/themes";
import MenuFacility from "../../menus/menu-facility";
import { useState } from "react";
import {
  MENU_BUILDING_CS1,
  MENU_BUILDING_CS2,
  MENU_FACILITY,
  MENU_ROOM,
} from "../printing-history-view/models/constant";
import MenuBuildingCS1 from "../../menus/menu-building-cs1";
import MenuBuildingCS2 from "../../menus/menu-building-cs2";
import MenuRoom from "../../menus/menu-room";

const PrinterAddingView = () => {
  const [selectedFacility, setSelectedFacility] = useState<MENU_FACILITY>(
    MENU_FACILITY.LY_THUONG_KIET
  );
  const [selectedBuildingCS1, setSelectedBuildingCS1] =
    useState<MENU_BUILDING_CS1>(MENU_BUILDING_CS1.A1);
  const [selectedBuildingCS2, setSelectedBuildingCS2] =
    useState<MENU_BUILDING_CS2>(MENU_BUILDING_CS2.H2);
  const [selectedRoom, setSelectedRoom] = useState<MENU_ROOM>(MENU_ROOM.R_101);
  const [printerName, setPrinterName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAddPrinter = () => {
    setPrinterName("");
    setDescription("");
  };

  return (
    <div className="w-full h-full flex flex-col gap-5 p-5 overflow-x-auto">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <span className="font-bold text-2xl">Xin chào SPSO!</span>
          <span className="font-semibold text-base text-[#71717A]">
            Đây là giao diện thêm máy in.
          </span>
        </div>
      </div>

      <div className="flex flex-col w-full h-full gap-5">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Tên máy in</span>
          <TextField.Input
            placeholder="Tên máy in"
            value={printerName}
            onChange={(e) => {
              setPrinterName(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Đặt tại cơ sở</span>
          <MenuFacility
            width="w-[900px]"
            selectedFacility={selectedFacility}
            setSelectedFacility={setSelectedFacility}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <span className="text-sm font-semibold">Đặt tại toà</span>
          {selectedFacility === MENU_FACILITY.LY_THUONG_KIET ? (
            <MenuBuildingCS1
              width="w-[900px]"
              selectedItem={selectedBuildingCS1}
              setSelectedItem={setSelectedBuildingCS1}
            />
          ) : (
            <MenuBuildingCS2
              width="w-[900px]"
              selectedItem={selectedBuildingCS2}
              setSelectedItem={setSelectedBuildingCS2}
            />
          )}
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Đặt tại phòng</span>
          <MenuRoom
            width="w-[900px]"
            selectedItem={selectedRoom}
            setSelectedItem={setSelectedRoom}
          />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Mô tả máy in</span>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Thêm mô tả cho máy in..."
            className="border-[#CDCED6] rounded"
          />
        </div>

        <div className="flex items-center justify-end">
          <Button variant="classic" size={"3"} onClick={handleAddPrinter}>
            Thêm máy in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrinterAddingView;
