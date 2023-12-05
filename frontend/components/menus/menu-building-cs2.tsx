import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC, useEffect, useState } from "react";
import { Printer } from "../../models/types";

type Props = {
  width?: string;
  printers: Printer[];
  selectedBuilding: string;
  setSelectedBuilding: React.Dispatch<React.SetStateAction<string>>;
};

const MenuBuildingCS2: FC<Props> = ({
  width,
  printers,
  selectedBuilding,
  setSelectedBuilding,
}) => {
  const [buildings, setBuildings] = useState<string[]>([]);

  useEffect(() => {
    const newBuildings = printers
      .filter((printer) => printer.location.campus === "CS2")
      .map((printer) => printer.location.building_name)
      .reduce((arr, value) => {
        return arr.includes(value) ? arr : [...arr, value];
      }, []);
    setBuildings(newBuildings);

    if (newBuildings.length > 0) {
      setSelectedBuilding(newBuildings[0]);
    }
  }, [printers]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-full">
        <Button className={`${width ? "w-full" : "w-2/4"} px-0`}>
          <div className="flex items-center justify-between focus-within:outline-none w-full">
            <span>{selectedBuilding}</span>
            <CaretSortIcon width="22" height="22" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenuContent className={width ? width : "w-[320px]"}>
        {buildings.map((building, index) => {
          return (
            <>
              <DropdownMenuItem
                key={`${building}_${index}`}
                onSelect={() => {
                  setSelectedBuilding(building);
                }}
              >
                {building}
              </DropdownMenuItem>
              {index !== buildings.length - 1 && <DropdownMenuSeparator />}
            </>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuBuildingCS2;
