import {
  Button,
  Dialog,
  Flex,
  Switch,
  Text,
  TextField,
} from "@radix-ui/themes";
import { FC, useEffect, useState } from "react";
import { PrinterRenderViewProps } from "../../../models/types";
import {
  MENU_BUILDING_CS1,
  MENU_BUILDING_CS2,
  MENU_FACILITY,
  MENU_ROOM,
} from "../../../models/constant";
import MenuFacility from "../../menus/menu-facility";
import MenuBuildingCS1 from "../../menus/menu-building-cs1";
import MenuBuildingCS2 from "../../menus/menu-building-cs2";
import MenuRoom from "../../menus/menu-room";

type DialogEditingPrinterProps = {
  data: PrinterRenderViewProps;
  handleClickSave: (newData: PrinterRenderViewProps) => void;
};

const DialogEditingPrinter: FC<DialogEditingPrinterProps> = ({
  data,
  handleClickSave,
}) => {
  const [selectedFacility, setSelectedFacility] = useState<MENU_FACILITY>(
    MENU_FACILITY.LY_THUONG_KIET
  );
  const [selectedBuildingCS1, setSelectedBuildingCS1] =
    useState<MENU_BUILDING_CS1>(MENU_BUILDING_CS1.A1);
  const [selectedBuildingCS2, setSelectedBuildingCS2] =
    useState<MENU_BUILDING_CS2>(MENU_BUILDING_CS2.H2);
  const [selectedRoom, setSelectedRoom] = useState<MENU_ROOM>(MENU_ROOM.R_101);
  const [isRunning, setIsRunning] = useState<boolean>(data.isRunning);
  const [printerName, setPrinterName] = useState<string>(data.name);

  // Set up data
  useEffect(() => {
    if (data.facility === MENU_FACILITY.LY_THUONG_KIET) {
      setSelectedFacility(MENU_FACILITY.LY_THUONG_KIET);
    } else {
      setSelectedFacility(MENU_FACILITY.DI_AN);
    }

    const buildingCS1 = Object.values(MENU_BUILDING_CS1).find((ele) =>
      ele.includes(data.building)
    );
    const buildingCS2 = Object.values(MENU_BUILDING_CS2).find((ele) =>
      ele.includes(data.building)
    );
    const room = Object.values(MENU_ROOM).find((ele) =>
      ele.includes(data.room)
    );

    if (buildingCS1) {
      setSelectedBuildingCS1(buildingCS1);
    }
    if (buildingCS2) {
      setSelectedBuildingCS2(buildingCS2);
    }
    if (room) {
      setSelectedRoom(room);
    }
  }, []);

  return (
    <Dialog.Content style={{ maxWidth: 600 }}>
      <Dialog.Title>Chỉnh sửa {data.name}</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        Nhấn vào nút "Hoàn tất chỉnh sửa" để cập nhật thông tin lên server.
      </Dialog.Description>

      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Trạng thái
          </Text>
          <Flex gap="2">
            <Switch
              checked={isRunning}
              onChange={() => {}}
              onClick={() => {
                setIsRunning(!isRunning);
              }}
            />
            <Text
              as="div"
              size="2"
              mb="1"
              weight="bold"
              className={isRunning ? "text-green-500" : "text-red-500"}
            >
              {isRunning ? "Đang hoạt động" : "Không hoạt động"}
            </Text>
          </Flex>
        </label>

        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Tên máy in
          </Text>
          <TextField.Input
            onChange={(e) => {
              setPrinterName(e.target.value.trim());
            }}
            value={printerName}
            placeholder="Điền tên máy in"
          />
        </label>

        <label className="w-full">
          <Text as="div" size="2" mb="1" weight="bold">
            Cơ sở
          </Text>
          <MenuFacility
            width="w-[550px]"
            selectedFacility={selectedFacility}
            setSelectedFacility={setSelectedFacility}
          />
        </label>

        <label className="w-full">
          <Text as="div" size="2" mb="1" weight="bold">
            Toà
          </Text>
          {selectedFacility === MENU_FACILITY.LY_THUONG_KIET ? (
            <MenuBuildingCS1
              width="w-[550px]"
              selectedItem={selectedBuildingCS1}
              setSelectedItem={setSelectedBuildingCS1}
            />
          ) : (
            <MenuBuildingCS2
              width="w-[550px]"
              selectedItem={selectedBuildingCS2}
              setSelectedItem={setSelectedBuildingCS2}
            />
          )}
        </label>

        <label className="w-full">
          <Text as="div" size="2" mb="1" weight="bold">
            Phòng
          </Text>
          <MenuRoom
            width="w-[550px]"
            selectedItem={selectedRoom}
            setSelectedItem={setSelectedRoom}
          />
        </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Huỷ bỏ
          </Button>
        </Dialog.Close>
        <Dialog.Close disabled={!printerName}>
          <Button
            onClick={() => {
              handleClickSave({
                ...data,
                name: printerName,
                isRunning: isRunning,
                facility: selectedFacility,
                building:
                  selectedFacility === MENU_FACILITY.LY_THUONG_KIET
                    ? selectedBuildingCS1
                    : selectedBuildingCS2,
                room: selectedRoom,
              });
            }}
          >
            Lưu
          </Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  );
};

export default DialogEditingPrinter;
