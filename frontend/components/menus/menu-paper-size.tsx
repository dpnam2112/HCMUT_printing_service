import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { MENU_PAPER_SIZE } from "../../models/constant";

type Props = {
  selectedItem: MENU_PAPER_SIZE;
  setSelectedItem: React.Dispatch<React.SetStateAction<MENU_PAPER_SIZE>>;
};

const MenuPaperSize: FC<Props> = ({ selectedItem, setSelectedItem }) => {
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
            setSelectedItem(MENU_PAPER_SIZE.SIZE_A4);
          }}
        >
          {MENU_PAPER_SIZE.SIZE_A4}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_PAPER_SIZE.SIZE_A3);
          }}
        >
          {MENU_PAPER_SIZE.SIZE_A3}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuPaperSize;
