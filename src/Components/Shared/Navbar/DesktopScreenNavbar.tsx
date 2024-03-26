import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import { UserOutlined, SettingOutlined, HomeOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { Dropdown } from "antd";
import { FaRegBell, FaComments, FaPhone, FaBloggerB } from "react-icons/fa6";
import Cart from "@/Components/Cart/Cart";
import { profileItems } from "@/Components/dropdowns/Items/ProfileItems";
import { useAppSelector } from "@/Redux/hook";
import { selectIsLoggedIn } from "@/Redux/features/auth/authSlice";

const DesktopScreenNavbar = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <div className="container mx-auto  bg-slate-100   ">
      <div className=" border-b-2  py-3">
        <div className="flex justify-between   p-3  px-4 rounded text-gray-800">
          <div className="flex  ">
            <Link
              className="hover:text-green-600 transition-colors duration-300 flex items-center gap-2"
              href="/laundry"
            >
              <FaRegBell /> Get an Appointment
            </Link>
            <span className="border mx-5"></span>
            <Link
              className="hover:text-green-600 transition-colors duration-300 flex items-center gap-2"
              href="/feedback"
            >
              {" "}
              <FaComments />
              FeedBack
            </Link>
          </div>

          <div>
            <Cart />
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center  p-4">
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
            href="/service"
          >
            <span>
              <SettingOutlined className="animate-spin  " />
            </span>
            SERVICES
            <span className="absolute bottom-0 top-6 left-0 w-full h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>

          <Link
            className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
            href="/laundry"
          >
            <span>{/* <FaBloggerB /> */}</span>
            LAUNDRY
            <span className="absolute bottom-0 top-6 left-0 w-full h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>

          <Link
            className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
            href="/about"
          >
            <span>
              <FaBloggerB />
            </span>
            ABOUT
            <span className="absolute bottom-0 top-6 left-0 w-full h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>

          <Link
            className="relative flex items-center gap-0.5  text-md font-semibold transition-all duration-300 group"
            href="/feedback"
          >
            <span>
              <FaPhone />
            </span>
            CONTACT
            <span className="absolute bottom-0 top-6 left-0 w-full h-1 bg-green-400 transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
          </Link>
        </div>

        {/* login part  / Avatar part */}
        <div>
          {isLoggedIn ? (
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
            <button className="rounded px-5 py-2 shadow-lg font-semibold bg-green-300 transition-colors duration-300 hover:bg-green-500 hover:text-white text-gray-600">
              <Link href="/auth" scroll={false}>
                Account
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopScreenNavbar;
