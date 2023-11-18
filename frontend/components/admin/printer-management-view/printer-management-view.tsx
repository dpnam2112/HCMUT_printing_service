import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  Button,
  DropdownMenu,
  Flex,
  IconButton,
  Table,
  TextField,
} from "@radix-ui/themes";
import { FC, useEffect, useState } from "react";
import {
  PrinterRenderViewProps,
  PrinterViewObject,
} from "../../../models/types";
import { mockPrinterData } from "./mock-data";
import PrinterViewTableRow from "./printer-management-view-table-row";
import { ADMIN_MANAGEMENT_VIEW } from "../../../models/constant";

type PrinterManagementViewProps = {
  setCurrentView: (view: ADMIN_MANAGEMENT_VIEW) => void;
};

const PrinterManagementView: FC<PrinterManagementViewProps> = ({
  setCurrentView,
}) => {
  const [printerList, setPrinterList] =
    useState<PrinterViewObject[]>(mockPrinterData);
  const [printerListRendered, setPrinterListRendered] =
    useState<PrinterRenderViewProps[]>(mockPrinterData);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedRowIDs, setSelectedRowIDs] = useState<string[]>([]);
  const [textFilter, setTextFilter] = useState<string>("");

  const handleSelectRow = (idRow: string) => {
    if (selectedRowIDs.includes(idRow)) {
      setSelectedRowIDs(selectedRowIDs.filter((id) => id !== idRow));
    } else {
      setSelectedRowIDs([...selectedRowIDs, idRow]);
    }
  };

  // Update table rows when user selects rows
  useEffect(() => {
    if (isDeleting) {
      setPrinterListRendered(
        printerListRendered.map((printer: PrinterRenderViewProps) => {
          return {
            ...printer,
            isSelectedDelete: selectedRowIDs.includes(printer.id),
          };
        })
      );
      return;
    }
  }, [selectedRowIDs.length]);

  // Update table rows when user type text in filter input
  useEffect(() => {
    const newPrinterListRendered = getFilteredPrinterList(printerList);
    setPrinterListRendered(newPrinterListRendered);
  }, [textFilter]);

  const handleOnClickCompleteDelete = () => {
    const newPrinterList = printerList.flatMap((printer: PrinterViewObject) => {
      if (selectedRowIDs.includes(printer.id)) {
        return [];
      }
      return [printer];
    });

    setPrinterList(newPrinterList);
    setPrinterListRendered(getFilteredPrinterList(newPrinterList));

    setSelectedRowIDs([]);
    setIsDeleting(false);

    handleFocusInputField();
  };

  const handleOnClickCompleteEditing = () => {
    // Convert newPrinterListRendered to printerList
    // and send it to server

    setIsEditing(false);
    handleFocusInputField();
  };

  const handleFocusInputField = () => {
    const ele = document.getElementById("inputFilterPrinter");
    if (ele) {
      ele.focus();
    }
  };

  const handleClickSave = (newData: PrinterRenderViewProps) => {
    const newPrinterListRendered = printerListRendered.map(
      (printer: PrinterViewObject) => {
        if (printer.id === newData.id) {
          return {
            ...newData,
          };
        }
        return printer;
      }
    );

    setPrinterList(newPrinterListRendered);
    setPrinterListRendered(getFilteredPrinterList(newPrinterListRendered));
  };

  const getFilteredPrinterList = (list: PrinterRenderViewProps[]) => {
    const text = textFilter.toLowerCase();

    if (!text) {
      return list;
    }

    return list.flatMap((printer: PrinterRenderViewProps) => {
      if (printer.name.toLowerCase().includes(text)) {
        return [printer];
      }
      if (printer.facility.toLowerCase().includes(text)) {
        return [printer];
      }
      if (printer.building.toLowerCase().includes(text)) {
        return [printer];
      }
      if (printer.room.toLowerCase().includes(text)) {
        return [printer];
      }
      const status = printer.isRunning ? "Đang hoạt động" : "Không hoạt động";
      if (status.toLowerCase().includes(text)) {
        return [printer];
      }
      return [];
    });
  };

  return (
    <div className="w-full h-full flex flex-col gap-5 p-5 overflow-x-auto">
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
              <TextField.Input
                id="inputFilterPrinter"
                placeholder="Lọc các hàng..."
                value={textFilter}
                onChange={(e) => {
                  setTextFilter(e.target.value.trim());
                }}
              />
            </TextField.Root>
            <Button
              className="cursor-pointer"
              variant={isEditing ? "classic" : "surface"}
              onClick={() => {
                if (isEditing) {
                  handleOnClickCompleteEditing();
                } else {
                  setSelectedRowIDs([]);
                  setIsDeleting(false);
                  setIsEditing(true);
                }
              }}
            >
              <div className="flex items-center gap-2">
                {isEditing && (
                  <ArrowPathIcon className="w-4 h-4 animate-spin text-blue-400" />
                )}
                {isEditing ? "Hoàn tất chỉnh sửa" : "Chỉnh sửa"}
              </div>
            </Button>
            <Button
              className="cursor-pointer"
              variant={"surface"}
              onClick={() => {
                setCurrentView(ADMIN_MANAGEMENT_VIEW.ADD_PRINTER);
              }}
            >
              Thêm mới
            </Button>
            <Button
              className={`cursor-pointer`}
              onClick={() => {
                if (isDeleting) {
                  handleOnClickCompleteDelete();
                } else {
                  setSelectedRowIDs([]);
                  setIsEditing(false);
                  setIsDeleting(true);
                }
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

      <div className="border rounded overflow-x-auto">
        <Table.Root className="overflow-x-auto">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Trạng thái</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Tên</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Cơ sở</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Toà</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Phòng</Table.ColumnHeaderCell>
              {(isDeleting || isEditing) && (
                <Table.ColumnHeaderCell> </Table.ColumnHeaderCell>
              )}
            </Table.Row>
          </Table.Header>

          <Table.Body className=" overflow-x-auto">
            {printerListRendered.map((printer: PrinterViewObject) => {
              return (
                <PrinterViewTableRow
                  key={printer.id}
                  data={printer}
                  isEditing={isEditing}
                  isDeleting={isDeleting}
                  handleSelectRow={handleSelectRow}
                  handleClickSave={handleClickSave}
                />
              );
            })}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default PrinterManagementView;
