import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { MENU_ROOM } from "../../models/constant";

type Props = {
  width?: string;
  selectedItem: MENU_ROOM;
  setSelectedItem: React.Dispatch<React.SetStateAction<MENU_ROOM>>;
};

const MenuRoom: FC<Props> = ({ width, selectedItem, setSelectedItem }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-full">
        <Button className={`${width ? "w-full" : "w-2/4"} px-0`}>
          <div className="flex items-center justify-between focus-within:outline-none w-full">
            <span>{selectedItem}</span>
            <CaretSortIcon width="22" height="22" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenuContent className={width ? width : "w-[320px]"}>
        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_ROOM.R_101);
          }}
        >
          {MENU_ROOM.R_101}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_ROOM.R_201);
          }}
        >
          {MENU_ROOM.R_201}
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_ROOM.R_207);
          }}
        >
          {MENU_ROOM.R_207}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_ROOM.R_304);
          }}
        >
          {MENU_ROOM.R_304}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_ROOM.R_401);
          }}
        >
          {MENU_ROOM.R_401}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_ROOM.R_502);
          }}
        >
          {MENU_ROOM.R_502}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_ROOM.R_601);
          }}
        >
          {MENU_ROOM.R_601}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuRoom;
