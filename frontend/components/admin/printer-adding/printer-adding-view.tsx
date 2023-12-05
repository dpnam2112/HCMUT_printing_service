import { Button, Select } from "@radix-ui/themes";
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

  const [locationsCS1, setLocationsCS1] = useState<Location[]>([]);
  const [locationsCS2, setLocationsCS2] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<
    Location | undefined
  >(undefined);

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await networkService.getLocations();
      const locationsCS1: Location[] = locations.flatMap((location) =>
        location.campus === "CS1" ? [location] : []
      );
      const locationsCS2: Location[] = locations.flatMap((location) =>
        location.campus === "CS2" ? [location] : []
      );

      setLocationsCS1(sortLocations(locationsCS1));
      setLocationsCS2(sortLocations(locationsCS2));

      if (locations.length > 0) {
        setSelectedLocation(locations[0]);
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

          <Select.Root
            defaultValue={
              locationsCS1.length > 0 ? "0_locationCS1" : "0_locationCS2"
            }
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Group>
                {locationsCS1.map((location, index) => {
                  return (
                    <Select.Item
                      key={`${index}_locationCS1`}
                      value={`${index}_locationCS1`}
                      onSelect={() => {
                        setSelectedLocation(location);
                      }}
                    >{`${location.campus}, Toà ${location.building_name}, phòng ${location.room_code} lầu ${location.floor}`}</Select.Item>
                  );
                })}
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                {locationsCS2.map((location, index) => {
                  return (
                    <Select.Item
                      key={`${index}_locationCS2`}
                      value={`${index}_locationCS2`}
                      onSelect={() => {
                        setSelectedLocation(location);
                      }}
                    >{`${location.campus}, Toà ${location.building_name}, phòng ${location.room_code} lầu ${location.floor}`}</Select.Item>
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
