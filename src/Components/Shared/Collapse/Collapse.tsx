import type { CollapseProps } from "antd";
import { Collapse } from "antd";

interface UseCollapseProps {
  items: CollapseProps["items"];
}

const UseCollapse = ({ items }: UseCollapseProps) => {
  return (
    <div className="container">
      <Collapse items={items} defaultActiveKey={["1"]} />;
    </div>
  );
};

export default UseCollapse;
