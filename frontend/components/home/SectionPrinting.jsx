import { Flex, Text, Button, DropdownMenu } from "@radix-ui/themes";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import {
  CaretLeftIcon,
  CaretDownIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

const SectionPrinting = () => {
  return (
    <div className="mt-12 mb-4 px-40 w-full h-[400px] p-5 flex flex-col gap-10">
      <div className="flex flex-col items-center justify-center bg-[#D9EEFE] border-dotted border-2 border-black w-full h-3/5 gap-5 p-5">
        <ArrowUpTrayIcon className="w-10 h-10" />
        <Text className="text-2xl text-[#666666] select-none">
          Kéo thả file hoặc{" "}
          <Text className="text-blue-400 underline cursor-pointer">Chọn</Text>{" "}
          file từ máy tính
        </Text>
      </div>
      <div className="flex items-center justify-center w-full gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-10 justify-between">
            <p className="text-base">Kích thước giấy </p>
            <Flex gap="3" align="center">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft" className="w-40" size={"2"}>
                    <div className="flex justify-between w-full">
                      <span>A4</span>

                      <CaretDownIcon width="20" height="20" />
                    </div>
                  </Button>
                </DropdownMenu.Trigger>
              </DropdownMenu.Root>
            </Flex>
          </div>
          <div className="flex items-center gap-10 justify-between">
            <p className="text-base">Số lượng bản sao </p>
            <Flex gap="3" align="center">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft" className="w-40" size={"2"}>
                    <div className="flex justify-between w-full">
                      <span>1</span>
                      <CaretDownIcon width="20" height="20" />
                    </div>
                  </Button>
                </DropdownMenu.Trigger>
              </DropdownMenu.Root>
            </Flex>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-10 justify-between">
            <p className="text-base">Kiểu in</p>
            <Flex gap="3" align="center">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft" className="w-40" size={"2"}>
                    <div className="flex justify-between w-full">
                      <span>Một mặt</span>

                      <CaretDownIcon width="20" height="20" />
                    </div>
                  </Button>
                </DropdownMenu.Trigger>
              </DropdownMenu.Root>
            </Flex>
          </div>
          <div className="flex items-center gap-10 justify-between">
            <p className="text-base">In trang</p>
            <Flex gap="3" align="center">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft" className="w-40" size={"2"}>
                    <div className="flex justify-between w-full">
                      <span>Chỉ in trang chẵn</span>
                      <CaretDownIcon width="20" height="20" />
                    </div>
                  </Button>
                </DropdownMenu.Trigger>
              </DropdownMenu.Root>
            </Flex>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-10 justify-between">
            <p className="text-base">Máy in tại toà</p>
            <Flex gap="3" align="center">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft" className="w-40" size={"2"}>
                    <div className="flex justify-between w-full">
                      <span>Dĩ An: H6</span>

                      <CaretDownIcon width="20" height="20" />
                    </div>
                  </Button>
                </DropdownMenu.Trigger>
              </DropdownMenu.Root>
            </Flex>
          </div>
          <div className="flex items-center gap-10 justify-between">
            <p className="text-base">Vị trí máy in</p>
            <Flex gap="3" align="center">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft" className="w-40" size={"2"}>
                    <div className="flex justify-between w-full">
                      <span>Lầu 3 H6</span>
                      <CaretDownIcon width="20" height="20" />
                    </div>
                  </Button>
                </DropdownMenu.Trigger>
              </DropdownMenu.Root>
            </Flex>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Button variant="solid" highContrast>
            Xem trước
            <MagnifyingGlassIcon />
          </Button>
          <Button variant="solid" highContrast>
            In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionPrinting;
