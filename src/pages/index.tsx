import AboutSection from "@/Components/Shared/HomeUi/AboutSection";
import IntroduceService from "@/Components/Shared/HomeUi/IntroduceServices/IntroduceService";
import Image from "next/image";
import logo from "../../public/logo-2.png";

import {
  FaClipboardCheck,
  FaBagShopping,
  FaClock,
  FaLocationDot,
  FaCar,
} from "react-icons/fa6";
import HowItsWorkSectiont from "@/Components/Shared/HomeUi/HowItsWorkSection";

const HomePage = () => {
  const boxShadowStyle = {
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
  };
  return (
    <div className=" lg:px-0">
      {/* introduce-section  */}
      <div className="mt-8 px-5">
        <IntroduceService />
      </div>

      {/* about Section  */}
      <div className=" bg-[#5cb8ff] lg:p-20 mt-10 p-5  lg:pt-0  ">
        <AboutSection />
      </div>
      {/* how to work section  */}
      <div>
        <HowItsWorkSectiont />
      </div>
    </div>
  );
};

export default HomePage;
