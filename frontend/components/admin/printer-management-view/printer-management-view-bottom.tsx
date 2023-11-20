import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  IconButton,
} from "@radix-ui/themes";
import { FC } from "react";
import {
  CaretSortIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

type PrinterManagementViewBottomProps = {
  isDeleting: boolean;
  selectedRowNum: number;
  rowsNum: number;
  rowsNumPerPage: number;
  currentPage: number;
  setRowsNumPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const PrinterManagementViewBottom: FC<PrinterManagementViewBottomProps> = ({
  isDeleting,
  selectedRowNum,
  rowsNum,
  rowsNumPerPage,
  currentPage,
  setRowsNumPerPage,
  setCurrentPage,
}) => {
  const totalPage = Math.ceil(rowsNum / rowsNumPerPage);

  return (
    <div className="flex items-center justify-between">
      <div>
        {isDeleting && selectedRowNum > 0 && (
          <span className="font-medium text-sm">
            Bạn đang chọn {selectedRowNum} máy in.
          </span>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm text">Số máy in mỗi trang</span>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="w-full">
              <Button className="w-fit px-0 h-5">
                <div className="flex items-center justify-between focus-within:outline-none w-full">
                  {rowsNumPerPage}
                  <CaretSortIcon width="22" height="22" />
                </div>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenuContent className="w-[50]">
              <DropdownMenuCheckboxItem
                checked={rowsNumPerPage === 5}
                onSelect={() => {
                  if (rowsNumPerPage !== 5) {
                    setRowsNumPerPage(5);
                  }
                }}
              >
                5 máy in
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={rowsNumPerPage === 10}
                onSelect={() => {
                  if (rowsNumPerPage !== 10) {
                    setRowsNumPerPage(10);
                  }
                }}
              >
                10 máy in
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu.Root>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">
            Trang {currentPage} trên {totalPage}
          </span>
          <IconButton
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage(1);
            }}
          >
            <DoubleArrowLeftIcon width="20" height="18" />
          </IconButton>
          <IconButton
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            <ChevronLeftIcon width="20" height="18" />
          </IconButton>

          <IconButton
            disabled={currentPage === totalPage}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            <ChevronRightIcon width="20" height="18" />
          </IconButton>
          <IconButton
            disabled={currentPage === totalPage}
            onClick={() => {
              setCurrentPage(totalPage);
            }}
          >
            <DoubleArrowRightIcon width="20" height="18" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default PrinterManagementViewBottom;
