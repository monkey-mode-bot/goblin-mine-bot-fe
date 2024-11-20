"use client";

import { NextUIProvider } from "@nextui-org/react";
import Script from "next/script";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      ></Script>
      {/* <TonConnectUIProvider manifestUrl="manifest.json"> */}
      {children}
      {/* </TonConnectUIProvider> */}
    </NextUIProvider>
  );
}
