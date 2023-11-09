import AboutSection from "@/Components/Shared/HomeUi/AboutSection";
import IntroduceService from "@/Components/Shared/HomeUi/IntroduceServices/IntroduceService";
import HowItsWorkSectiont from "@/Components/Shared/HomeUi/HowItsWorkSection";
import {
  FaCar,
  FaMoneyBill1Wave,
  FaMedal,
  FaLeaf,
  FaStreetView,
  FaHandHoldingDollar,
} from "react-icons/fa6";
import ChooseSection from "@/Components/Shared/HomeUi/ChooseSection";

const HomePage = () => {
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

      {/* why choose use section*/}
      <div>
        <ChooseSection />
      </div>
    </div>
  );
};

export default HomePage;
