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
    if (isActive) {
      // text1
      gsap.to(".thirdCTextFirstPart", {
        duration: 2,
        x: 440,
        delay: 1,
        display: "block",
      });

      gsap.to(".bottomCTextSecond", {
        duration: 3,
        x: -725,
        delay: 2,
        display: "block",
      });
    }

    setAnimation(true);
  }, [isActive]);

  return (
    <div className="font-sans" style={imageStyle}>
      <div className=" ">
        {/* top part  */}
        <div className="thirdCTextFirstPart absolute right-[35rem] mt-32 hidden lg:block">
          <p className="lg:text-5xl tracking-tighter font-thin mb-3">
            The Better Solution
          </p>
          <p className="font-bold lg:text-5xl mb-7">
            for <span className="text-green-600">DryCleaners</span>
          </p>
        </div>

        {/* botom part  */}
        <div className="bottomCTextSecond absolute right-[-35rem] top-[10rem] mt-32 hidden lg:block">
          {/* first  */}
          <div className="flex items-center gap-3 mb-5">
            <Image className="" src={icon1} alt="icon" />
            <div className="border-l-4 border-green-400 pl-2">
              <p className="lg:text-xl font-thin text-gray-200">
                01.So Fast Delivery
              </p>
              <h3 className="font-semibold text-2xl text-[#ffc908]">
                {" "}
                Withthin 30 mins
              </h3>
            </div>
          </div>

          {/* second */}
          <div className="flex items-center gap-3 mb-5">
            <Image className=" " src={icon2} alt="icon" />
            <div className="border-l-4 border-green-400 pl-2">
              <p className="lg:text-xl tracking-tighter font-thin text-gray-300">
                02.Memberships
              </p>
              <h3 className="font-semibold text-2xl text-[#8dd7f7]">
                {" "}
                Eco Friendly
              </h3>
            </div>
          </div>

          {/* Third */}
          <div className="flex items-center gap-3 mb-5">
            <Image className="" src={icon3} alt="icon" />
            <div className="border-l-4 border-green-400 pl-2">
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

        {/* Responsive for tablet and phone */}
        <div className="lg:hidden">
          {/* Include the content you want to show on smaller screens */}
        </div>
      </div>
    </div>
  );
};

export default ThirdSwiperData;
