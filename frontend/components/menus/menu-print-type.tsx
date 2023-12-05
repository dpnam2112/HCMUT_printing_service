import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { MENU_PRINT_PAGE, MENU_PRINT_TYPE } from "../../models/constant";

type Props = {
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

const MenuPrintType: FC<Props> = ({ selectedItem, setSelectedItem }) => {
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
            setSelectedItem(MENU_PRINT_TYPE.DOUBLE);
          }}
        >
          {MENU_PRINT_TYPE.DOUBLE}
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
