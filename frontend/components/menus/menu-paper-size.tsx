import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/themes";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { FC } from "react";

type Props = {
  selectedPaperSize: string;
  setSelectedPaperSize: React.Dispatch<React.SetStateAction<string>>;
};

const MenuPaperSize: FC<Props> = ({
  selectedPaperSize,
  setSelectedPaperSize,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-full">
        <Button className="w-3/5 px-0">
          <div className="flex items-center justify-between focus-within:outline-none w-full">
            <span>{selectedPaperSize}</span>
            <CaretSortIcon width="22" height="22" />
          </div>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenuContent className="w-[320px]">
        <DropdownMenuItem
          onSelect={() => {
            setSelectedPaperSize("A4");
          }}
        >
          A4
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={() => {
            setSelectedPaperSize("A3");
          }}
        >
          A3
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu.Root>
  );
};

export default MenuPaperSize;
