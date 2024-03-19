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
        duration: 1,
        y: "50%",
        display: "block",
        delay: 3,
      });

      gsap.to(".firstCBottomText", {
        duration: 1,
        x: -200,
        display: "block",
        delay: 3,
      });

      gsap.to(".firstCButton", {
        duration: 1,
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
          <p className="firstCFirstText hidden   absolute top-[-3%] left-[10%] text-lg sm:text-xl md:2xl tracking-tighter font-thin text-white    ">
            We provide Best Cleaning Services
          </p>
          <p className="firstCSecondText  absolute top-[6rem] left-[16rem] font-bold text-white      text-xl   ">
            with{" "}
            <span className="text-green-400">
              EcoDrive<span className="text-black">&trade;</span>
            </span>
          </p>

          <div className="  absolute top-[15rem] left-[2.3rem]   border-b-4 border-green-400 w-20 mb-4   "></div>

          <h3 className="firstCBottomText absolute top-[25rem] left-[20rem] text-3xl text-white font-bold mb-5 hidden">
            Call us @ <span className="text-green-400">01644626735</span>
          </h3>
          <button className="firstCButton absolute top-[31rem] left-[7.5rem] rounded px-10 py-2 shadow-lg font-semibold  transition-colors duration-300 bg-green-500  text-white hover:bg-green-700  hidden">
            Get Clean
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSwiperData;
