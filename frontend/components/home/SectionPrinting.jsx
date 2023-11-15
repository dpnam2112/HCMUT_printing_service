import {
  Flex,
  Text,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/themes";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import {
  CaretLeftIcon,
  CaretDownIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

const SectionPrinting = () => {
  return (
    <div className="flex items-center gap-5 mt-12 mb-4 mx-40 h-[650px] p-10 rounded border">
      <div className="w-2/5 h-full rounded border"></div>
      <div className="flex flex-col gap-2 w-3/5 h-full rounded border">
        <div className="flex items-center w-full px-5 py-3">
          <span className="w-1/4">Chọn cơ sơ in</span>
          <DropdownMenu.Root className="w-full">
            <DropdownMenu.Trigger>
              <Button className="w-3/4 px-0">
                <div className="flex items-center justify-between focus-within:outline-none w-3/4">
                  <span>Lý Thường Kiệt</span>
                  <CaretDownIcon width="20" height="20" />
                </div>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenuContent className="w-[400px]">
              <DropdownMenuItem>Lý Thường Kiệt</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu.Root>
        </div>
      </div>
    </div>
  );
};

export default SectionPrinting;
