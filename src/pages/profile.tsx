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

const Profile = () => {
  const [profileSection, setProfileSection] = useState<number>(1);
  return (
    <div>
      <Navbar />
      <div className="h-[40vh] flex ">
        <div className="w-[15%] flex flex-col mt-8">
          <button
            onClick={() => setProfileSection(1)}
            className={`${
              profileSection == 1 && " bg-green-200"
            }  rounded-e-2xl p-3 text-xl text-semibold flex justify-start items-center gap-1.5`}
          >
            {" "}
            <FaRegCircleUser />
            Profile Home
          </button>

          <Link className=" bg-green-200 rounded-e-2xl p-3 text-xl" href="/">
            <button className="text-semibold flex justify-center items-center gap-1.5">
              {" "}
              <FaUserGear />
              Personal Info
            </button>
          </Link>
          <Link className=" bg-green-200 rounded-e-2xl p-3 text-xl" href="/">
            <button className="text-semibold flex justify-center items-center gap-1.5">
              {" "}
              <FaClipboard />
              Booking DashBoard
            </button>
          </Link>
          <Link className=" bg-green-200 rounded-e-2xl p-3 text-xl" href="/">
            <button className="text-semibold flex justify-center items-center gap-1.5">
              {" "}
              <FaLock />
              Security
            </button>
          </Link>
        </div>
        <div className=" w-[80%]   mt-10">
          {profileSection == 1 && <HomeProfile />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
