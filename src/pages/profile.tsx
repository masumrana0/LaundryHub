import { FaClipboard, FaRegCircleUser, FaUserGear } from "react-icons/fa6";
import HomeProfile from "@/Components/profile/HomeProfile";
import { ReactElement, use, useEffect, useState } from "react";
import ProfilePersonInfo from "@/Components/profile/ProfilePersonInfo";
import ChangeName from "@/Components/profile/ChangeNam";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import {
  changeProfileUiSection,
  setProfile,
} from "@/Redux/features/profile/profileSlice";
import RootLayout from "@/Components/Layout/RootLayout";
import { useGetProfileQuery } from "@/Redux/api/profileApi";
import ChangeEmail from "@/Components/profile/ChangeEmail";
import ChangePhoneNumber from "@/Components/profile/ChangeNumber";
import ChangePassword from "@/Components/profile/ChangePassoword";
import BookingDeashBoard from "@/Components/profile/BookingDeashBoard";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { IUser } from "@/Interface/user";

const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    const isLogged = isLoggedIn();
    if (!isLogged) {
      router.push("/auth");
    }
  }, [router]);

  // redux
  const dispatch = useAppDispatch();
  const profileUiSectionNo = useAppSelector(
    (state) => state.profile.profileSectionNo
  );
  const { data } = useGetProfileQuery(null);

  if (data) {
    const user = data;
    dispatch(setProfile(user as any));
  }

  return (
    <div>
      <div className="w-full  md:hidden flex    absolute  py-5 ">
        <button
          onClick={() => dispatch(changeProfileUiSection(1))}
          className={`${
            profileUiSectionNo == 1 && " bg-green-200"
          }  rounded-2xl px-2 py-1 text-[10px] text-semibold flex justify-start items-center gap-1.5 `}
        >
          {" "}
          <FaRegCircleUser />
          Profile Home
        </button>

        <button
          onClick={() => dispatch(changeProfileUiSection(2))}
          className={`${
            profileUiSectionNo == 2 && "bg-green-200 "
          } rounded-2xl px-2 py-1 text-[10px] lg:text-xl text-semibold flex justify-start items-center gap-1.5`}
        >
          {" "}
          <FaUserGear />
          Personal Info
        </button>

        <button
          onClick={() => dispatch(changeProfileUiSection(3))}
          className={`${
            profileUiSectionNo == 3 && "bg-green-200"
          }  rounded-2xl px-2 py-1  text-[10px] lg:text-xl text-semibold flex justify-start items-center gap-1.5`}
        >
          {" "}
          <FaClipboard />
          Booking DashBoard
        </button>
      </div>
      <div className=" flex ">
        {/* profile page navigation bar  */}
        <div className="w-[15%] lg:flex  flex-col mt-8 hidden  ">
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
        </div>
        {/* conditional rendering contents /pages */}
        <div className=" flex justify-center items-center w-full px-5 md:px-0 my-10  md:my-20">
          {profileUiSectionNo == 1 && <HomeProfile />}
          {profileUiSectionNo == 2 && <ProfilePersonInfo />}
          {profileUiSectionNo == 3 && <BookingDeashBoard />}
          <div>
            <div>
              {profileUiSectionNo == 11 && <ChangeName />}
              {profileUiSectionNo == 22 && <ChangeEmail />}
              {profileUiSectionNo == 33 && <ChangePhoneNumber />}
              {profileUiSectionNo == 44 && <ChangePassword />}
            </div>
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
