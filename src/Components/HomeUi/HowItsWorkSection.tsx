import Image from "next/image";
import logo from "/public/logo.png";

import {
  FaBagShopping,
  FaCar,
  FaClipboardCheck,
  FaClock,
  FaLocationDot,
} from "react-icons/fa6";
const HowItsWorkSectiont = () => {
  const boxShadowStyle = {
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
  };
  return (
    <div className="container mx-auto  mt-32 lg:mt-52">
      <div>
        <div className=" my-12 ">
          <p className="text-sm md:text-xl text-center font-thin tracking-tighter">
            We Clean EveryThing
          </p>
          <h3 className="text-xl lg:text-2xl text-center font-semibold">
            Our <span className="font-bold">Working Process</span>
          </h3>
        </div>

        <div className="lg:flex lg:flex-row flex-col justify-center items-center gap-5  ">
          <div className="lg:w-1/2 flex flex-col gap-2">
            <div className="flex gap-3 justify-center items-center">
              <div className="  lg:w-[250px]  w-[140px]"> </div>
              <div className="bg-green-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                {" "}
                <FaClipboardCheck className="text-4xl text-white " />
              </div>
              <div
                style={boxShadowStyle}
                className="shadow-2xl  bg-gray-100   py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold text-sm  md:text-lg text-center">
                  {" "}
                  Select Service
                </h2>
              </div>
            </div>

            <span className="border-l-2 border-gray-500 h-[30px] mx-auto"></span>

            <div className="flex gap-3 justify-center items-center">
              <div
                style={boxShadowStyle}
                className="shadow-2xl text-end  bg-gray-100  px-3 py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold text-sm  md:text-lg text-center">
                  {" "}
                  Place Order
                </h2>
              </div>
              <div className="bg-green-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                {" "}
                <FaBagShopping className="text-4xl text-white " />
              </div>
              <div className="  lg:w-[250px]  w-[140px]"> </div>
            </div>
            <span className="border-l-2 border-gray-500 h-[30px] mx-auto"></span>

            <div className="flex gap-3 justify-center items-center">
              <div className="  lg:w-[250px]  w-[140px]"> </div>
              <div className="bg-green-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                {" "}
                <FaClock className="text-4xl text-white " />
              </div>
              <div
                style={boxShadowStyle}
                className="shadow-2xl  bg-gray-100  px-3 py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold text-sm  md:text-lg text-center">
                  {" "}
                  Set Schedule
                </h2>
              </div>
            </div>
            <span className="border-l-2 border-gray-500 h-[30px] mx-auto"></span>

            <div className="flex gap-3 justify-center items-center">
              <div
                style={boxShadowStyle}
                className="shadow-2xl text-end  bg-gray-100  px-3 py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold text-sm  md:text-lg text-center">
                  {" "}
                  Pick up
                </h2>
              </div>
              <div className="bg-green-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                {" "}
                <FaLocationDot className="text-4xl text-white " />
              </div>
              <div className="  lg:w-[250px]  w-[140px]"> </div>
            </div>
            <span className="border-l-2 border-gray-500 h-[30px] mx-auto"></span>

            <div className="flex gap-3 justify-center items-center">
              <div className="  lg:w-[250px]  w-[140px]"> </div>
              <div className="bg-green-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                <Image src={logo} width={30} height={40} alt="iron img" />
              </div>
              <div
                style={boxShadowStyle}
                className="shadow-2xl  bg-gray-100  px-3 py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold text-sm  md:text-lg text-center">
                  {" "}
                  Wash & Iron
                </h2>
              </div>
            </div>
            <span className="border-l-2 border-gray-500 h-[30px] mx-auto"></span>
            <div className="flex gap-3 justify-center items-center">
              <div
                style={boxShadowStyle}
                className="shadow-2xl text-end  bg-gray-100  px-3 py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold text-sm  md:text-lg text-center">
                  Delivery
                </h2>
              </div>
              <div className="bg-green-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                {" "}
                <FaCar className="text-4xl text-white " />
              </div>
              <div className="  lg:w-[250px]  w-[140px]"> </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2   mt-10 lg:mt-0">
            <iframe
              className="w-full  h-[300px] lg:h-[500px]  rounded-[5px]"
              src="https://www.youtube.com/embed/Vyor8kv9YiI?si=aX427M10ELPqpERO&amp;start=25"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorkSectiont;
