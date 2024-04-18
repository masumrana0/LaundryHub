import { Divider } from "antd";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Cart from "@/Components/Cart/Cart";
import { useAppDispatch } from "@/Redux/hook";
import { logOut } from "@/Redux/features/auth/authSlice";

const ProfileLabel = () => {
  const handleSelectClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Stop the click event propagation to prevent the dropdown from closing
    e.stopPropagation();
  };

  const dispatch = useAppDispatch();

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

        {/* Setting */}

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
      </div>
    </div>
  );
};

export default ProfileLabel;
