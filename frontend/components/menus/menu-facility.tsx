import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { MENU_FACILITY } from "../../models/constant";

type MenuFacilityProps = {
  selectedFacility: MENU_FACILITY;
  setSelectedFacility: React.Dispatch<React.SetStateAction<MENU_FACILITY>>;
};

const MenuFacility: FC<MenuFacilityProps> = ({
  selectedFacility,
  setSelectedFacility,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-full">
        <Button className="w-2/4 px-0">
          <div className="flex items-center justify-between focus-within:outline-none w-full">
            <span>{selectedFacility}</span>
            <CaretSortIcon width="22" height="22" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenuContent className="w-[320px]">
        <DropdownMenuItem
          onSelect={() => {
            setSelectedFacility(MENU_FACILITY.LY_THUONG_KIET);
          }}
        >
          Lý Thường Kiệt
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => {
            setSelectedFacility(MENU_FACILITY.DI_AN);
          }}
        >
          Dĩ An
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuFacility;
