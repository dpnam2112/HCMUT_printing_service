import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const PricingDialogA4 = () => {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setQuantity(1);
  }, []);

  return (
    <Dialog.Content style={{ maxWidth: 500 }}>
      <Dialog.Title>Mua giấy A4</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        Nhấn vào nút "Xác nhận mua" để mua giấy
      </Dialog.Description>
      <div className="flex flex-col">
        <div className="flex items-center justify-between w-full">
          <Text className="text-base font-medium">Số lượng giấy A4:</Text>
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
          <Text className="text-base font-medium">Giá 1 tờ A4:</Text>
          <Text className="text-base font-bold">600 VNĐ</Text>
        </div>
        <div className="flex items-center justify-between gap-3 w-full mt-1">
          <div className="w-2/3 h-1"></div>
          <div className="w-1/3 h-[1px] bg-gray-400"></div>
        </div>

        <div className="flex items-center justify-between gap-3 w-full mt-3">
          <Text className="text-base font-medium">Tổng cộng:</Text>
          <Text className="text-base font-bold">{600 * quantity} VNĐ</Text>
        </div>
      </div>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Huỷ bỏ
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button onClick={() => {}}>Xác nhận mua {quantity} tờ A4</Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  );
};

export default PricingDialogA4;
