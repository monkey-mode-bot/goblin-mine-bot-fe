"use client";

import TabsComponent from "@/components/Tabs";

export default function Home() {
  // const [tonConnectUI] = useTonConnectUI();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const webApp = window.Telegram?.WebApp;

  //   if (webApp) {
  //     webApp.ready();
  //   } else {
  //     console.log("not ready");
  //   }
  //   webApp?.expand();
  //   setIsLoading(true);
  // }, []);

  return (
    <>
      {/* {isLoading ? ( */}
      <>
        {/* <div className="flex flex-col items-center justify-center h-fit w-screen px-5 py-10">
          <NotificationSettings />
        </div> */}
        <div className="flex flex-col items-center justify-center h-fit w-screen px-5 py-10">
          <TabsComponent />
        </div>
      </>
    </>
  );
}
