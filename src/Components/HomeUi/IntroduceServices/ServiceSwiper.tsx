import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import banner1 from "/public/storyset/laundry_1.png";
import banner2 from "/public/storyset/laundry_2.png";
import banner3 from "/public/storyset/laundry_3.png";
import banner4 from "/public/storyset/laundry_4.png";

import Image from "next/image";

export default function ServiceSwiper() {
  const bannerArray = [banner1, banner2, banner3, banner4];
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
