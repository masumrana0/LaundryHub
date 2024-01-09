import Image from "next/image";
import infoimg from "/public/profile/info.png";
import UploadProfilePicture from "./ProfilePicUpload";
import { FaPencil } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { changeProfileUiSection } from "@/Redux/features/profile/profileSlice";
import FullName from "../Shared/FullName";

const ProfilePersonInfo = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile.profile);
  return (
    <div className="container">
      <div>
        <div className="flex justify-center items-center flex-col gap-1  ">
          <h2 className="text-3xl font-bold  ">Personal Info</h2>
          <p className="text-gray-500">
            Info About you and your preferennnnces aross Laundry Services
          </p>
        </div>
        <div className="container mx-auto flex justify-center items-center mt-5">
          <div className="w-[37%]">
            <h2 className="text-2xl  font-bold mb-2">
              Your profile info in Laundry services
            </h2>
            <p className="text-gray-500">
              Personal info and options to manage it. You can make some of this
              info, like your contact details, visible to others so that they
              can reach you easily. You can also see a summary of your profiles.
            </p>
          </div>
          <Image src={infoimg} width={500} alt="info img" />
        </div>
      </div>
      <div className="mt-5 border-2 shadow w-[80%] mx-auto rounded-xl ">
        <h2 className="font-bold text-2xl p-5 ">Basic Info</h2>

        {/*  */}
        <div className="p-10">
          {/* profile picture */}
          <div className="flex justify-between items-center border-b-2 ">
            <p className="font-semibold text-xl ">Profile picture</p>
            <div className="flex  items-center  gap-10  ">
              <p className="flex-shrink-0 text-lg font-thin ">
                A profile picture helps personalize your account
              </p>

              <UploadProfilePicture />
            </div>
          </div>

          {/* name section */}
          <div className="flex justify-between items-center border-b-2 shadow py-5">
            <p className="font-semibold text-xl ">Your Name</p>
            <div className="flex  items-center  gap-10  ">
              <p className="flex-shrink-0 text-lg font-bold ">
                <FullName name={profile?.name} />
              </p>

              <button onClick={() => dispatch(changeProfileUiSection(11))}>
                <FaPencil />
              </button>
            </div>
          </div>

          {/* Email section */}
          <div className="flex justify-between items-center border-b-2 shadow py-5">
            <p className="font-semibold text-xl ">Your Email</p>
            <div className="flex  items-center  gap-10  ">
              <p className="flex-shrink-0 text-lg font-bold ">
                {profile?.email}
              </p>

              <button>
                <FaPencil />
              </button>
            </div>
          </div>

          {/* PhoneNumber section */}
          <div className="flex justify-between items-center border-b-2 shadow py-5">
            <p className="font-semibold text-xl ">Your Phone Number</p>
            <div className="flex  items-center  gap-10  ">
              <p className="flex-shrink-0 text-lg font-bold ">
                {" "}
                +88{profile?.phoneNumber}
              </p>

              <button>
                <FaPencil />
              </button>
            </div>
          </div>
          {/*  Password section */}
          <div className="flex justify-between items-center border-b-2 shadow py-5">
            <p className="font-semibold text-xl "> Password</p>
            <div className="flex  items-center  gap-10  ">
              <p className="flex-shrink-0 text-lg font-bold ">
                Change Password
              </p>

              <button>
                <FaPencil />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePersonInfo;
