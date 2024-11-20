"use client";

export default function User() {
  //   const [userData, setUserData] = useState<UserData | null>(null);
  const data = window.Telegram.WebApp.initDataUnsafe;

  return (
    <div>
      <h1>{data.user?.first_name}</h1>
      <h1>{data.user?.last_name}</h1>
      <h1>{data.user?.id}</h1>
      <h1>{data.user?.photo_url}</h1>
      <h1>{data.user?.language_code}</h1>
    </div>
  );
}
