import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { MENU_PRINT_TYPE } from "../../models/constant";

type Props = {
  selectedItem: MENU_PRINT_TYPE;
  setSelectedItem: React.Dispatch<React.SetStateAction<MENU_PRINT_TYPE>>;
};

const MenuPrintType: FC<Props> = ({ selectedItem, setSelectedItem }) => {
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
            setSelectedItem(MENU_PRINT_TYPE.DOUBLE_LONG);
          }}
        >
          {MENU_PRINT_TYPE.DOUBLE_LONG}
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_PRINT_TYPE.DOUBLE_SHORT);
          }}
        >
          {MENU_PRINT_TYPE.DOUBLE_SHORT}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_PRINT_TYPE.ONE);
          }}
        >
          {MENU_PRINT_TYPE.ONE}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuPrintType;
