/**
 * Title: 'This is Home Header Swiper '
 * Description: 'Swiper'
 * Author: 'Masum Rana'
 * Date: 23-12-2023
 *
 */

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ThirdSwiperData from "./homwSwiperContent/ThirdSwiperData";
import SecondSwiperData from "./homwSwiperContent/SecondSwiperData";
import FirstSwiperData from "./homwSwiperContent/FirstSwiperData";

export default function HomeHeaderSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setAcive] = useState(false);

  return (
    <div className=" ">
      <Swiper
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          //   setAcive(swiper?.enable);
        }}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <ThirdSwiperData isActive={activeIndex === 0} />
        </SwiperSlide> */}
        <SwiperSlide>
          {/* <SecondSwiperData isActive={activeIndex === 1} /> */}
        </SwiperSlide>
        <SwiperSlide>
          <FirstSwiperData isActive={activeIndex === 2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
