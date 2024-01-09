import { IBooking } from "@/Interface/booking";
import { CollapseProps } from "antd";
import DashboardLabel from "./DashBoradLabel";
import DashBoardItemChildren from "./DashBoardItemChildren";

const DashBoardDataItem: CollapseProps["items"] = [
  {
    key: "1",
    label: <DashboardLabel />,
    children: <DashBoardItemChildren />,
  },
];

export default DashBoardDataItem;
