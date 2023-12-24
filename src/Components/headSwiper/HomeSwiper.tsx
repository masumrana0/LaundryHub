/**
 * Title: 'This is Home Header Swiper '
 * Description: 'Swiper'
 * Author: 'Masum Rana'
 * Date: 23-12-2023
 *
 */

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.ts";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ThirdSwiperData from "./homwSwiperContent/ThirdSwiperData";
import SecondSwiperData from "./homwSwiperContent/SecondSwiperData";
import FirstSwiperData from "./homwSwiperContent/FirstSwiperData";

export default function HomeHeaderSwiper() {
  return (
    <div className="container px-0  mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ThirdSwiperData />
        </SwiperSlide>
        <SwiperSlide>
          <SecondSwiperData />
        </SwiperSlide>
        <SwiperSlide>
          <FirstSwiperData />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
