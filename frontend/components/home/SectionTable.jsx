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

const SectionTable = () => {
  return (
    <div className="flex flex-col mt-16 mx-40 max-w-[1700px] min-h-[400px] px-10 py-14 rounded border">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <span className="font-bold text-2xl">Xin chào Huy!</span>
          <span className="font-semibold text-base text-[#71717A]">
            Đây là danh sách các bản in của bạn tuần này!
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-5 w-1/2">
            <TextField.Root className="w-full" variant="surface" size={"2"}>
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input placeholder="Tìm kiếm bản in..." />
            </TextField.Root>
            <Button variant="solid" className="cursor-pointer" highContrast>
              Xem lịch sử in
            </Button>
            <Button variant="solid" className="cursor-pointer" highContrast>
              Mua thêm giấy in
            </Button>
          </div>

          <div className=""></div>
        </div>
      </div>
      <div className="font-medium text-sm rounded border mt-5">
        <Table.Root className="overflow-auto">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>Trạng thái</span>
                  <CaretSortIcon className="w-4 h-4" />
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>Thời gian</span>
                  <CaretSortIcon className="w-4 h-4" />
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>Tên file</span>
                  <CaretSortIcon className="w-4 h-4" />
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>In tại toà</span>
                  <CaretSortIcon className="w-4 h-4" />
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>Số trang</span>
                  <CaretSortIcon className="w-4 h-4" />
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>Số bản sao</span>
                  <CaretSortIcon className="w-4 h-4" />
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>Kích thước</span>
                  <CaretSortIcon className="w-4 h-4" />
                </div>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>In trang</span>
                  <CaretSortIcon className="w-4 h-4" />
                </div>
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <div className="flex items-center gap-2 w-full h-full">
                  <div className="bg-green-400 rounded-full w-4 h-4"></div>
                  <span className="text-sm font-medium text-green-400">
                    In Thành công
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>Hôm nay, 9 giờ 20 phút</Table.Cell>
              <Table.Cell>Đồ án.pdf</Table.Cell>
              <Table.Cell>Dĩ an: H6 Lầu 3</Table.Cell>
              <Table.Cell>24 Trang</Table.Cell>
              <Table.Cell>1 bản sao</Table.Cell>
              <Table.Cell>A4</Table.Cell>
              <Table.Cell>Tất cả</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <div className="flex items-center gap-2 w-full h-full">
                  <div className="bg-green-400 rounded-full w-4 h-4"></div>
                  <span className="text-sm font-medium text-green-400">
                    In Thành công
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>Hôm nay, 11 giờ 20 phút</Table.Cell>
              <Table.Cell>Luận văn.pdf</Table.Cell>
              <Table.Cell>Dĩ an: H1 Lầu 1</Table.Cell>
              <Table.Cell>60 Trang</Table.Cell>
              <Table.Cell>1 bản sao</Table.Cell>
              <Table.Cell>A4</Table.Cell>
              <Table.Cell>Tất cả</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <div className="flex items-center gap-2 w-full h-full">
                  <ArrowPathIcon className="w-4 h-4 animate-spin text-[#FFA500]" />
                  {/* <div className="bg-green-400 rounded-full w-4 h-4"></div> */}
                  <span className="text-sm font-medium text-[#FFA500]">
                    Đang được in
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>Hôm nay, 12 giờ 10 phút</Table.Cell>
              <Table.Cell>BTL Triết Học.docx</Table.Cell>
              <Table.Cell>Dĩ an: H1 Lầu 1</Table.Cell>
              <Table.Cell>100 Trang</Table.Cell>
              <Table.Cell>4 bản sao</Table.Cell>
              <Table.Cell>A4</Table.Cell>
              <Table.Cell>Tất cả</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <div className="flex items-center gap-2 w-full h-full">
                  <div className="bg-yellow-400 rounded-full w-4 h-4"></div>
                  <span className="text-sm font-medium text-yellow-400">
                    Trong hàng chờ
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>Hôm nay, 12 giờ 20 phút</Table.Cell>
              <Table.Cell>BTL Giải Tích 2.pdf</Table.Cell>
              <Table.Cell>Lý thường kiệt: C6 Lầu 1</Table.Cell>
              <Table.Cell>10 Trang</Table.Cell>
              <Table.Cell>2 bản sao</Table.Cell>
              <Table.Cell>A3</Table.Cell>
              <Table.Cell>Chỉ in trang lẻ</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <div className="flex items-center gap-2 w-full h-full">
                  <div className="bg-red-400 rounded-full w-4 h-4"></div>
                  <span className="text-sm font-medium text-red-400">
                    In bị lỗi
                  </span>
                </div>
              </Table.Cell>
              <Table.Cell>2 ngày trước, 9 giờ 10 phút</Table.Cell>
              <Table.Cell>BTL Giải Tích 1.pdf</Table.Cell>
              <Table.Cell>Lý thường kiệt: C6 Lầu 5</Table.Cell>
              <Table.Cell>40 Trang</Table.Cell>
              <Table.Cell>2 bản sao</Table.Cell>
              <Table.Cell>A4</Table.Cell>
              <Table.Cell>Chỉ in trang chẵn</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>

      <div className="flex items-center justify-end mt-5 w-full h-fit">
        <div className="flex items-center justify-center gap-5">
          <span className="font-medium text-base">Trang 1 trên 10</span>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <IconButton variant="solid" highContrast>
                <DoubleArrowLeftIcon width="20" height="18" />
              </IconButton>
              <IconButton variant="solid" highContrast>
                <ChevronLeftIcon width="20" height="18" />
              </IconButton>
            </div>

            <div className="flex items-center gap-2">
              <IconButton variant="solid" highContrast>
                <ChevronRightIcon width="20" height="18" />
              </IconButton>
              <IconButton variant="solid" highContrast>
                <DoubleArrowRightIcon width="20" height="18" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTable;
