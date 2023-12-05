import { TextField, Switch } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Extension } from "../../../models/types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import networkService from "../../../models/network-service";
import toast from "react-hot-toast";

const columns: GridColDef[] = [
  {
    field: "status",
    headerName: "Trạng thái",
    width: 200,
    renderCell: (params) => {
      const [isChecked, setIsChecked] = useState<boolean>(false);

      useEffect(() => {
        setIsChecked(params.value);
      }, [params.value]);

      const handleOnClick = async () => {
        const isSuccess = await networkService.activateExtension({
          activate: !isChecked,
          ext: [params.row.ext],
        });

        console.log(isSuccess);

        if (isSuccess) {
          setIsChecked(!isChecked);
          toast.success("Thay đổi trạng thái thành công!");
        } else {
          toast.error("Có lỗi xảy ra!");
        }
      };

      return <Switch checked={isChecked} onClick={handleOnClick} />;
    },
  },
  {
    field: "name",
    headerName: "Tên phần mở rộng",
    width: 200,
  },
  {
    field: "ext",
    headerName: "Phần mở rộng",
    width: 200,
  },
];

const convertToRows = (extensions: Extension[]): any[] => {
  return extensions.map((extension, index) => {
    return {
      id: index,
      status: extension.status,
      name: extension.name,
      ext: extension.ext,
    };
  });
};

const ExtensionView = () => {
  const [textFilter, setTextFilter] = useState("");
  const [extensions, setExtensions] = useState<Extension[]>([]);

  useEffect(() => {
    handleUpdateExtensions();
  }, []);

  const handleUpdateExtensions = async () => {
    const newExtensions = await networkService.getExtensions();
    setExtensions(newExtensions);
  };

  const filteredExtensions = extensions.flatMap((ext) => {
    const text = `${ext.name} ${ext.ext}`;
    if (text.toLowerCase().includes(textFilter.toLowerCase())) {
      return [ext];
    } else {
      return [];
    }
  });
  const rows = convertToRows(filteredExtensions);

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
          <TextField.Root className="w-full" variant="surface" size={"2"}>
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input
              placeholder="Lọc các phần mở rộng"
              value={textFilter}
              onChange={(e) => {
                setTextFilter(e.target.value);
              }}
            />
          </TextField.Root>
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
            },
          }}
          pageSizeOptions={[5, 10, 20, 50, 100]}
        />
      </div>
    </div>
  );
};

export default ExtensionView;
