import Image from "next/image";

import Link from "next/link";
import { useState } from "react";
import {
  UserOutlined,
  SettingOutlined,
  HomeOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import { FaBloggerB, FaComments, FaPhone, FaRegBell } from "react-icons/fa6";
import Cart from "@/Components/Cart/Cart";
import { BsList, BsXLg } from "react-icons/bs";
import logo from "/public/logo.png";
import { isLoggedIn } from "@/services/auth.service";
import { profileItems } from "@/Components/dropdowns/Items/ProfileItems";

const MobileScreenNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full px-3 py-2  bg-slate-200 relative">
      {/* upper part  */}
      <div className="  flex justify-between items-center">
        {/* logo part  */}
        <div className="flex items-center gap-1  ">
          <Image src={logo} width="50" height="50" alt="logo" />
          <div>
            <h2 className="text-md font-bold ">
              <span className="text-green-400 tracking-wide">LAUNDRY</span> HUB
            </h2>
            <span className="text-gray-500 font-thin  ">
              We Clean Everything
            </span>
          </div>
        </div>

        {/* Dropdown toogle button */}
        <div className="text-3xl transition-all duration-300">
          <button
            
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            {isDropdownOpen ? <BsXLg /> : <BsList />}
          </button>
        </div>
      </div>
      {/* <hr className="mt-3" /> */}
      <div className="  relative      ">
        {isDropdownOpen && (
          <div className="w-full transition-transform duration-300  p-5  flex justify-between  absolute top-0  left-0 right-0   bg-slate-200 z-50  ">
            {/* navigation part */}
            <div className="mt-5 flex flex-col gap-3">
              <div className="w-full flex justify-between  ">
                <Link
                  className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
                  href="/"
                >
                  <span>
                    <HomeOutlined />
                  </span>
                  HOME
                  <span className="absolute bottom-0 top-6 left-0 w-[70px] h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
                </Link>
              </div>
              <Link
                className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
                href="/service"
              >
                <span>
                  <SettingOutlined className="animate-spin  " />
                </span>
                SERVICES
                <span className="absolute bottom-0 top-6 left-0 w-[85px] h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
              </Link>

              <Link
                className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
                href="/laundry"
              >
                <span>{/* <FaBloggerB /> */}</span>
                LAUNDRY
                <span className="absolute bottom-0 top-6 left-0 w-[75px] h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
              </Link>

              <Link
                className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
                href="/about"
              >
                <span>
                  <FaBloggerB />
                </span>
                ABOUT
                <span className="absolute bottom-0 top-6 left-0 w-[75px] h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
              </Link>

              <Link
                className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
                href="/feedback"
              >
                <span>
                  <FaPhone />
                </span>
                CONTACT
                <span className="absolute bottom-0 top-6 left-0 w-[88px] h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
              </Link>
            </div>

            {/* login part  / Avatar part */}
            <div className=" mt-2 ">
              {isLoggedIn() ? (
                <div className="relative inline-block text-left">
                  <Dropdown menu={{ items: profileItems }} placement="bottom">
                    <button>
                      <Space wrap size={16}>
                        <Avatar size="large" icon={<UserOutlined />} />
                      </Space>
                    </button>
                  </Dropdown>
                </div>
              ) : (
                <button className="rounded px-3 py-2 shadow-lg font-semibold bg-green-300 transition-colors duration-300 hover:bg-green-500 hover:text-white text-gray-600">
                  <Link href="/auth" scroll={false}>
                    Account
                  </Link>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileScreenNavbar;
