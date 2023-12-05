import { Button, Dialog, Flex, Select, TextField } from "@radix-ui/themes";
import { FC, useEffect, useState } from "react";
import { Location, Printer } from "../../../models/types";
import toast from "react-hot-toast";
import networkService from "../../../models/network-service";
import InputTextField from "../../input-text-field";
import { sortLocations } from "../../../models/utils";

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

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<
    Location | undefined
  >(undefined);
  const [defaultLocation, setDefaultLocation] = useState<string>("");

  useEffect(() => {
    const fetchLocations = async () => {
      const newLocations = await networkService.getLocations();
      const locationsCS1: Location[] = sortLocations(
        newLocations.flatMap((location) =>
          location.campus === "CS1" ? [location] : []
        )
      );
      const locationsCS2: Location[] = sortLocations(
        newLocations.flatMap((location) =>
          location.campus === "CS2" ? [location] : []
        )
      );

      const sortedLocations = [...locationsCS1, ...locationsCS2];
      setLocations(sortedLocations);

      if (sortedLocations.length > 0) {
        const index = sortedLocations.findIndex(
          (l) =>
            l.campus === printer.location.campus &&
            l.building_name === printer.location.building_name &&
            l.floor === printer.location.floor &&
            l.room_code === printer.location.room_code
        );

        console.log(index, sortedLocations);

        if (index >= 0 && index < sortedLocations.length) {
          setSelectedLocation(sortedLocations[index]);
          setDefaultLocation(`${index}_location`);
        }
      }
    };

    fetchLocations();
  }, []);

  const handleClick = async () => {
    if (!name) {
      setErrorMessage("Vui lòng điền tên máy in!");
      return;
    }
    if (!manufacturer) {
      setErrorMessage("Vui lòng điền hãng sản xuất!");
      return;
    }
    if (!description) {
      setErrorMessage("Vui lòng điền mô tả!");
      return;
    }
    if (!selectedLocation) {
      setErrorMessage("Vui lòng chọn vị trí đặt máy in!");
      return;
    }

    setErrorMessage(undefined);

    const newPrinter: Printer = {
      id: printer.id,
      name: name,
      manufacturer: manufacturer,
      description: description,
      location: selectedLocation,
    };

    const isSuccess = await networkService.updatePrinter(newPrinter);

    if (isSuccess) {
      handleClose();
      toast.success("Cập nhật máy in thành công!");
    } else {
      setErrorMessage("Vị trí đặt máy in không tồn tại!");
    }
  };

  const handleChange = (newValue) => {
    const index = parseInt(newValue.split("_")[0]);
    if (index >= 0 && index < locations.length) {
      setSelectedLocation(locations[index]);
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
        <Select.Root
          defaultValue={defaultLocation}
          onValueChange={handleChange}
        >
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              {locations.map((location, index) => {
                const isSeparator =
                  index - 1 >= 0 &&
                  locations[index - 1].campus !== location.campus;
                return (
                  <>
                    {isSeparator && <Select.Separator />}
                    <Select.Item
                      key={`${index}_location`}
                      value={`${index}_location`}
                    >{`${location.campus}, Toà ${location.building_name}, phòng ${location.room_code} lầu ${location.floor}`}</Select.Item>
                  </>
                );
              })}
            </Select.Group>
          </Select.Content>
        </Select.Root>
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

export default DialogEditingPrinter;
