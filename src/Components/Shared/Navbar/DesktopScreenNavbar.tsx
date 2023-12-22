import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";

import { useState } from "react";
import { UserOutlined, SettingOutlined, HomeOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { isLoggedIn, logOut } from "@/services/auth.service";
import {
  FaRegBell,
  FaComments,
  FaQuestion,
  FaPhone,
  FaBloggerB,
} from "react-icons/fa6";

const DesktopScreenNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const isLoggedin = isLoggedIn();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
    console.log("hello");
  };

  const handleLogout = () => {
    logOut();
    setDropdownOpen(false);
  };

  // logOut();
  return (
    <div className="hidden lg:block container mx-auto px-10 bg-[#edfaff]">
      {/* <div className=" container mx-auto flex justify-between items-center py-4  ">
       
        <div className="flex justify-between items-center gap-5 text-lg">
        
          
        </div>
      </div> */}

      <div className=" border-b-2  py-3">
        <div className="flex justify-between">
          <div className="flex">
            <Link
              className="hover:text-green-600 transition-colors duration-300 flex items-center gap-2"
              href="/laundry"
            >
              <FaRegBell /> Get an Appointment
            </Link>
            <span className="border mx-5"></span>
            <Link
              className="hover:text-green-600 transition-colors duration-300 flex items-center gap-2"
              href="/contactus"
            >
              {" "}
              <FaComments />
              FeedBack
            </Link>
          </div>
          <div>
            <Link
              className="hover:text-green-600 transition-colors duration-300 flex items-center "
              href="/contactus"
            >
              <FaQuestion />
              Have any questions
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        {/* logo part  */}
        <div className="flex items-center gap-1  ">
          <Image src={logo} width="70" height="50" alt="logo" />
          <div>
            <h2 className="text-2xl font-bold ">
              <span className="text-green-400 tracking-wide">LAUNDRY</span> HUB
            </h2>
            <span className="text-gray-500  tracking-tight ">
              WE CLEAN EVERYTHING
            </span>
          </div>
        </div>

        {/* navigation part  */}
        <div className="flex gap-8">
          <Link
            className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
            href="/"
          >
            <span>
              <HomeOutlined />
            </span>
            HOME
            <span className="absolute bottom-0 top-6 left-0 w-full h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>
          <Link
            className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
            href="/"
          >
            <span>
              <SettingOutlined className="animate-spin  " />
            </span>
            SERVICES
            <span className="absolute bottom-0 top-6 left-0 w-full h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>

          <Link
            className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
            href="/"
          >
            <span>{/* <FaBloggerB /> */}</span>
            LAUNDRY
            <span className="absolute bottom-0 top-6 left-0 w-full h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>

          <Link
            className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
            href="/"
          >
            <span>
              <FaBloggerB />
            </span>
            ABOUT
            <span className="absolute bottom-0 top-6 left-0 w-full h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>

          <Link
            className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
            href="/"
          >
            <span>
              <FaPhone />
            </span>
            CONTACT
            <span className="absolute bottom-0 top-6 left-0 w-full h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>

          {/*  
          
           
          <Link
            className="flex items-center text-md  hover:text-green-400 font-semibold transition-colors duration-300 "
            href="/laundry"
            scroll={false}
          >
            {" "}
            <FaPhone /> CONTACT
          </Link> */}
        </div>

        {/* login part  / Avatar part */}
        <div>
          {isLoggedIn() ? (
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                // onBlur={closeDropdown}
                className="hover:border-1 border-amber-200 flex items-center gap-2"
              >
                <Space wrap size={16}>
                  <Avatar size="large" icon={<UserOutlined />} />
                </Space>
              </button>
              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-10 z-10">
                  <div className="py-1">
                    <h3 className="text-black text-center">Masum Rana</h3>
                    <button className="block mx-auto px-10 py-2 text-sm text-gray-700 hover:bg-gray-200">
                      Profile
                    </button>

                    <button
                      className="block    mx-auto px-10 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button className="rounded px-5 py-2 shadow-lg font-semibold bg-green-300 transition-colors duration-300 hover:bg-green-500 hover:text-white text-gray-600">
              <Link href="/login" scroll={false}>
                LOGIN
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopScreenNavbar;
