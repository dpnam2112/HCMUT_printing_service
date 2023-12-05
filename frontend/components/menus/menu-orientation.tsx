import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { MENU_PRINT_ORIENTATION } from "../../models/constant";

type MenuOrientationProps = {
  width?: string;
  selectedOrientation: MENU_PRINT_ORIENTATION;
  setSelectedOrientation: React.Dispatch<
    React.SetStateAction<MENU_PRINT_ORIENTATION>
  >;
};

const MenuOrientation: FC<MenuOrientationProps> = ({
  width,
  selectedOrientation,
  setSelectedOrientation,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-full">
        <Button className={`${width ? "w-full" : "w-2/4"} px-0`}>
          <div className="flex items-center justify-between focus-within:outline-none w-full">
            <span>{selectedOrientation}</span>
            <CaretSortIcon width="22" height="22" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenuContent className={width ? width : "w-[320px]"}>
        <DropdownMenuItem
          onSelect={() => {
            setSelectedOrientation(MENU_PRINT_ORIENTATION.VERTICAL);
          }}
        >
          {MENU_PRINT_ORIENTATION.VERTICAL}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => {
            setSelectedOrientation(MENU_PRINT_ORIENTATION.HORIZONTAL);
          }}
        >
          {MENU_PRINT_ORIENTATION.HORIZONTAL}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuOrientation;
