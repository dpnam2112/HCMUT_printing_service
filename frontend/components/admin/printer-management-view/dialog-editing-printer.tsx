import { Button, Dialog, Flex, TextField } from "@radix-ui/themes";
import { FC, useState } from "react";
import { Printer } from "../../../models/types";
import toast from "react-hot-toast";
import networkService from "../../../models/network-service";

type DialogEditingPrinterProps = {
  printer: Printer;
  handleClose: () => void;
};

const DialogEditingPrinter: FC<DialogEditingPrinterProps> = ({
  printer,
  handleClose,
}) => {
  const [name, setName] = useState<string>(printer.name);
  const [manufacturer, setManufacturer] = useState<string>(
    printer.manufacturer
  );
  const [description, setDescription] = useState<string>(printer.description);
  const [campus, setCampus] = useState<string>(printer.location.campus);
  const [buildingName, setBuildingName] = useState<string>(
    printer.location.building_name
  );
  const [floor, setFloor] = useState<number>(printer.location.floor);
  const [roomCode, setRoomCode] = useState<string>(printer.location.room_code);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = async () => {
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

    const newPrinter: Printer = {
      id: printer.id,
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

    const isSuccess = await networkService.updatePrinter(newPrinter);

    if (isSuccess) {
      handleClose();
      toast.success("Cập nhật máy in thành công!");
    } else {
      setErrorMessage("Vị trí đặt máy in không tồn tại!");
    }
  };

  return (
    <Dialog.Content style={{ maxWidth: 500 }}>
      <Dialog.Title>Chỉnh sửa {printer.name}</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        Nhấn vào nút "Lưu" để cập nhật thông tin lên server.
      </Dialog.Description>

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

      <Flex gap="3" mt={errorMessage ? "1" : "4"} justify="end">
        <Button variant="soft" color="gray" onClick={handleClose}>
          Huỷ bỏ
        </Button>
        <Button onClick={handleClick}>Lưu</Button>
      </Flex>
    </Dialog.Content>
  );
};

type InputTextFieldProps = {
  title: string;
  value: string;
  setValue: (value: string) => void;
};

const InputTextField = ({ title, value, setValue }: InputTextFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-sm ml-[2px]">{title}</span>
      <TextField.Root className="w-full" variant="surface" size={"2"}>
        <TextField.Input
          placeholder={title}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </TextField.Root>
    </div>
  );
};

type InputNumberFieldProps = {
  title: string;
  value: number;
  setValue: (value: number) => void;
};

const InputNumberField = ({
  title,
  value,
  setValue,
}: InputNumberFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-sm ml-[2px]">{title}</span>
      <TextField.Root className="w-full" variant="surface" size={"2"}>
        <TextField.Input
          placeholder={title}
          value={value}
          type="number"
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
        />
      </TextField.Root>
    </div>
  );
};

export default DialogEditingPrinter;
