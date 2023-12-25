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
import { gsap } from "gsap";
import { useEffect, useState } from "react";

const SecondSwiperData = ({ isActive }: { isActive: boolean }) => {
  const imageStyle: React.CSSProperties = {
    position: "relative",
    height: "80vh",
    backgroundImage: `
      linear-gradient(to right, rgba(222, 217, 219, 0.90), rgba(0, 150, 255, 0.5)),
      url("/HeaderSwiper/photo-1.jpg")
    `,
    backgroundSize: "cover",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    borderRadius: "5px",
  };
  // seting moving animation
  useEffect(() => {
    if (isActive) {
      // C means Conent
      // text1
      gsap.to(".secondCText1", {
        duration: 2,
        x: -350,
        delay: 1,
        display: "block",
      });

      // text2
      gsap.to(".secondCText2", {
        duration: 2,
        x: 179,
        delay: 1,
        display: "block",
      });

      // icons
      gsap.to(".secondCIcons", {
        duration: 2,
        y: -40,
        display: "block",
        delay: 2,
      });

      // botom text
      gsap.to(".secondCBottomText", {
        duration: 2,
        x: -148,
        display: "block",
        delay: 3,
      });

      //bottom text
      gsap.to(".secondCBottomButton", {
        duration: 2,
        y: -85,
        display: "block",
        delay: 4,
      });
    }
  }, [isActive]);

  return (
    <div className="  font-sans" style={imageStyle}>
      <div>
        <div>
          <p className="secondCText1 absolute top-40 left-[35rem] hidden  lg:text-5xl tracking-tighter font-thin  mb-3">
            Providing an environment
          </p>
          <p className="secondCText2 absolute top-[13.5rem] left-[2rem] hidden  font-bold  text-3xl font-sans mb-3">
            Friendly{" "}
            <span className="text-green-700">
              Laundry Service<span className="text-black">&trade;</span>
            </span>
          </p>
        </div>

        <div className="mt-12">
          {/* first  */}
          <div className="flex  items-center gap-2 mb-5">
            <Image
              className={` secondCIcons
                absolute left-[13rem] top-[20rem] hidden`}
              src={icon1}
              alt="icon"
            />
            <div
              className={` secondCBottomText absolute left-[26rem] top-[17rem] border-l-4 border-green-400 pl-2 hidden`}
            >
              <p className="lg:text-lg tracking-tighter text-gray-700">
                Optimize Your Clothing's Cleanliness with
              </p>
              <h3 className="font-semibold text-2xl">
                {" "}
                Cutting-Edge Equipment
              </h3>
            </div>
          </div>

          {/* second */}
          <div className="flex  items-center gap-2">
            <Image
              className={` secondCIcons
              absolute left-[13rem] top-[26rem] hidden`}
              src={icon2}
              alt="Photo 7"
            />
            <div
              className={`secondCBottomText
                absolute left-[26rem] top-[23rem] border-l-4 border-green-400 pl-2 hidden`}
            >
              <p className="lg:text-lg tracking-tighter text-gray-700">
                We Use Product Which Are
              </p>
              <h3 className="font-semibold text-2xl"> Eco Friendly</h3>
            </div>
          </div>

          {/* Third */}
          <div className={`flex  items-center gap-2 mt-5 mb-5`}>
            <Image
              className={` secondCIcons absolute left-[13rem] top-[32rem] hidden`}
              src={icon3}
              alt="Photo 7"
            />
            <div
              className={`secondCBottomText
               absolute left-[26rem] top-[29rem] border-l-4 border-green-400 pl-2 hidden`}
            >
              <p className="lg:text-lg tracking-tighter text-gray-700">
                We Use Product Which Are
              </p>
              <h3 className="font-semibold text-2xl"> Eco Friendly</h3>
            </div>
          </div>
        </div>

        {/* <div className="bottom-0 border-b-4 border-green-400 w-20 mb-4 "></div> */}
        <button className="secondCBottomButton rounded px-10 py-2 shadow-lg font-semibold  transition-colors duration-300 bg-green-500  text-white hover:bg-green-700 absolute left-[13rem] top-[39rem] hidden ">
          Get Clean
        </button>
      </div>
    </div>
  );
};

export default SecondSwiperData;
