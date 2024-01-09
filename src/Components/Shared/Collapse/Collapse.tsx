import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const BookingDeashBoard = (items: CollapseProps["items"]) => {
  return (
    <div className="container">
      <Collapse items={items} defaultActiveKey={["1"]} />;
    </div>
  );
};

export default BookingDeashBoard;
