import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { MENU_BUILDING_CS1 } from "../../models/constant";

type MenuFacilityProps = {
  selectedItem: MENU_BUILDING_CS1;
  setSelectedItem: React.Dispatch<React.SetStateAction<MENU_BUILDING_CS1>>;
};

const MenuBuildingCS1: FC<MenuFacilityProps> = ({
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-full">
        <Button className="w-2/4 px-0">
          <div className="flex items-center justify-between focus-within:outline-none w-full">
            <span>{selectedItem}</span>
            <CaretSortIcon width="22" height="22" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenuContent className="w-[320px]">
        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_BUILDING_CS1.A1);
          }}
        >
          {MENU_BUILDING_CS1.A1}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_BUILDING_CS1.B1);
          }}
        >
          {MENU_BUILDING_CS1.B1}
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_BUILDING_CS1.B2);
          }}
        >
          {MENU_BUILDING_CS1.B2}
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_BUILDING_CS1.B5);
          }}
        >
          {MENU_BUILDING_CS1.B5}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_BUILDING_CS1.C5);
          }}
        >
          {MENU_BUILDING_CS1.C5}
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_BUILDING_CS1.C6);
          }}
        >
          {MENU_BUILDING_CS1.C6}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuBuildingCS1;
