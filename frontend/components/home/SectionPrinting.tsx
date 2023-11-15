import MenuFacility from "../menus/menu-facility";
import { useState } from "react";
import {
  MENU_BUILDING_CS1,
  MENU_BUILDING_CS2,
  MENU_FACILITY,
} from "../../models/constant";

const SectionPrinting = () => {
  const [selectedFacility, setSelectedFacility] = useState<MENU_FACILITY>(
    MENU_FACILITY.LY_THUONG_KIET
  );
  const [selectedBuilding, setSelectedBuilding] = useState<
    MENU_BUILDING_CS1 | MENU_BUILDING_CS2
  >(MENU_BUILDING_CS1.A1);

  return (
    <div className="flex items-center gap-5 mt-12 mb-4 mx-40 h-[650px] p-10 rounded border">
      <div className="w-3/5 h-full rounded border"></div>
      <div className="flex flex-col gap-4 w-3/6 h-full rounded border">
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
          <MenuFacility
            selectedFacility={selectedFacility}
            setSelectedFacility={setSelectedFacility}
          />
        </div>

        <div className="flex items-center w-full px-5 ">
          <span className="w-2/4 text-lg font-semibold">Máy in tại phòng:</span>
          <MenuFacility
            selectedFacility={selectedFacility}
            setSelectedFacility={setSelectedFacility}
          />
        </div>

        <div className="flex items-center w-full px-5 ">
          <span className="w-2/4 text-lg font-semibold">Kích thước giấy:</span>
          <MenuFacility
            selectedFacility={selectedFacility}
            setSelectedFacility={setSelectedFacility}
          />
        </div>

        <div className="flex items-center w-full px-5 ">
          <span className="w-2/4 text-lg font-semibold">Kiểu in:</span>
          <MenuFacility
            selectedFacility={selectedFacility}
            setSelectedFacility={setSelectedFacility}
          />
        </div>

        <div className="flex items-center w-full px-5 ">
          <span className="w-2/4 text-lg font-semibold">Số lượng bản sao:</span>
          <MenuFacility
            selectedFacility={selectedFacility}
            setSelectedFacility={setSelectedFacility}
          />
        </div>

        <div className="flex items-center w-full px-5 ">
          <span className="w-2/4 text-lg font-semibold">Chọn trang in:</span>
          <MenuFacility
            selectedFacility={selectedFacility}
            setSelectedFacility={setSelectedFacility}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionPrinting;
