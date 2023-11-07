import Image from "next/image";
import logo from "../../../../public/logo-2.png";
import Link from "next/link";
import { useState } from "react";
import { UserOutlined, SettingOutlined, HomeOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

const DesktopScreenNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <div className="hidden lg:block">
      <div className=" container mx-auto flex justify-between items-center py-4  ">
        <div className="flex items-center gap-1">
          <Image src={logo} width="50" height="50" alt="logo" />
          <h2 className="text-2xl  text-white">LAUNDRY HUB</h2>
        </div>
        <div className="flex justify-between items-center gap-5 text-lg">
          <Link
            className="flex items-center hover:text-amber-500 "
            href="/services"
          >
            {" "}
            <HomeOutlined /> HOME
          </Link>
          <Link
            className="flex items-center hover:text-amber-500 "
            href="/services"
          >
            {" "}
            <SettingOutlined className="animate-spin  " /> SERVICES
          </Link>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              onBlur={closeDropdown}
              className="hover:border-1 border-amber-200 flex items-center gap-2"
            >
              <Space wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Space>
            </button>
            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <h3 className="text-black text-center">Masum Rana</h3>
                  <button
                    className="block mx-auto px-10 py-2 text-sm text-gray-700 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    Profile
                  </button>
                  <button
                    className="block  mx-auto px-10 py-2 text-sm text-gray-700 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopScreenNavbar;
