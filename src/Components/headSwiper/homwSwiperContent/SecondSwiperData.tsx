/**
 * Title: 'Home Header Swiper content-2'
 * Description: 'This is I used LaundryHub home Header Swiper Content'
 * Author: 'Masum Rana'
 * Date: 23-12-2023
 *
 */

import Image from "next/image";
import icon1 from "../../../../public/HeaderSwiper/icons/slide-icon1.png";
import icon2 from "../../../../public/HeaderSwiper/icons/slide-icon2.png";
import icon3 from "../../../../public/HeaderSwiper/icons/slide-icon3.png";
import banner from "/public/HeaderSwiper/photo-3.jpg";
import { gsap } from "gsap";
import { useEffect } from "react";

const SecondSwiperData = ({ isActive }: { isActive: boolean }) => {
  // for text animation
  useEffect(() => {
    if (isActive) {
      gsap.to(".textAnimation", {
        duration: 3,
        x: "15%",
        delay: 1,
        display: "block",
      });
    }
  }, [isActive]);

  return (
    <div className="relative lg:h-[700px] w-full  text-sm md:text-lg lg:text-xl xl:text-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-transparent"></div>

      <Image
        src={banner}
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
        alt="banner img"
      />

      <div className="textAnimation hidden absolute top-[10%]  md:top-[20%] left-[8%] ">
        <div>
          {/* header text  */}
          <div className="md:mb-4">
            <p className="text-sm md:text-3xl lg:text-4xl">
              Providing an environment
            </p>
            <p className="text-sm md:text-3xl lg:text-4xl font-bold">
              Friendly{" "}
              <span className="text-green-600">
                Laundry Service<span className="text-black">&trade;</span>
              </span>
            </p>
          </div>

          <div className="flex flex-col items-start  gap-0 mt-2">
            {/* First */}
            <div className="flex items-center gap-2 mb-5">
              <Image
                className="w-5 h-5 md:w-10 md:h-10"
                src={icon1}
                alt="icon"
                width={50}
                height={50}
              />
              <div className="border-l-2 md:border-l-4  border-green-600 md:pl-2 pl-1">
                <p className="text-[12px] md:text-xl font-thin text-gray-800">
                  Optimize Your Clothing's Cleanliness with
                </p>
                <h3 className="font-semibold text-sm md:text-2xl">
                  Cutting-Edge Equipment
                </h3>
              </div>
            </div>

            {/* Second */}
            <div className="flex items-center gap-2 mb-5">
              <Image
                className="w-5 h-5 md:w-10 md:h-10"
                src={icon2}
                alt="icon"
                width={50}
                height={50}
              />
              <div className="border-l-2 md:border-l-4  border-green-600 md:pl-2 pl-1">
                <p className="text-[12px] md:text-xl font-thin text-gray-800">
                  We Use Products That Are
                </p>
                <h3 className="font-semibold text-sm md:text-2xl">
                  Eco Friendly
                </h3>
              </div>
            </div>

            {/* Third */}
            <div className="flex items-center gap-2">
              <Image
                className="w-5 h-5 md:w-10 md:h-10"
                src={icon3}
                alt="icon"
                width={50}
                height={50}
              />
              <div className="border-l-2 md:border-l-4  border-green-600 md:pl-2 pl-1">
                <p className="text-[12px] md:text-xl font-thin text-gray-800">
                  We Use Products That Are
                </p>
                <h3 className="font-semibold text-sm md:text-2xl">
                  Eco Friendly
                </h3>
              </div>
            </div>
          </div>

          <button className="hidden md:block rounded px-2 py-1 md:px-4 md:py-2 mt-2 ml-11 lg:mt-4 shadow-lg font-semibold transition-colors duration-300 bg-green-500 text-white hover:bg-green-700">
            Get Clean
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSwiperData;
