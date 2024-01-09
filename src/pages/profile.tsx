import Link from "next/link";
import {
  FaClipboard,
  FaLock,
  FaRegCircleUser,
  FaUserGear,
} from "react-icons/fa6";
import HomeProfile from "@/Components/profile/HomeProfile";
import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import { useState } from "react";
import ProfilePersonInfo from "@/Components/profile/ProfilePersonInfo";
import ChangeName from "@/Components/profile/ChangeNam";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { changeProfileUiSection } from "@/Redux/features/profile/profileSlice";

const Profile = () => {
  const dispatch = useAppDispatch();
  const profileUiSectionNo = useAppSelector(
    (state) => state.profile.profileSectionNo
  );
  return (
    <div>
      <Navbar />
      <div className=" flex ">
        <div className="w-[15%] flex flex-col mt-8">
          <button
            onClick={() => dispatch(changeProfileUiSection(1))}
            className={`${
              profileUiSectionNo == 1 && " bg-green-200"
            }  rounded-e-2xl p-3 text-xl text-semibold flex justify-start items-center gap-1.5`}
          >
            {" "}
            <FaRegCircleUser />
            Profile Home
          </button>

          <button
            onClick={() => dispatch(changeProfileUiSection(2))}
            className={`${
              profileUiSectionNo == 2 && "bg-green-200 "
            } rounded-e-2xl p-3 text-xl text-semibold flex justify-start items-center gap-1.5`}
          >
            {" "}
            <FaUserGear />
            Personal Info
          </button>

          <button
            onClick={() => dispatch(changeProfileUiSection(3))}
            className={`${
              profileUiSectionNo == 3 && "bg-green-200"
            }  rounded-e-2xl p-3 text-xl text-semibold flex justify-start items-center gap-1.5`}
          >
            {" "}
            <FaClipboard />
            Booking DashBoard
          </button>

          <button
            onClick={() => dispatch(changeProfileUiSection(4))}
            className={`${
              profileUiSectionNo == 4 && "bg-green-200"
            } rounded-e-2xl p-3 text-xl text-semibold flex justify-start items-center gap-1.5`}
          >
            {" "}
            <FaLock />
            Security
          </button>
        </div>
        <div className=" w-[80%]   mt-10">
          {profileUiSectionNo == 1 && <HomeProfile />}
          {profileUiSectionNo == 2 && <ProfilePersonInfo />}
          {profileUiSectionNo == 1 && <ChangeName />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
