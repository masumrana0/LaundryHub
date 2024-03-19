/**
 * Title: 'Home Header Swiper content-1'
 * Description: 'This is I used LaundryHub home Header Swiper Content'
 * Author: 'Masum Rana'
 * Date: 23-12-2023
 *
 */

import { gsap } from "gsap";
import { useEffect } from "react";
import { firstSwiperConentStyle as imageStyle } from "../styles";
import Image from "next/image";
import banner from "/public/HeaderSwiper/photo-4.jpg";

const FirstSwiperData = ({ isActive }: { isActive: boolean }) => {
  useEffect(() => {
    if (isActive) {
      gsap.to(".firstCFirstText", {
        duration: 3,
        y: "5rem",
        display: "block",
      });

      gsap.to(".firstCSecondText", {
        duration: 2,
        x: -214,
        delay: 1,
        display: "block",
      });

      gsap.to(".firstCUnderLine", {
        duration: 3,
        y: -50,
        display: "block",
        delay: 3,
      });

      gsap.to(".firstCBottomText", {
        duration: 3,
        x: -200,
        display: "block",
        delay: 3,
      });

      gsap.to(".firstCButton", {
        duration: 3,
        y: -45,
        display: "block",
        delay: 4,
      });

      gsap.to(".firstCsideBar", {
        duration: 1,
        x: 70,
        display: "block",
        delay: 4,
      });
    }
  }, [isActive]);
  return (
    <div>
      <div className=" relative lg:h-[700px] w-full  text-sm md:text-lg lg:text-xl xl:text-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-transparent"></div>
        <Image
          src={banner}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          alt="banner img"
        />

        {/* <div className="  absolute top-[16.5rem] left-5 w-2  h-[15rem]  bg-green-400 hidden"></div> */}

        {/* text  */}
        <div className=" ">
          <p className="firstCFirstText hidden   absolute top-[-3.4%] left-[10%]  sm:top-[10%] sm:left-[13%] md:left-[15%] text-lg sm:text-2xl md:text-3xl tracking-tighter font-thin text-white    ">
            We provide Best Cleaning Services
          </p>
          <p className="firstCSecondText hidden  absolute top-[6rem] left-[16rem] sm:top-[36%] sm:left-[46%] md:left-[20%] font-bold text-white    sm:text-4xl  text-xl   ">
            with{" "}
            <span className="text-green-400">
              EcoDrive<span className="text-black">&trade;</span>
            </span>
          </p>

          <div className=" firstCUnderLine hidden  absolute top-[11rem] left-[2.6rem] sm:top-[58.5%] sm:left-[13%] border-b-4 border-green-400 w-20 mb-4   "></div>

          <h3 className=" firstCBottomText hidden  absolute top-[8.3rem] left-[15rem] sm:top-[49%] sm:left-[44%]  text-white font-bold mb-5 text-xl sm:text-2xl ">
            Call us @ <span className="text-green-400">01644626735</span>
          </h3>
          <button className="firstCButton hidden  absolute top-[12.5rem] left-[2.5rem] sm:top-[69%] sm:left-[13%] px-3 py-2 sm:px-5 sm:py-3 text-md sm:text-xl rounded  shadow-lg font-semibold  transition-colors duration-300 bg-green-500  text-white hover:bg-green-700  ">
            Get Clean
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSwiperData;
