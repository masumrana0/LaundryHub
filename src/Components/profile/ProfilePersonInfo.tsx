import Image from "next/image";
import infoimg from "/public/profile/info.png";
import UploadProfilePicture from "./ProfilePicUpload";
import { FaPencil } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { changeProfileUiSection } from "@/Redux/features/profile/profileSlice";
import FullName from "../Shared/FullName";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Shared/Loading";

const ProfilePersonInfo = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile.profile);
  useEffect(() => {
    if (profile) {
      setLoading(false);
    }
  }, [profile]);
  return (
    <div>
      {isLoading ? (
        <div className="h-screen">
          <LoadingSpinner size="regular" />
        </div>
      ) : (
        <div className="lg:container mx-auto md:mt-5 mt-10">
          {/*  */}
          <div>
            <div className="flex justify-center items-center flex-col gap-1  ">
              <h2 className="text-3xl font-bold  ">Personal Info</h2>
              <p className="text-gray-500 text-center">
                Info About you and your preferennnnces aross Laundry Services
              </p>
            </div>
            <div className="container mx-auto md:flex justify-center items-center mt-5 hidden">
              <div className="w-[37%]">
                <h2 className="lg:text-2xl  font-bold mb-2">
                  Your profile info in Laundry services
                </h2>
                <p className="text-gray-500">
                  Personal info and options to manage it. You can make some of
                  this info, like your contact details, visible to others so
                  that they can reach you easily. You can also see a summary of
                  your profiles.
                </p>
              </div>
              <Image src={infoimg} width={500} alt="info img" />
            </div>
          </div>
          <div className=" mt-8   border-2 shadow lg:w-[80%]   mx-auto rounded-xl ">
            <h2 className="font-bold text-2xl p-5 ">Basic Info</h2>

            {/*  */}
            <div className="lg:p-10 p-2">
              {/* profile picture */}
              <div className="flex justify-between items-center border-b-2 ">
                <p className="font-semibold text-xl ">Profile picture</p>
                <div className="flex  items-center  gap-10  ">
                  <p className="flex-shrink-0 text-lg font-thin  hidden lg:block">
                    A profile picture helps personalize your account
                  </p>

                  <UploadProfilePicture />
                </div>
              </div>

              {/* name section */}
              <div className="flex justify-between items-center border-b-2 shadow py-5">
                <p className="font-semibold md:text-xl text-sm ">Your Name</p>
                <div className="flex  items-center gap-2 sm:gap-8  ">
                  <p className="flex-shrink-0 md:text-lg text-sm font-bold ">
                    <FullName name={profile?.name} />
                  </p>

                  <button onClick={() => dispatch(changeProfileUiSection(11))}>
                    <FaPencil />
                  </button>
                </div>
              </div>

              {/* Email section */}
              <div className="flex justify-between items-center border-b-2 shadow py-5">
                <p className="font-semibold text-sm  md:text-xl  ">
                  Your Email
                </p>
                <div className="flex  items-center  gap-2 sm:gap-8  ">
                  <p className="flex-shrink-0 md:text-lg text-sm font-bold ">
                    {profile?.email}
                  </p>

                  <button onClick={() => dispatch(changeProfileUiSection(22))}>
                    <FaPencil />
                  </button>
                </div>
              </div>

              {/* PhoneNumber section */}
              <div className="flex justify-between items-center border-b-2 shadow py-5">
                <p className="font-semibold md:text-xl  text-sm">
                  Your Phone Number
                </p>
                <div className="flex  items-center  gap-2 sm:gap-8  ">
                  <p className="flex-shrink-0 md:text-lg text-sm font-bold   ">
                    {" "}
                    +88{profile?.phoneNumber}
                  </p>

                  <button onClick={() => dispatch(changeProfileUiSection(33))}>
                    <FaPencil />
                  </button>
                </div>
              </div>

              {/*  Password section */}
              <div className="flex justify-between items-center border-b-2 shadow py-5">
                <p className="font-semibold md:text-xl text-sm "> Password</p>
                <div className="flex  items-center  gap-2 sm:gap-8  ">
                  <p className="flex-shrink-0 md:text-lg text-sm font-bold ">
                    Change Password
                  </p>

                  <button onClick={() => dispatch(changeProfileUiSection(44))}>
                    <FaPencil />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePersonInfo;
