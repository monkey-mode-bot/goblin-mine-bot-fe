"use client";

import { NextUIProvider } from "@nextui-org/react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <TonConnectUIProvider manifestUrl="manifest.json">
        {children}
      </TonConnectUIProvider>
    </NextUIProvider>
  );
}
