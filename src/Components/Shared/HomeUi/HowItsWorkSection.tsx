import React from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png";

import {
  FaClipboardCheck,
  FaBagShopping,
  FaClock,
  FaLocationDot,
  FaCar,
} from "react-icons/fa6";
const HowItsWorkSectiont = () => {
  const boxShadowStyle = {
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
  };
  return (
    <div className="container mx-auto">
      <div>
        <div className="text-center mt-20">
          <h2 className="inline-block border-b-4 border-blue-500 font-bold lg:text-5xl text-3xl my-20">
            How It&apos;s work
          </h2>
        </div>
        <div className="mt-10  lg:flex lg:flex-row flex-col justify-center items-center  ">
          <div className="lg:w-1/2 flex flex-col gap-2">
            <div className="flex gap-3 justify-center items-center">
              <div className="  lg:w-[250px]  w-[140px]"> </div>
              <div className="bg-blue-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                {" "}
                <FaClipboardCheck className="text-4xl text-white " />
              </div>
              <div
                style={boxShadowStyle}
                className="shadow-2xl  bg-gray-100  px-3 py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold  lg:text-lg"> Select Service</h2>
              </div>
            </div>
            <span className="border-l-2 border-gray-500 h-[30px] mx-auto"></span>

            <div className="flex gap-3 justify-center items-center">
              <div
                style={boxShadowStyle}
                className="shadow-2xl text-end  bg-gray-100  px-3 py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold  lg:text-lg"> Place Order</h2>
              </div>
              <div className="bg-blue-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                {" "}
                <FaBagShopping className="text-4xl text-white " />
              </div>
              <div className="  lg:w-[250px]  w-[140px]"> </div>
            </div>
            <span className="border-l-2 border-gray-500 h-[30px] mx-auto"></span>

            <div className="flex gap-3 justify-center items-center">
              <div className="  lg:w-[250px]  w-[140px]"> </div>
              <div className="bg-blue-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                {" "}
                <FaClock className="text-4xl text-white " />
              </div>
              <div
                style={boxShadowStyle}
                className="shadow-2xl  bg-gray-100  px-3 py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold  lg:text-lg"> Set Schedule</h2>
              </div>
            </div>
            <span className="border-l-2 border-gray-500 h-[30px] mx-auto"></span>

            <div className="flex gap-3 justify-center items-center">
              <div
                style={boxShadowStyle}
                className="shadow-2xl text-end  bg-gray-100  px-3 py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold  lg:text-lg"> Pick up</h2>
              </div>
              <div className="bg-blue-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                {" "}
                <FaLocationDot className="text-4xl text-white " />
              </div>
              <div className="  lg:w-[250px]  w-[140px]"> </div>
            </div>
            <span className="border-l-2 border-gray-500 h-[30px] mx-auto"></span>

            <div className="flex gap-3 justify-center items-center">
              <div className="  lg:w-[250px]  w-[140px]"> </div>
              <div className="bg-blue-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                <Image src={logo} width={30} height={40} alt="iron img" />
              </div>
              <div
                style={boxShadowStyle}
                className="shadow-2xl  bg-gray-100  px-3 py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold  lg:text-lg"> Wash & Iron</h2>
              </div>
            </div>
            <span className="border-l-2 border-gray-500 h-[30px] mx-auto"></span>
            <div className="flex gap-3 justify-center items-center">
              <div
                style={boxShadowStyle}
                className="shadow-2xl text-end  bg-gray-100  px-3 py-2  lg:w-[250px]  w-[140px]"
              >
                <h2 className="font-semibold  lg:text-lg">Delivery</h2>
              </div>
              <div className="bg-blue-500 w-[50px] h-[50px] rounded-full   flex items-center  justify-center">
                {" "}
                <FaCar className="text-4xl text-white " />
              </div>
              <div className="  lg:w-[250px]  w-[140px]"> </div>
            </div>
          </div>
          <div className="lg:w-1/2 p-2 mt-7 lg:mt-0">
            <iframe
              className="w-full  h-[300px] lg:h-[500px]  rounded-lg"
              src="https://www.youtube.com/embed/Vyor8kv9YiI?si=aX427M10ELPqpERO&amp;start=25"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorkSectiont;
