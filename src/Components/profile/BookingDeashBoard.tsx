import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import DashBoardDataItem from "./BookingDashBoardItem";
import UseCollapse from "../Shared/Collapse/Collapse";

const BookingDeashBoard = () => {
  return (
    <div className="container">
      <UseCollapse items={DashBoardDataItem} />
    </div>
  );
};

export default BookingDeashBoard;
