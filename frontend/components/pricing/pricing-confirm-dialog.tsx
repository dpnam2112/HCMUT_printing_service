import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { BACKEND_API } from "../../models/constant";

const clientID = `AUFNEiTg7SOYu9Op4J7DPrinYJe2D44E50oP5040j8WOdFyJjUxYck3Xka2Pfyvzp-9IzFinTOYSAv41`;

type Props = {};

const PricingConfirmDialog = ({}: Props) => {
  const orderPrice = 10;
  const userID = 1;

  function createOrder() {
    return fetch(`${BACKEND_API}/api/payment/create-order/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product ids and quantities
      body: JSON.stringify({
        A0: 1,
        A1: 2,
        A2: 3,
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  }

  function onApprove(data) {
    return fetch(`${BACKEND_API}/api/payment/capture-order/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => response.json())
      .then((orderData) => {
        const name = orderData.payer.name.given_name;
        alert(`Transaction completed by ${name}`);
      });
  }

  return (
    <Dialog.Content style={{ maxWidth: 500 }}>
      <PayPalScriptProvider options={{ clientId: clientID }}>
        <Dialog.Title>Mua giấy A3</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Nhấn vào nút "Xác nhận mua" để mua giấy
        </Dialog.Description>

        <PayPalButtons createOrder={createOrder} onApprove={onApprove} />

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Huỷ bỏ
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            {/* <Button onClick={() => {}}>Xác nhận mua {quantity} tờ A3</Button> */}
          </Dialog.Close>
        </Flex>
      </PayPalScriptProvider>
    </Dialog.Content>
  );
};

export default PricingConfirmDialog;
