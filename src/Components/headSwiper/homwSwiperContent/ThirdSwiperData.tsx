/**
 * Title: 'Home Header Swiper content-3'
 * Description: 'This is I used LaundryHub home Header Swiper Content.'
 * Author: 'Masum Rana'
 * Date: 23-12-2023
 *
 */

import Image from "next/image";
import { gsap } from "gsap";
import icon1 from "../../../../public/HeaderSwiper/icons/slide-icon4.png";
import icon2 from "../../../../public/HeaderSwiper/icons/slide-icon5.png";
import icon3 from "../../../../public/HeaderSwiper/icons/slide-icon6.png";
import { useEffect, useState } from "react";
import { thirdSwiperImageStyle as imageStyle } from "../styles";

const ThirdSwiperData = ({ isActive }: { isActive: boolean }) => {
  const [isAnimated, setAnimation] = useState(false);
  // set gsap  animation
  useEffect(() => {
    if (isActive && !isAnimated) {
      // text1
      gsap.to(".text1", {
        duration: 2,
        x: -475,
        delay: 2,
        display: "block",
      });

      // text1
      gsap.to(".text2", {
        duration: 2,
        x: 500,
        delay: 1,
        display: "block",
      });

      // icons
      gsap.to(".icons", {
        duration: 2,
        y: -50,
        display: "block",
        delay: 3,
      });

      // botom text
      gsap.to(".bottomText", {
        duration: 2,
        x: -250,
        display: "block",
        delay: 4,
      });
    }

    setAnimation(true);
  }, [isActive]);

  return (
    <div className="  font-sans" style={imageStyle}>
      {/* top part  */}
      <div>
        <p className="text1 hidden  absolute top-40 right-[-20rem]  lg:text-5xl tracking-tighter font-thin mb-3">
          The Better Solution
        </p>
        <p className=" text2 absolute top-56 right-[40rem] hidden  font-bold  lg:text-5xl  mb-3">
          for <span className="text-green-600">DryCleaners</span>
        </p>
      </div>

      {/* botom part  */}
      <div className="mt-12">
        {/* first  */}
        <div className="flex  items-center gap-2 mb-5">
          <Image
            className="icons absolute top-[22rem] right-[26rem] hidden "
            src={icon1}
            alt="icon"
          />
          <div className="bottomText absolute top-[20rem] right-[-2rem] border-l-4 border-green-400 me-5 hidden ">
            <p className="lg:text-xl font-thin text-gray-200  ">
              01.So Fast Delivery
            </p>
            <h3 className="font-semibold text-2xl text-[#ffc908]">
              {" "}
              Withthin 30 mins
            </h3>
          </div>
        </div>

        {/* second */}
        <div className="flex  items-center gap-2">
          <Image
            className="icons absolute top-[30rem] right-[26rem] hidden "
            src={icon2}
            alt="icon"
          />
          <div className=" bottomText absolute top-[28rem] right-[24px] hidden  ">
            <p className="lg:text-xl tracking-tighter font-thin text-gray-300  ">
              02.Memberships
            </p>
            <h3 className="font-semibold text-2xl text-[#8dd7f7]">
              {" "}
              Eco Friendly
            </h3>
          </div>
        </div>

        {/* Third */}
        <div className="flex  items-center gap-2 mt-5 mb-5">
          <Image
            className="icons absolute top-[38rem] right-[26rem] hidden "
            src={icon3}
            alt="icon"
          />
          <div className=" bottomText absolute top-[36rem] right-[34px] hidden ">
            <p className="lg:text-lg tracking-tighter font-thin text-gray-300">
              03.Make Your Day
            </p>
            <h3 className="font-semibold text-2xl text-[#40afac]">
              {" "}
              Best Offers
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSwiperData;
