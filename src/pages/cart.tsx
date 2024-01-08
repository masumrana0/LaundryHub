import { Button, Dropdown } from "antd";
import { FaCartArrowDown } from "react-icons/fa6";
import type { MenuProps } from "antd";
const Cart = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  return (
    <div className="flex justify-center items-center  h-[100vh]">
      <Dropdown menu={{ items }} placement="bottom" arrow>
        <FaCartArrowDown className="text-5xl hover:text-green-400" />
      </Dropdown>
    </div>
  );
};

export default Cart;
