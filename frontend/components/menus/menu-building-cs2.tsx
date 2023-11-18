import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { MENU_BUILDING_CS2 } from "../../models/constant";

type Props = {
  selectedItem: MENU_BUILDING_CS2;
  setSelectedItem: React.Dispatch<React.SetStateAction<MENU_BUILDING_CS2>>;
};

const MenuBuildingCS2: FC<Props> = ({ selectedItem, setSelectedItem }) => {
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
            setSelectedItem(MENU_BUILDING_CS2.H1);
          }}
        >
          {MENU_BUILDING_CS2.H1}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_BUILDING_CS2.H2);
          }}
        >
          {MENU_BUILDING_CS2.H2}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_BUILDING_CS2.H3);
          }}
        >
          {MENU_BUILDING_CS2.H3}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_BUILDING_CS2.H6);
          }}
        >
          {MENU_BUILDING_CS2.H6}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuBuildingCS2;
