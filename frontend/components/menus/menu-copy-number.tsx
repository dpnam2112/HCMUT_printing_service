import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { MENU_NUMBER_OF_COPY } from "../../models/constant";

type Props = {
  selectedItem: MENU_NUMBER_OF_COPY;
  setSelectedItem: React.Dispatch<React.SetStateAction<MENU_NUMBER_OF_COPY>>;
};

const MenuCopyNumber: FC<Props> = ({ selectedItem, setSelectedItem }) => {
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
            setSelectedItem(MENU_NUMBER_OF_COPY.ONE);
          }}
        >
          {MENU_NUMBER_OF_COPY.ONE}
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_NUMBER_OF_COPY.TWO);
          }}
        >
          {MENU_NUMBER_OF_COPY.TWO}
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_NUMBER_OF_COPY.FOUR);
          }}
        >
          {MENU_NUMBER_OF_COPY.FOUR}
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_NUMBER_OF_COPY.FIVE);
          }}
        >
          {MENU_NUMBER_OF_COPY.FIVE}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedItem(MENU_NUMBER_OF_COPY.CUSTOM);
          }}
        >
          {MENU_NUMBER_OF_COPY.CUSTOM}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuCopyNumber;
