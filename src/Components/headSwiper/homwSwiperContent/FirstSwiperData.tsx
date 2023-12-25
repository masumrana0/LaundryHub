/**
 * Title: 'Home Header Swiper content-1'
 * Description: 'This is I used LaundryHub home Header Swiper Content'
 * Author: 'Masum Rana'
 * Date: 23-12-2023
 *
 */

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FirstSwiperData = ({ isActive }: { isActive: boolean }) => {
  //  css
  const imageStyle: React.CSSProperties = {
    position: "relative",
    // width: "100vw",
    height: "80vh",
    backgroundImage: `
      linear-gradient(to left, rgba(10, 1, 1, 0.475), rgba(100, 100,0.5)),
      url("/HeaderSwiper/photo-7.jpg")
    `,

    backgroundSize: "cover",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    borderEndEndRadius: "5px",
  };

  return (
    <div style={imageStyle}>
      <div className="absolute top-72 left-52">
        <p
          data-aos="zoom-out-right"
          className="lg:text-5xl tracking-tighter font-thin text-white mb-3"
        >
          We provide Best Cleaning Services
        </p>
        <p className="font-bold text-white text-3xl mb-3">
          with{" "}
          <span className="text-green-400">
            EcoDrive<span className="text-black">&trade;</span>
          </span>
        </p>

        <div className="bottom-0 border-b-4 border-green-400 w-20 mb-4 "></div>

        <h3 className="text-3xl text-white font-bold mb-5">
          Call us @ <span className="text-blue-400">01644626735</span>
        </h3>
        <button className="rounded px-10 py-2 shadow-lg font-semibold  transition-colors duration-300 bg-green-500  text-white hover:bg-green-700 ">
          Get Clean
        </button>
      </div>
    </div>
  );
};

export default FirstSwiperData;
