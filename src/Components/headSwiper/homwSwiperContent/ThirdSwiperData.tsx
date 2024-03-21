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
import banner from "/public/HeaderSwiper/photo-1.jpg";

const ThirdSwiperData = ({ isActive }: { isActive: boolean }) => {
  const [isAnimated, setAnimation] = useState(false);
  // set gsap  animation
  useEffect(() => {
    if (isActive) {
      // text1
      gsap.to(".thirdCTextFirstPart", {
        duration: 3,
        x: "50%",
        delay: 1,
        display: "block",
      });
    }

    setAnimation(true);
  }, [isActive]);

  return (
    <div className=" lg:h-[700px] w-full  text-sm md:text-lg lg:text-xl xl:text-xl  ">
      <div className="relative  ">
        {/* banner gradient and background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-transparent"></div>
        <Image
          src={banner}
          width={1000}
          height={1000}
          className="w-full h-full object-fit"
          alt="banner img"
        />

        {/* content */}

        <div className="thirdCTextFirstPart hidden  absolute top-4 sm:top-[16%] lg:top-[14%]        ">
          {/* top part  */}
          <div className=" tracking-tighter text-lg md:text-2xl lg:text-4xl lg:mb-4 ">
            <p className="  font-extrabold    text-gray-200 lg:mb-2  ">
              The Better Solution
            </p>
            <p className="font-bold    ">
              for{" "}
              <span className="text-green-500 font-extrabold ">
                DryCleaners
              </span>
            </p>
          </div>

          {/* botom part  */}
          {/* <div className="bottomCTextSecond absolute right-[-35rem] top-[10rem] mt-32 hidden lg:block"> 

          {/* first  */}
          <div className="  flex items-center gap-3  py-2 md:py-5 text-[10px] md:text-xl lg:text-2xl ">
            <Image
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-20 lg:w-20  "
              width={500}
              height={500}
              src={icon1}
              alt="icon"
            />
            <div className="border-l-2 lg:border-l-4 border-green-400 pl-1 md:pl-3 ">
              <p className="  font-thin text-gray-200">01.So Fast Delivery</p>
              <h3 className="font-semibold  text-yellow-300">
                {" "}
                Withthin 30 mins
              </h3>
            </div>
          </div>

          {/* second */}
          <div className="flex items-center gap-3 py-2 md:py-5 text-[10px] md:text-xl lg:text-2xl">
            <Image
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 "
              width={500}
              height={500}
              src={icon2}
              alt="icon"
            />
            <div className="border-l-2 lg:border-l-4 border-green-400 pl-1 md:pl-3 ">
              <p className="  tracking-tighter font-thin m-[0px] text-gray-300">
                02.Memberships
              </p>
              <p className="font-semibold  text-[#8dd7f7]"> Eco Friendly</p>
            </div>
          </div>

          {/* Third */}
          <div className="flex items-center gap-3 text-[10px] md:text-xl lg:text-2xl py-2 md:py-5">
            <Image
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 "
              width={500}
              height={500}
              src={icon3}
              alt="icon"
            />
            <div className="border-l-2 lg:border-l-4 border-green-400 pl-1 md:pl-3 ">
              <p className="  tracking-tighter font-thin text-gray-300">
                03.Make Your Day
              </p>
              <h3 className="font-semibold   text-[#40afac]"> Best Offers</h3>
            </div>
          </div>
          {/* </div> */}

          {/* Responsive for tablet and phone */}
          {/* <div className="lg:hidden">
          {/* Include the content you want to show on smaller screens */}
          {/* </div> */}
        </div>
      </div>

      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500 via-transparent to-transparent"></div> */}
    </div>
  );
};

export default ThirdSwiperData;
