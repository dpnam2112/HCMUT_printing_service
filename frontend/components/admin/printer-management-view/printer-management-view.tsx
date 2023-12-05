import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Button,
  Dialog,
  TextField,
  Tooltip,
} from "@radix-ui/themes";
import { FC, useEffect, useState } from "react";
import { Printer } from "../../../models/types";
import { ADMIN_MANAGEMENT_VIEW } from "../../../models/constant";
import networkService from "../../../models/network-service";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import DialogEditingPrinter from "./dialog-editing-printer";
import toast from "react-hot-toast";
import AlertDeletePrinters from "./alert-delete-printers";
import { set } from "date-fns";

type PrinterManagementViewProps = {
  setCurrentView: (view: ADMIN_MANAGEMENT_VIEW) => void;
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID máy", width: 100, resizable: true },
  {
    field: "name",
    headerName: "Tên máy",
    width: 250,
  },
  {
    field: "manufacturer",
    headerName: "Hãng sản xuất",
    width: 200,
  },
  {
    field: "campus",
    headerName: "Cơ sở",
    width: 200,
  },
  {
    field: "building_name",
    headerName: "Toà",
    width: 200,
  },
  {
    field: "floor",
    headerName: "Lầu",
    width: 200,
  },
  {
    field: "room_code",
    headerName: "Phòng",
    width: 200,
  },
  {
    field: "description",
    headerName: "Mô tả",
    width: 350,
  },
];

const convertToRows = (printers: Printer[]) => {
  return printers.map((printer: Printer) => {
    return {
      id: printer.id,
      name: printer.name,
      manufacturer: printer.manufacturer,
      campus: printer.location.campus,
      floor: printer.location.floor,
      room_code: printer.location.room_code,
      building_name: printer.location.building_name,
      description: printer.description,
    };
  });
};

const PrinterManagementView: FC<PrinterManagementViewProps> = ({
  setCurrentView,
}) => {
  const [printers, setPrinters] = useState<Printer[]>([]);
  const [selectedPrinters, setSelectedPrinters] = useState<Printer[]>([]);
  const [textFilter, setTextFilter] = useState<string>("");

  const [openDialogEditingPrinter, setOpenDialogEditingPrinter] =
    useState<boolean>(false);
  const [openDialogDeletePrinters, setOpenDialogDeletePrinters] =
    useState<boolean>(false);

  const apiRef = useGridApiRef();

  useEffect(() => {
    handleUpdateNewPrinters();
  }, []);

  const handleUpdateNewPrinters = async () => {
    const newPrinters = await networkService.getPrinters();
    setPrinters(newPrinters);

    setSelectedPrinters([]);
    apiRef.current?.setRowSelectionModel([]);
  };

  const getFilteredPrinterList = (list: Printer[]) => {
    const text = textFilter.toLowerCase();

    if (!text) {
      return list;
    }

    return list.flatMap((printer: Printer) => {
      const textPrinter = `${printer.id} ${printer.name} ${printer.description} ${printer.location} ${printer.manufacturer} ${printer.location.building_name} ${printer.location.campus} ${printer.location.floor} ${printer.location.room_code}`;
      return textPrinter.toLowerCase().includes(text) ? [printer] : [];
    });
  };

  const rows = convertToRows(getFilteredPrinterList(printers));

  return (
    <div className="w-full h-full flex flex-col gap-5 p-5 overflow-x-auto">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <span className="font-bold text-2xl">Xin chào SPSO!</span>
          <span className="font-semibold text-base text-[#71717A]">
            Đây là giao diện quản lý máy in.
          </span>
        </div>
        <div className="flex flex-col gap-5 w-full h-full">
          <div className="flex items-center justify-center gap-2 w-full">
            <TextField.Root className="w-full" variant="surface" size={"2"}>
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input
                id="inputFilterPrinter"
                placeholder="Lọc các hàng"
                value={textFilter}
                onChange={(e) => {
                  setTextFilter(e.target.value);
                }}
              />
            </TextField.Root>
            <Tooltip content={"Bấm để chỉnh sửa thông tin các máy in"}>
              <Dialog.Root open={openDialogEditingPrinter}>
                <Dialog.Trigger>
                  <Button
                    className="cursor-pointer"
                    variant={"surface"}
                    onClick={() => {
                      if (selectedPrinters.length === 0) {
                        toast.error("Vui lòng chọn máy in để chỉnh sửa");
                        return;
                      }
                      setOpenDialogEditingPrinter(true);
                    }}
                  >
                    Chỉnh sửa
                  </Button>
                </Dialog.Trigger>
                {selectedPrinters.length > 0 ? (
                  <DialogEditingPrinter
                    printer={selectedPrinters[selectedPrinters.length - 1]}
                    handleClose={() => {
                      handleUpdateNewPrinters();
                      setOpenDialogEditingPrinter(false);
                    }}
                  />
                ) : (
                  <></>
                )}
              </Dialog.Root>
            </Tooltip>

            <Tooltip content={"Bấm để chọn các máy in muốn xoá"}>
              <AlertDialog.Root open={openDialogDeletePrinters}>
                <AlertDialog.Trigger>
                  <Button
                    className={`cursor-pointer`}
                    onClick={() => {
                      if (selectedPrinters.length === 0) {
                        toast.error("Vui lòng chọn máy in bạn muốn xoá");
                        return;
                      }
                      setOpenDialogDeletePrinters(true);
                    }}
                    variant={"surface"}
                  >
                    Xoá
                  </Button>
                </AlertDialog.Trigger>
                {selectedPrinters.length > 0 ? (
                  <AlertDeletePrinters
                    printers={selectedPrinters}
                    handleClose={() => {
                      handleUpdateNewPrinters();
                      setOpenDialogDeletePrinters(false);
                    }}
                  />
                ) : (
                  <></>
                )}
              </AlertDialog.Root>
            </Tooltip>

            <Tooltip content="Thêm một máy in mới">
              <Button
                className="cursor-pointer"
                variant={"surface"}
                onClick={() => {
                  setCurrentView(ADMIN_MANAGEMENT_VIEW.ADD_PRINTER);
                }}
              >
                Thêm
              </Button>
            </Tooltip>
          </div>
          <DataGrid
            rows={rows}
            columns={columns}
            apiRef={apiRef}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 20 },
              },
            }}
            pageSizeOptions={[5, 10, 20, 50, 100]}
            pagination
            checkboxSelection
            onRowSelectionModelChange={(indexes: any[]) => {
              const selectedPrinters = printers.flatMap((printer) => {
                return indexes.includes(printer.id) ? [printer] : [];
              });
              setSelectedPrinters(selectedPrinters);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PrinterManagementView;
