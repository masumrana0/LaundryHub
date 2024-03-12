import { logOut } from "@/services/auth.service";
import type { MenuProps } from "antd";
import ProfileLabel from "../labels/ProfileLabel";

export const profileItems: MenuProps["items"] = [
  {
    key: "1",
    label: <ProfileLabel />,
  },
];
