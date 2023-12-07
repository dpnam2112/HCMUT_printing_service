import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { MENU_PRINT_PAGE } from "../../models/constant";

type Props = {
  selectedItem: MENU_PRINT_PAGE;
  setSelectedItem: React.Dispatch<React.SetStateAction<MENU_PRINT_PAGE>>;
};

const MenuPrintPage: FC<Props> = ({ selectedItem, setSelectedItem }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-full">
        <Button className="w-3/5 px-0">
          <div className="flex items-center justify-between focus-within:outline-none w-full">
            <span>{selectedItem}</span>
            <CaretSortIcon width="22" height="22" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenuContent className="w-[320px]">
        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_PRINT_PAGE.ALL);
          }}
        >
          {MENU_PRINT_PAGE.ALL}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_PRINT_PAGE.CUSTOM);
          }}
        >
          {MENU_PRINT_PAGE.CUSTOM}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuPrintPage;
