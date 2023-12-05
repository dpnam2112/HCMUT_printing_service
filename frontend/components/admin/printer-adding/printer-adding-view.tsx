import { Button, Select, Separator } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import InputTextField from "../../input-text-field";
import { Location, Printer } from "../../../models/types";
import networkService from "../../../models/network-service";
import toast from "react-hot-toast";
import { sortLocations } from "../../../models/utils";

const PrinterAddingView = () => {
  const [name, setName] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const [selectedLocation, setSelectedLocation] = useState<
    Location | undefined
  >(undefined);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const newLocations = await networkService.getLocations();
      const locationsCS1: Location[] = newLocations.flatMap((location) =>
        location.campus === "CS1" ? [location] : []
      );
      const locationsCS2: Location[] = newLocations.flatMap((location) =>
        location.campus === "CS2" ? [location] : []
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

    fetchLocations();
  }, []);

  const handleAddPrinter = async () => {
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

    const newPrinter: Omit<Printer, "id"> = {
      name: name,
      manufacturer: manufacturer,
      description: description,
      location: selectedLocation,
    };

    const isSuccess = await networkService.addPrinter(newPrinter);
    if (isSuccess) {
      setName("");
      setManufacturer("");
      setDescription("");
      setErrorMessage(undefined);
      toast.success("Thêm máy in thành công!");
      return;
    }

    setErrorMessage("Vị trí đặt máy in không tồn tại!");
  };

  const handleChange = (newValue) => {
    const index = parseInt(newValue.split("_")[0]);
    if (index >= 0 && index < locations.length) {
      setSelectedLocation(locations[index]);
    }
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

          <Select.Root onValueChange={handleChange} defaultValue={"0_location"}>
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
                      >
                        {`${location.campus}, Toà ${location.building_name}, phòng ${location.room_code} lầu ${location.floor}`}
                      </Select.Item>
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
