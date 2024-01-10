import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import banner1 from "/public/banner-1.png";
import banner2 from "/public/banner-2.png";
import banner3 from "/public/banner-3.png";
import banner4 from "/public/banner-4.png";
import banner5 from "/public/banner-5.png";

import Image from "next/image";

export default function ServiceSwiper() {
  const bannerArray = [banner1, banner2, banner3, banner4, banner5];
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {bannerArray.map((banner: any, index: number) => (
          <SwiperSlide key={index}>
            <Image
              className="lg:w-full lg:h-96 "
              src={banner}
              width={500}
              height={200}
              alt="Slider img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
