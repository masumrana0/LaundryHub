import { logOut } from "@/services/auth.service";
import type { MenuProps } from "antd";
import Link from "next/link";

const handleLogout = () => {
  logOut();
};
interface IName {
  firstName: string;
  lastName?: string;
}

interface IMenuItem {
  key: string;
  label: JSX.Element;
}

export const profileMenu = (name: IName): MenuProps["items"] => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <h2 className="text-2xl font-bold">
          {name?.firstName} + " "+{name?.lastName}
        </h2>
      ),
    },
    {
      key: "2",
      label: <Link href="/profile">Profile</Link>,
    },
    {
      key: "3",
      label: <Link href="/bookinghistory">Bookings History</Link>,
    },
    {
      key: "4",
      label: <button onClick={handleLogout}>Logout</button>,
    },
  ];

  return items;
};

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/profile">Profile</Link>,
  },
  {
    key: "2",
    label: <Link href="/bookinghistory">Bookings History</Link>,
  },
  {
    key: "3",
    label: <button onClick={handleLogout}>Logout</button>,
  },
];
