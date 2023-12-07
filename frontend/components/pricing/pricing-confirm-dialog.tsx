import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { FC, useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { BACKEND_API } from "../../models/constant";
import toast from "react-hot-toast";

type PricingConfirmDialogProps = {
  title: string;
  quantityA4: number;
  quantityA3: number;
  handleClose: () => void;
};

const PricingConfirmDialog: FC<PricingConfirmDialogProps> = ({
  title,
  quantityA4,
  quantityA3,
  handleClose,
}) => {
  return (
    <Dialog.Content style={{ maxWidth: 500 }}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        Giao dịch được thực hiện thông qua Paypal.
      </Dialog.Description>
      <PayPalButton
        options={{
          clientId:
            "AUFNEiTg7SOYu9Op4J7DPrinYJe2D44E50oP5040j8WOdFyJjUxYck3Xka2Pfyvzp-9IzFinTOYSAv41",
        }}
        createOrder={(data, actions) => {
          return fetch(`${BACKEND_API}/api/payment/create-order/`, {
            method: "post",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({
              A4: quantityA4,
              A3: quantityA3,
            }),
          })
            .then((response) => response.json())
            .then((order) => {
              return order.id;
            });
        }}
        onApprove={(data, actions) => {
          let order_id = data.orderID;
          return fetch("http://localhost:8000/api/payment/capture-order/", {
            method: "post",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({
              intent: "CAPTURE",
              order_id: order_id,
            }),
          })
            .then((response) => response.json())
            .then((order_details) => {
              handleClose();

              setTimeout(() => {
                toast.success(`Giao dịch thành công, xin cảm ơn!`, {
                  duration: 5000,
                });
              }, 1000);
            })
            .catch((error) => {
              toast.error(`Có lỗi xảy ra: ${error}`, {
                duration: 5000,
              });
            });
        }}
      />
      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray" onClick={handleClose}>
            Huỷ bỏ
          </Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  );
};

export default PricingConfirmDialog;
