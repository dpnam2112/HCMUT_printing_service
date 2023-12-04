import { Button, Table, TextField, Tooltip, TextArea } from "@radix-ui/themes";
import { useState } from "react";
import InputNumberField from "../../input-number-field";
import InputTextField from "../../input-text-field";
import { Printer } from "../../../models/types";
import networkService from "../../../models/network-service";
import toast from "react-hot-toast";

const PrinterAddingView = () => {
  const [name, setName] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [campus, setCampus] = useState<string>("");
  const [buildingName, setBuildingName] = useState<string>("");
  const [floor, setFloor] = useState<number>(1);
  const [roomCode, setRoomCode] = useState<string>("101");
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleAddPrinter = async () => {
    if (
      !name ||
      !manufacturer ||
      !description ||
      !campus ||
      !buildingName ||
      !floor ||
      !roomCode
    ) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    setErrorMessage(undefined);

    const newPrinter: Omit<Printer, "id"> = {
      name: name,
      manufacturer: manufacturer,
      description: description,
      location: {
        campus: campus,
        building_name: buildingName,
        floor: floor,
        room_code: roomCode,
      },
    };

    const isSuccess = await networkService.addPrinter(newPrinter);
    if (isSuccess) {
      setName("");
      setManufacturer("");
      setDescription("");
      setCampus("");
      setBuildingName("");
      setFloor(1);
      setRoomCode("101");
      setErrorMessage(undefined);
      toast.success("Thêm máy in thành công!");
      return;
    }

    setErrorMessage("Vị trí đặt máy in không tồn tại!");
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
        <div className="flex flex-col gap-4">
          <InputTextField title="Tên máy in" value={name} setValue={setName} />
          <InputTextField
            title="Hãng sản xuất"
            value={manufacturer}
            setValue={setManufacturer}
          />
          <InputTextField
            title="Đặt tại cơ sở"
            value={campus}
            setValue={setCampus}
          />
          <InputTextField
            title="Đặt tại toà"
            value={buildingName}
            setValue={setBuildingName}
          />
          <InputNumberField
            title="Đặt tại lầu"
            value={floor}
            setValue={setFloor}
          />
          <InputTextField
            title="Đặt tại phòng"
            value={roomCode}
            setValue={setRoomCode}
          />
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-sm ml-[2px]">Mô tả máy in</span>
            <textarea
              className="rounded h-[100px] p-1"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          {errorMessage && (
            <span className="text-sm font-semibold text-red-500 -mt-2">
              {errorMessage}
            </span>
          )}
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
