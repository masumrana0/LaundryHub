import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import DashBoardDataItem from "./BookingDashBoardItem";

const BookingDeashBoard = () => {
  return (
    <div className="container">
      <Collapse items={DashBoardDataItem} defaultActiveKey={["1"]} />;
    </div>
  );
};

export default BookingDeashBoard;
