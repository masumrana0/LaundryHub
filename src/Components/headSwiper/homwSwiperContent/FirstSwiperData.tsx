/**
 * Title: 'Home Header Swiper content-1'
 * Description: 'This is I used LaundryHub home Header Swiper Content'
 * Author: 'Masum Rana'
 * Date: 23-12-2023
 *
 */

import React, { useEffect } from "react";
import { firstSwiperConentStyle as imageStyle } from "../styles";
import { gsap } from "gsap";

const FirstSwiperData = ({ isActive }: { isActive: boolean }) => {
  useEffect(() => {
    if (isActive) {
      gsap.to(".firstCFirstText", {
        duration: 1,
        y: 250,
        display: "block",
      });

      gsap.to(".firstCSecondText", {
        duration: 2,
        x: -525,
        delay: 1,
        display: "block",
      });

      gsap.to(".firstCUnderLine", {
        duration: 1,
        y: -45,
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
    }
  }, [isActive]);
  return (
    <div style={imageStyle}>
      <div className="">
        <p className="firstCFirstText absolute top-[1rem] left-[7rem]  lg:text-5xl tracking-tighter font-thin text-white mb-3 hidden">
          We provide Best Cleaning Services
        </p>
        <p className="firstCSecondText absolute top-[21rem] left-[40rem] font-bold text-white text-3xl mb-3 hidden">
          with{" "}
          <span className="text-green-400">
            EcoDrive<span className="text-black">&trade;</span>
          </span>
        </p>

        <div className="firstCUnderLine absolute top-[27rem] left-[7.4rem] border-b-4 border-green-400 w-20 mb-4 hidden "></div>

        <h3 className="firstCBottomText absolute top-[25rem] left-[20rem] text-3xl text-white font-bold mb-5 hidden">
          Call us @ <span className="text-blue-400">01644626735</span>
        </h3>
        <button className="firstCButton absolute top-[31rem] left-[7.5rem] rounded px-10 py-2 shadow-lg font-semibold  transition-colors duration-300 bg-green-500  text-white hover:bg-green-700  hidden">
          Get Clean
        </button>
      </div>
    </div>
  );
};

export default FirstSwiperData;
