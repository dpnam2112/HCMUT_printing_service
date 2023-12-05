import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";
import React, { useEffect } from "react";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC, useState } from "react";
import { Printer } from "../../models/types";

type Props = {
  width?: string;
  printers: Printer[];
  selectedCampus: string;
  selectedBuilding: string;
  selectedRoom: number;
  setSelectedRoom: React.Dispatch<React.SetStateAction<number>>;
};

const MenuRoom: FC<Props> = ({
  width,
  printers,
  selectedCampus,
  selectedBuilding,
  selectedRoom,
  setSelectedRoom,
}) => {
  const [rooms, setRooms] = useState<number[]>([]);

  useEffect(() => {
    const newRooms = printers
      .flatMap((printer: Printer) => {
        const isOK =
          printer.location.campus === selectedCampus &&
          printer.location.building_name === selectedBuilding;
        return isOK ? [printer.location.room_code] : [];
      })
      .reduce((arr, value) => {
        return arr.includes(value) ? arr : [...arr, value];
      }, []);
    setRooms(newRooms);
  }, [printers, selectedCampus, selectedBuilding]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-full">
        <Button className={`${width ? "w-full" : "w-2/4"} px-0`}>
          <div className="flex items-center justify-between focus-within:outline-none w-full">
            <span>{selectedRoom}</span>
            <CaretSortIcon width="22" height="22" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenuContent className={width ? width : "w-[320px]"}>
        {rooms.map((room, index) => {
          return (
            <>
              <DropdownMenuItem
                key={`${room}_${index}`}
                onSelect={() => {
                  setSelectedRoom(room);
                }}
              >
                {room}
              </DropdownMenuItem>
              {index !== rooms.length - 1 && <DropdownMenuSeparator />}
            </>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuRoom;
