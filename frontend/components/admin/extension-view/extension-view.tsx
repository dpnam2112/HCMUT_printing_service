import { Button, Table, TextField, Switch } from "@radix-ui/themes";
import { useState } from "react";
import {
  ArrowDownIcon,
  CaretSortIcon,
  MagnifyingGlassIcon,
  ArrowUpIcon,
} from "@radix-ui/react-icons";
import { SORT_CONFIG_EXTENSION_MANAGEMENT } from "../../../models/constant";
import { ExtensionViewObject } from "../../../models/types";
import ExtensionManagementState from "./models/extension-management-state";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

const state = new ExtensionManagementState();

const ExtensionView = () => {
  const [textFilter, setTextFilter] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [sortConfig, setSortConfig] = useState<
    SORT_CONFIG_EXTENSION_MANAGEMENT | undefined
  >(undefined);
  const [data, setData] = useState<ExtensionViewObject[]>([
    { name: "DOCX", extension: ".docx", status: true },
    { name: "CSV", extension: ".csv", status: true },
    { name: "PPT", extension: ".ppt", status: false },
  ]);

  const filteredData = state.getSortedPrinters(
    data.filter(
      (item) =>
        item.name.toLowerCase().includes(textFilter.toLowerCase()) ||
        item.extension.toLowerCase().includes(textFilter.toLowerCase()) ||
        (item.status ? "Đang được sử dụng" : "Không được sử dụng")
          .toLowerCase()
          .includes(textFilter.toLowerCase())
    ),
    sortConfig
  );

  const toggleStatus = (ext: string) => {
    const newData = data.flatMap((obj: ExtensionViewObject) => {
      if (obj.extension === ext) {
        return [{ ...obj, status: !obj.status }];
      }
      return [obj];
    });
    setData(newData);
  };

  const handleFocusInputField = () => {
    const ele = document.getElementById("inputFilterPrinter");
    if (ele) {
      ele.focus();
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-5 p-5 overflow-x-auto">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <span className="font-bold text-2xl">Xin chào SPSO!</span>
          <span className="font-semibold text-base text-[#71717A]">
            Đây là giao diện quản lý phần mở rộng của file.
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
                placeholder="Lọc các đuôi file"
                value={textFilter}
                onChange={(e) => {
                  setTextFilter(e.target.value);
                }}
              />
            </TextField.Root>
            <Button
              className="cursor-pointer"
              variant={editMode ? "classic" : "surface"}
              onClick={() => {
                if (editMode) {
                  handleFocusInputField();
                }
                setEditMode(!editMode);
              }}
            >
              <div className="flex items-center gap-2">
                {editMode && (
                  <ArrowPathIcon className="w-4 h-4 animate-spin text-blue-400" />
                )}
                {editMode ? "Hoàn tất chỉnh sửa" : "Chỉnh sửa"}
              </div>
            </Button>
          </div>
        </div>
        <Table.Root className="border rounded">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Trạng Thái</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div
                  className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1"
                  onClick={() => {
                    if (
                      sortConfig === SORT_CONFIG_EXTENSION_MANAGEMENT.NAME_ASC
                    ) {
                      setSortConfig(SORT_CONFIG_EXTENSION_MANAGEMENT.NAME_DESC);
                    } else if (
                      sortConfig === SORT_CONFIG_EXTENSION_MANAGEMENT.NAME_DESC
                    ) {
                      setSortConfig(undefined);
                    } else {
                      setSortConfig(SORT_CONFIG_EXTENSION_MANAGEMENT.NAME_ASC);
                    }
                  }}
                >
                  <span className="text-sm font-semibold">
                    Tên Phần Mở Rộng
                  </span>
                  {sortConfig === SORT_CONFIG_EXTENSION_MANAGEMENT.NAME_ASC ? (
                    <ArrowUpIcon />
                  ) : sortConfig ===
                    SORT_CONFIG_EXTENSION_MANAGEMENT.NAME_DESC ? (
                    <ArrowDownIcon />
                  ) : (
                    <CaretSortIcon />
                  )}
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div
                  className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 w-fit rounded-md px-2 py-1"
                  onClick={() => {
                    if (
                      sortConfig ===
                      SORT_CONFIG_EXTENSION_MANAGEMENT.EXTENSION_ASC
                    ) {
                      setSortConfig(
                        SORT_CONFIG_EXTENSION_MANAGEMENT.EXTENSION_DESC
                      );
                    } else if (
                      sortConfig ===
                      SORT_CONFIG_EXTENSION_MANAGEMENT.EXTENSION_DESC
                    ) {
                      setSortConfig(undefined);
                    } else {
                      setSortConfig(
                        SORT_CONFIG_EXTENSION_MANAGEMENT.EXTENSION_ASC
                      );
                    }
                  }}
                >
                  <span className="text-sm font-semibold">Phần Mở Rộng</span>
                  {sortConfig ===
                  SORT_CONFIG_EXTENSION_MANAGEMENT.EXTENSION_ASC ? (
                    <ArrowUpIcon />
                  ) : sortConfig ===
                    SORT_CONFIG_EXTENSION_MANAGEMENT.EXTENSION_DESC ? (
                    <ArrowDownIcon />
                  ) : (
                    <CaretSortIcon />
                  )}
                </div>
              </Table.ColumnHeaderCell>
              {editMode && <Table.ColumnHeaderCell></Table.ColumnHeaderCell>}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {filteredData.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  {item.status ? (
                    <div className="flex items-center gap-2 w-full h-full">
                      <div className="bg-green-400 rounded-full w-4 h-4"></div>
                      <span className="text-sm font-medium text-green-400">
                        Đang được sử dụng
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 w-full h-full">
                      <div className="bg-red-400 rounded-full w-4 h-4"></div>
                      <span className="text-sm font-medium text-red-400">
                        Không được sử dụng
                      </span>
                    </div>
                  )}
                </Table.Cell>

                <Table.RowHeaderCell>
                  <div className="w-full h-full pl-2">
                    <span className={`${item.status ? "" : "text-red-400"}`}>
                      {item.name}
                    </span>
                  </div>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <div className="w-full h-full pl-2">
                    <span className={`${item.status ? "" : "text-red-400"}`}>
                      {item.extension}
                    </span>
                  </div>
                </Table.Cell>
                {editMode && (
                  <Table.Cell>
                    <Switch
                      color="indigo"
                      checked={item.status}
                      onClick={() => {
                        toggleStatus(item.extension);
                      }}
                      onChange={() => {}}
                    />
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default ExtensionView;
