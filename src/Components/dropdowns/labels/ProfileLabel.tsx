import { logOut } from "@/services/auth.service";
import { Divider } from "antd";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Cart from "@/Components/Cart/Cart";

const ProfileLabel = () => {
  const handleSelectClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Stop the click event propagation to prevent the dropdown from closing
    e.stopPropagation();
  };

  const handleLogout = () => {
    logOut();
    console.log("hello");
  };

  return (
    <div className="lg:w-40 w-32   rounded-md p-3 " onClick={handleSelectClick}>
      <div className="flex flex-col text-sm">
        {/* Theme  */}
        {/* <div>
          <div className="hover:bg-slate-100 p-2 rounded-md cursor-pointer flex justify-between items-center gap-4 ">
            <p className="text-sm">Theme</p>
            <DarkmodeToggle />
          </div>
          <Divider className="my-2" />
        </div> */}
        {/* Profile  */}
        <div>
          <div className="flex hover:bg-slate-100 hover:text-green-400 p-2 rounded-md cursor-pointer items-center gap-2">
            <CgProfile className="" />
            <Link href="/profile" className="text-sm hover:text-green-400 ">
              Profile
            </Link>
          </div>
          <Divider className="my-2" />
        </div>
        {/* Setting */}
        <div>
          <div className="flex hover:bg-slate-100 hover:text-green-400 p-2 rounded-md cursor-pointer items-center gap-2">
            {" "}
            <Cart />
            {/* <Link href="/setting" className="text-sm hover:text-green-400">
               
            </Link> */}
            <button>Cart</button>
          </div>
          <Divider className="my-2" />
        </div>
        <div>
          <div className="flex hover:bg-slate-100 hover:text-green-400 p-2 rounded-md cursor-pointer items-center gap-2">
            <IoSettings className="" />
            <Link href="/setting" className="text-sm hover:text-green-400">
              Setting
            </Link>
          </div>
          <Divider className="my-2" />
        </div>

        {/* Help */}
        {/* <div>
          <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
            <IoMdHelpBuoy className="text-xl" />
            <Link href="/help" className="text-sm">
              Help
            </Link>
          </div>
          <Divider className="my-2" />
        </div> */}
        {/* Logout */}
        <div>
          <div className="flex hover:bg-slate-100 p-2 hover:text-green-400 rounded-md cursor-pointer  items-center gap-2">
            <FaArrowRightFromBracket className="text-md" />
            <button
              onClick={() => logOut()}
              className="text-sm hover:text-red-400"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLabel;
