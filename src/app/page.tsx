"use client";

import { Button, Card, CardBody, CardHeader, Spacer } from "@nextui-org/react";
import { useTonConnectUI } from "@tonconnect/ui-react";

export default function Home() {
  const [tonConnectUI] = useTonConnectUI();

  return (
    <div className="flex flex-col items-center justify-center h-screen px-5 py-10">
      <Card>
        <CardHeader>
          <h3>TON Space Payment</h3>
        </CardHeader>
        <CardBody>
          <h5>
            Click the button below to initiate your payment with TON Space.
          </h5>
          <Spacer y={1.5} />
          <Button
            size="lg"
            color="primary"
            onClick={() => tonConnectUI.openModal()}
          >
            Pay with TON Space
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
