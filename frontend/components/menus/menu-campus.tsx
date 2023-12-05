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

type MenuCampusProps = {
  width?: string;
  printers: Printer[];
  selectedCampus: string;
  setSelectedCampus: React.Dispatch<React.SetStateAction<string>>;
};

const MenuCampus: FC<MenuCampusProps> = ({
  width,
  printers,
  selectedCampus,
  setSelectedCampus,
}) => {
  const [facilities, setFacilities] = useState<string[]>([]);

  useEffect(() => {
    const newFacilities = printers
      .map((printer) => printer.location.campus)
      .reduce((arr, value) => {
        return arr.includes(value) ? arr : [...arr, value];
      }, []);

    setFacilities(newFacilities);

    if (newFacilities.length > 0) {
      setSelectedCampus(newFacilities[0]);
    }
  }, [printers]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-full">
        <Button className={`${width ? "w-full" : "w-2/4"} px-0`}>
          <div className="flex items-center justify-between focus-within:outline-none w-full">
            <span>{selectedCampus === "CS1" ? "Lý Thường Kiệt" : "Dĩ An"}</span>
            <CaretSortIcon width="22" height="22" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenuContent className={width ? width : "w-[320px]"}>
        {facilities.map((facility, index) => {
          return (
            <>
              <DropdownMenuItem
                key={`${facility}_${index}`}
                onSelect={() => {
                  setSelectedCampus(facility);
                }}
              >
                {facility === "CS1" ? "Lý Thường Kiệt" : "Dĩ An"}
              </DropdownMenuItem>
              {index !== facilities.length - 1 && <DropdownMenuSeparator />}
            </>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuCampus;
