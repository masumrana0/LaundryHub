// essential imports
import { type MenuProps } from "antd";
import Link from "next/link";
import Cart from "@/Components/Cart/Cart";
import { logOut } from "@/Redux/features/auth/authSlice";
// icons
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useAppDispatch } from "@/Redux/hook";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="w-[100px] lg:w-[200px] flex hover:bg-slate-100 hover:text-green-400 p-2 rounded-md cursor-pointer items-center gap-2">
      <CgProfile className="" />
      <Link href="/profile" className="text-sm hover:text-green-400 ">
        Profile
      </Link>
    </div>
  );
};

const SettingItem = () => {
  return (
    <div className="w-full flex hover:bg-slate-100 hover:text-green-400 p-2 rounded-md cursor-pointer items-center gap-2">
      <IoSettings className="" />
      <Link href="/setting" className="text-sm hover:text-green-400">
        Setting
      </Link>
    </div>
  );
};

const CartItem = () => {
  return (
    <div className="flex hover:bg-slate-100 hover:text-green-400 p-2 rounded-md cursor-pointer items-center gap-2">
      {" "}
      <Cart />
      {/* <Link href="/setting" className="text-sm hover:text-green-400">
               
            </Link> */}
      <button>Cart</button>
    </div>
  );
};

const LogoutItem = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex hover:bg-slate-100 p-2 hover:text-green-400 rounded-md cursor-pointer  items-center gap-2">
      <FaArrowRightFromBracket className="text-md" />
      <button
        onClick={() => dispatch(logOut())}
        className="text-sm hover:text-red-400"
      >
        Logout
      </button>
    </div>
  );
};

export const profileItems: MenuProps["items"] = [
  {
    key: 1,
    label: <Profile />,
  },
  {
    key: 2,
    label: <CartItem />,
  },
  {
    key: 3,
    label: <SettingItem />,
  },
  {
    key: 4,
    label: <LogoutItem />,
  },
];
