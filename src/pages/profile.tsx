import {
  FaClipboard,
  FaLock,
  FaRegCircleUser,
  FaUserGear,
} from "react-icons/fa6";
import HomeProfile from "@/Components/profile/HomeProfile";
import { ReactElement, use, useState } from "react";
import ProfilePersonInfo from "@/Components/profile/ProfilePersonInfo";
import ChangeName from "@/Components/profile/ChangeNam";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import {
  changeProfileUiSection,
  setProfile,
} from "@/Redux/features/profile/profileSlice";
import RootLayout from "@/Components/Layout/RootLayout";
import { useGetProfileQuery } from "@/Redux/api/profileApi";

const Profile = () => {
  // redux
  const dispatch = useAppDispatch();
  const profileUiSectionNo = useAppSelector(
    (state) => state.profile.profileSectionNo
  );
  const { data } = useGetProfileQuery(null);

  if (data?.statusCode == 200) {
    const user = data?.data;
    dispatch(setProfile(user));
  }

  return (
    <div>
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
          <div>
            <div>{profileUiSectionNo == 11 && <ChangeName />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
