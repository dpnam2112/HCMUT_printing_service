import { Button, Table, TextField, Switch } from "@radix-ui/themes";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

const ExtensionView = () => {
  const [textFilter, setTextFilter] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState([
    { name: "DOCX", extension: ".docx", status: true },
    { name: "CSV", extension: ".csv", status: true },
    { name: "PPT", extension: ".ppt", status: false },
  ]);

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(textFilter.toLowerCase()) ||
      (item.status ? "Đang được sử dụng" : "Không được sử dụng")
        .toLowerCase()
        .includes(textFilter.toLowerCase())
  );

  const toggleStatus = (index) => {
    const newData = [...data];
    newData[index].status = !newData[index].status;
    setData(newData);
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
              onClick={() => setEditMode(!editMode)}
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
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Tên Phần Mở Rộng</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Phần Mở Rộng</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Trạng Thái</Table.ColumnHeaderCell>
              {editMode && <Table.ColumnHeaderCell></Table.ColumnHeaderCell>}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {filteredData.map((item, index) => (
              <Table.Row key={index}>
                <Table.RowHeaderCell>{item.name}</Table.RowHeaderCell>
                <Table.Cell>{item.extension}</Table.Cell>
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
                {editMode && (
                  <Table.Cell>
                    <Switch
                      color="indigo"
                      checked={item.status}
                      onClick={() => {
                        toggleStatus(index);
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
