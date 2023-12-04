import toast from "react-hot-toast";
import networkService from "../../../models/network-service";
import { Printer } from "../../../models/types";
import { Button, Flex, AlertDialog } from "@radix-ui/themes";

type AlertDeletePrintersProps = {
  printers: Printer[];
  handleClose: () => void;
};

const AlertDeletePrinters = (props: AlertDeletePrintersProps) => {
  const handleClick = async () => {
    const isSuccess = await networkService.deletePrinters(props.printers);

    if (isSuccess) {
      props.handleClose();
      toast.success("Xoá máy in thành công!");
    } else {
      toast.error("Xoá máy in thất bại!");
    }
  };

  return (
    <AlertDialog.Content style={{ maxWidth: 500 }}>
      <AlertDialog.Title>Xoá {props.printers.length} máy in.</AlertDialog.Title>
      <div className="flex flex-col gap-1">
        {props.printers.map((printer) => {
          return (
            <span className="font-medium text-sm">
              Xoá {printer.name} tại {printer.location.campus},{" toà "}
              {printer.location.building_name}, lầu {printer.location.floor}
              {", phòng "}
              {printer.location.room_code}.
            </span>
          );
        })}
      </div>

      <Flex gap="3" mt="4" justify="end">
        <AlertDialog.Cancel>
          <Button variant="soft" color="gray" onClick={props.handleClose}>
            Huỷ bỏ
          </Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Button variant="solid" color="red" onClick={handleClick}>
            Xoá
          </Button>
        </AlertDialog.Action>
      </Flex>
    </AlertDialog.Content>
  );
};

export default AlertDeletePrinters;
