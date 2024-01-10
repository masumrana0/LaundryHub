import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRating from "./StarRating";

const ReviewSection = ({ reviews }: any) => {
  const boxShadowStyle = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        freeMode={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews?.map((review: any) => (
          <SwiperSlide key={review?._id}>
            <div
              style={boxShadowStyle}
              className="w-[370px] h-[370px] lg:w-[400px] lg:h-[390px] bg-white   text-center p-6"
            >
              <Image
                className="w-[100px] h-[100px] mx-auto rounded-full  bg-gray-200  mb-3"
                src={review?.photoUrl}
                width="400"
                height="400"
                alt="contact us img"
              />
              <h2 className="font-bold text-xl text-center text-green-400 ">
                {review?.userName}
              </h2>
              <h6 className="text-gray-400 ">{review?.profession}</h6>
              <StarRating stars={parseInt(review?.star) || 0} starsize="text-xl" />
              <p className="text-gray-500">{review?.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewSection;
