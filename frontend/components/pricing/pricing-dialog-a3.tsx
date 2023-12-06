import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { FC, useEffect, useState } from "react";
import PricingConfirmDialog from "./pricing-confirm-dialog";
import toast from "react-hot-toast";

const price = 480;

type PricingDialogA3Props = {
  handleClose: () => void;
};

const getTotal = (totalCost: number): string => {
  const total = totalCost.toString();
  let str = "";
  let cnt = 0;
  for (let i = total.length - 1; i >= 0; i--) {
    str = total[i] + str;
    cnt++;
    if (cnt === 3 && i !== 0) {
      str = "." + str;
      cnt = 0;
    }
  }
  return str;
};

const PricingDialogA3: FC<PricingDialogA3Props> = ({ handleClose }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setQuantity(1);
  }, []);

  return (
    <Dialog.Content style={{ maxWidth: 500 }}>
      <Dialog.Title>Mua giấy A3</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        Nhấn vào nút "Xác nhận mua" để mua giấy
      </Dialog.Description>
      <div className="flex flex-col">
        <div className="flex items-center justify-between w-full">
          <Text className="text-base font-medium">Số lượng giấy A3:</Text>
          <input
            type="number"
            className="h-10"
            value={quantity}
            onChange={(e) => {
              const newQuantity = Number(e.target.value);
              if (newQuantity >= 150 || newQuantity <= 0) {
                return;
              }

              setQuantity(newQuantity);
            }}
          />
        </div>

        <div className="flex items-center justify-between gap-3 w-full mt-4">
          <Text className="text-base font-medium">Giá 1 tờ A3:</Text>
          <Text className="text-base font-bold">{price} VNĐ</Text>
        </div>
        <div className="flex items-center justify-between gap-3 w-full mt-1">
          <div className="w-2/3 h-1"></div>
          <div className="w-1/3 h-[1px] bg-gray-400"></div>
        </div>

        <div className="flex items-center justify-between gap-3 w-full mt-3">
          <Text className="text-base font-medium">Tổng cộng:</Text>
          <Text className="text-base font-bold">
            {getTotal(price * quantity)} VNĐ
          </Text>
        </div>
      </div>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray" onClick={handleClose}>
            Huỷ bỏ
          </Button>
        </Dialog.Close>
        <Dialog.Root open={open}>
          <Dialog.Trigger>
            <Button
              onClick={() => {
                setOpen(true);
              }}
            >
              Mua {quantity} tờ A3
            </Button>
          </Dialog.Trigger>
          <PricingConfirmDialog
            title={`Xác nhận mua ${quantity} tờ A3`}
            quantityA3={quantity}
            quantityA4={0}
            handleClose={() => {
              setOpen(false);
              handleClose();
            }}
          />
        </Dialog.Root>
      </Flex>
    </Dialog.Content>
  );
};

export default PricingDialogA3;
