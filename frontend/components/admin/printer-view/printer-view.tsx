import Link from "next/link";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import {
  ArrowRightIcon,
  CaretDownIcon,
  CaretSortIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Button,
  DropdownMenu,
  Flex,
  IconButton,
  Table,
  TextField,
} from "@radix-ui/themes";
import { useState } from "react";
import {
  PrinterRenderViewProps,
  PrinterViewObject,
} from "../../../models/types";
import { mockPrinterData } from "./mock-data";
import PrinterViewTableRow from "./printer-view-table-row";

const PrinterView = () => {
  const [printerList, setPrinterList] =
    useState<PrinterViewObject[]>(mockPrinterData);
  const [printerListRendered, setPrinterListRendered] =
    useState<PrinterRenderViewProps[]>(mockPrinterData);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isModifying, setIsModifying] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex flex-col gap-5 p-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <span className="font-bold text-2xl">Xin chào SPSO!</span>
          <span className="font-semibold text-base text-[#71717A]">
            Đây là giao diện quản lý máy in.
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2 w-full">
            <TextField.Root className="w-full" variant="surface" size={"2"}>
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input placeholder="Tìm kiếm máy in..." />
            </TextField.Root>
            <Button
              className="cursor-pointer"
              variant={isModifying ? "classic" : "surface"}
              onClick={() => {
                setIsModifying(!isModifying);
              }}
            >
              <div className="flex items-center gap-2">
                {isModifying && (
                  <ArrowPathIcon className="w-4 h-4 animate-spin text-blue-400" />
                )}
                {isModifying ? "Hoàn tất chỉnh sửa" : "Chỉnh sửa"}
              </div>
            </Button>
            <Button className="cursor-pointer" variant={"surface"}>
              Thêm mới
            </Button>
            <Button
              className={`cursor-pointer`}
              onClick={() => {
                setIsDeleting(!isDeleting);
              }}
              variant={isDeleting ? "classic" : "surface"}
            >
              <div className="flex items-center gap-2">
                {isDeleting && (
                  <ArrowPathIcon className="w-4 h-4 animate-spin text-blue-400" />
                )}
                {isDeleting ? "Hoàn tất xoá" : "Xoá"}
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="border rounded">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Trạng thái</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Tên</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Cơ sở</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Toà</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Phòng</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {printerListRendered.map((printer: PrinterViewObject) => {
              return <PrinterViewTableRow data={printer} />;
            })}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default PrinterView;
