/**
 * Title: 'Home Header Swiper content-1'
 * Description: 'This is I used LaundryHub home Header Swiper Content'
 * Author: 'Masum Rana'
 * Date: 23-12-2023
 *
 */

import { gsap } from "gsap";
import { useEffect } from "react";
import Image from "next/image";
import banner from "/public/HeaderSwiper/photo-4.jpg";

const FirstSwiperData = ({ isActive }: { isActive: boolean }) => {
  useEffect(() => {
    if (isActive) {
      gsap.to(".firstCSecondText", {
        duration: 5,
        x: 79,
        delay: 1,
        display: "block",
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
        <div className="firstCSecondText hidden absolute top-[20%] left-[1%] sm:top-[28%] sm:left-[2%] lg:top-[35%] lg:left-[10%] border-l-4 pl-2">
          <div className="">
            <p className="  text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter font-thin text-white    ">
              We provide Best Cleaning Services
            </p>
            <p className="font-bold text-white md:text-3xl lg:text-4xl mb-1 md:mb-2 ">
              with{" "}
              <span className="text-green-400">
                EcoDrive<span className="text-black">&trade;</span>
              </span>
            </p>

            <div className="  border-b-4 border-green-400 w-20  mb-1 "></div>

            <h3 className=" text-white font-bold  text-xl md:text-3xl lg:text-3xl mb-1 md:mb-2  ">
              Call us @ <span className="text-green-400">01644626735</span>
            </h3>
            <button className="  px-3 py-2 sm:px-5 sm:py-3 text-md sm:text-xl rounded  shadow-lg font-semibold  transition-colors duration-300 bg-green-500  text-white hover:bg-green-700  ">
              Get Clean
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSwiperData;
