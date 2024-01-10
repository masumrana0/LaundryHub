import style from "../style/Homeui.module.css";
import {
  FaCar,
  FaMoneyBill1Wave,
  FaMedal,
  FaLeaf,
  FaStreetView,
  FaHandHoldingDollar,
} from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ChooseSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const boxShadowStyle = {
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
  };

  return (
    <div className="container mx-auto mt-32">
      <div className="flex justify-center lg:mb-20  mb-10">
        <h2 className="inline-block border-b-4 border-green-500 font-bold lg:text-4xl text-3xl ">
          Why We&apos;re Your Top Choice
        </h2>
      </div>

      {/* card  */}
      <div className={`flex justify-center flex-wrap gap-20  `}>
        <div
          data-aos="flip-right"
          data-aos-duration="2000"
          style={boxShadowStyle}
          className={`w-[350px] border p-6  ${style.card}`}
        >
          <div
            className={`flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100  ${style.circle}`}
          >
            <FaStreetView className={`  text-green-400 ${style.icon}`} />
          </div>
          <h2
            className="text-2xl my-3 font-semibold"
            data-aos="fade-right"
            data-aos-duration="5000"
          >
            Clean and Sanitary
          </h2>
          <p
            className="text-gray-600"
            data-aos="fade-left"
            data-aos-duration="5000"
          >
            Your clothing receives a hygienic washing, leaving them both
            germ-free and immaculate. It&apos;s a fresh approach to your
            laundry!
          </p>
        </div>

        <div
          data-aos="flip-left"
          data-aos-duration="2000"
          style={boxShadowStyle}
          className={`w-[350px] border p-6 ${style.card}`}
        >
          <div
            className={`flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100  ${style.circle}`}
          >
            <FaCar className={`  text-green-400 ${style.icon}`} />
          </div>
          <h2
            data-aos="fade-right"
            data-aos-duration="5000"
            className="text-2xl my-3 font-semibold  "
          >
            Free Pickup & Delivery
          </h2>
          <p
            data-aos="fade-left"
            data-aos-duration="5000"
            className="text-gray-600"
          >
            We offer convenient doorstep collection, and your clothing will be
            delivered punctually, as fresh as a daisy.
          </p>
        </div>

        <div
          style={boxShadowStyle}
          data-aos="flip-up"
          data-aos-duration="2000"
          className={`w-[350px] border p-6 ${style.card}`}
        >
          <div
            className={`flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100  ${style.circle}`}
          >
            <FaHandHoldingDollar className={`  text-green-400 ${style.icon}`} />
          </div>
          <h2
            data-aos="fade-right"
            data-aos-duration="5000"
            className="text-2xl my-3 font-semibold"
          >
            Affordable
          </h2>
          <p
            data-aos="fade-left"
            data-aos-duration="5000"
            className="text-gray-600"
          >
            At no extra cost, you pay the same price as set by your chosen
            laundry provider, ensuring affordability and convenience for your
            laundry needs
          </p>
        </div>

        <div
          style={boxShadowStyle}
          data-aos="flip-down"
          data-aos-duration="2000"
          className={`w-[350px] border p-6 ${style.card}`}
        >
          <div
            className={`flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100  ${style.circle}`}
          >
            <FaMoneyBill1Wave className={` text-green-400 ${style.icon}`} />
          </div>
          <h2
            data-aos="fade-right"
            data-aos-duration="5000"
            className="text-2xl my-3 font-semibold"
          >
            Honest Pricing
          </h2>
          <p
            data-aos="fade-left"
            data-aos-duration="5000"
            className="text-gray-600"
          >
            At a budget-friendly rate, our services are competitively priced and
            often more affordable than other local laundry services in your
            vicinity
          </p>
        </div>

        <div
          style={boxShadowStyle}
          data-aos="flip-left"
          data-aos-duration="2000"
          className={`w-[350px] border p-6 ${style.card}`}
        >
          <div
            className={`flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100  ${style.circle}`}
          >
            <FaLeaf className={`  text-green-400 ${style.icon}`} />
          </div>
          <h2
            data-aos="fade-right"
            data-aos-duration="5000"
            className={`text-2xl my-3 font-semibold `}
          >
            Eco-Conscious
          </h2>
          <p
            className="text-gray-600"
            data-aos="fade-left"
            data-aos-duration="5000"
          >
            This version clarifies the relationship between local residents, the
            laundry services, and the positive sentiment.
          </p>
        </div>

        <div
          data-aos="flip-right"
          data-aos-duration="2000"
          style={boxShadowStyle}
          className={`w-[350px] border p-6 ${style.card}`}
        >
          <div
            className={`flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100  ${style.circle}`}
          >
            <FaMedal className={` text-green-400 ${style.icon}`} />
          </div>
          <h2
            className="text-2xl my-3 font-semibold"
            data-aos="fade-right"
            data-aos-duration="5000"
          >
            Satisfaction Guarantee
          </h2>
          <p
            data-aos="fade-left"
            data-aos-duration="5000"
            className="text-gray-600"
          >
            We are laundry industry experts, staying current with the latest
            technologies to provide you with the best service.!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
