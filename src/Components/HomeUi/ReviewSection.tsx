import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRating from "./StarRating";

const ReviewSection = () => {
  const boxShadowStyle = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
  };

  const reviews = [
    {
      id: "3",
      userName: "Sarah Johnson",
      photoUrl:
        "https://img.freepik.com/free-photo/handsome-man-suit-standing-outdoors-park_181624-19099.jpg?t=st=1711003784~exp=1711007384~hmac=d7a57360adee49f0f2c8113a634bcf5326fc923aa63a0a5dae8eea2bd00be0fb&w=1060",
      profession: "Marketing Manager",
      star: "5",
      review:
        "Exceptional service! Laundry hub provides outstanding experience. Clean machines, friendly staff, reasonable prices. Invaluable for busy professionals.",
    },
    {
      id: "4",
      userName: "Michael Smith",
      photoUrl:
        "https://img.freepik.com/free-photo/business-man-curly-cute-handsome-guy-black-suit-close-up-smiling_140725-162638.jpg?w=1060&t=st=1711003823~exp=1711004423~hmac=46ef4ad119e27280c3b46e6b0e086cffa91c91af4663e5a0009e970306bd898d",
      profession: "Software Engineer",
      star: "4",
      review:
        "Great laundry hub! Good conditions, fair prices. Occasionally crowded, but helpful staff, cleanliness make it go-to spot.",
    },
    {
      id: "5",
      userName: "Emily Brown",
      photoUrl:
        "https://img.freepik.com/free-photo/portrait-young-cute-businessman_186202-828.jpg?w=360&t=st=1711003857~exp=1711004457~hmac=7e1e8ebe2150b15a615ad54055fbe9d6f38db68b9600f0693c8c8b11ebd345a9",
      profession: "Teacher",
      star: "3",
      review:
        "Fantastic laundry hub! Efficient machines, cleanliness standout. More seating desired. Highly recommended for busy professionals.",
    },
    {
      id: "6",
      userName: "Daid Rodriguez",
      photoUrl:
        "https://img.freepik.com/free-photo/handsome-businessman-wearing-glasses-looking-up_329181-714.jpg?t=st=1711003883~exp=1711007483~hmac=cd52661950e21b9650bab2dbecfb80088a80a3a9db5186540e1c0ddc3652ed5c&w=1060",
      profession: "Graphic Designer",
      star: "4",
      review:
        "Reliable laundry hub! Good amenities, cleanliness, competitive. More seating desired. Recommended for dependable service.",
    },
    {
      id: "7",
      userName: "Jennifer Nguyen",
      photoUrl:
        "https://img.freepik.com/free-photo/portrait-serious-young-businessman-glasses_1262-3810.jpg?t=st=1711003937~exp=1711007537~hmac=47f1c71db420afe1b8c663b0444403eb17c557ef2e9845fa86503718ac7e0d52&w=1060",
      profession: "Nurse",
      star: "5",
      review:
        "Excellent laundry hub! Well-maintained machines, friendly staff, clean facility. Highly recommended for busy nurses.",
    },
    {
      id: "8",
      userName: "Christopher Lee",
      photoUrl:
        "https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-businessman-model-dressed-elegant-black-classic-suit_158538-6960.jpg?w=1060&t=st=1711003968~exp=1711004568~hmac=5619f243f370d1befee3b6366710a6ae5b9c07ef86a959e864694847c70f2901",
      profession: "Accountant",
      star: "4",
      review:
        "Reliable laundry hub! Good service, cleanliness, competitive. Occasional peak hour wait times. Recommended for convenience.",
    },
    {
      id: "9",
      userName: "Amanda White",
      photoUrl:
        "https://img.freepik.com/free-photo/handsome-young-man-festive-suit-black-bow-tie-stands-before-great-sea-view_8353-7081.jpg?w=1060&t=st=1711004129~exp=1711004729~hmac=c7189f35e915d4ba0b40cb3742c8d7ebea635d6a934ac5ede27c6053b19f7eb5",
      profession: "Sales Associate",
      star: "5",
      review:
        "Exceptional service! Laundry hub offers clean facility, friendly staff, enjoyable laundry experience. Relied upon for all needs.",
    },

    {
      id: "10",
      userName: "Daniel Martinez",
      photoUrl:
        "https://img.freepik.com/free-photo/handsome-business-man-wearing-suit-looking-camera-with-confident-smile-pointing-with-index-finger-side-standing-white-background_141793-54130.jpg",
      profession: "Lawyer",
      star: "4",
      review:
        "Solid laundry hub! Good facilities, well-maintained machines. Limited parking during peak hours. Convenient location, helpful staff. Reliable choice  for laundry needs.",
    },
    {
      id: "11",
      userName: "Jessica Taylor",
      photoUrl:
        "https://img.freepik.com/free-photo/portrait-outdoors-business-man-smiles_23-2148763856.jpg?w=1060&t=st=1711004080~exp=1711004680~hmac=72e4c1f6c26c28d257c06e38ff44e3784beeae8c28e423341dcce1d37e1cd6ab",
      profession: "Freelance Writer",
      star: "5",
      review:
        "Excellent laundry hub! Clean, well-lit facility with variety of machines. Friendly staff, always willing to assist. Convenient and reliable. Highly recommended!",
    },
    {
      id: "12",
      userName: "Ryan Cooper",
      photoUrl:
        "https://img.freepik.com/free-photo/charming-guy-enjoying-his-break-garden_23-2147562344.jpg?w=1060&t=st=1711004105~exp=1711004705~hmac=37e876536a023ae2a2aca80821ef9b804512ae900a93bfb532c7b7ab150cec31",
      profession: "Engineer",
      star: "4",
      review:
        "Dependable laundry hub with good service. Well-maintained machines, clean facility. More payment options desired. Satisfactory experience for reliable laundry needs.",
    },
  ];

  return (
    <>
      <div className=" my-12 ">
        <p className="text-sm md:text-lg lg:text-xl text-center font-thin tracking-tighter">
          We Clean EveryThing
        </p>
        <h3 className=" text-lg md:text-xl lg:text-3xl text-center font-semibold">
          Our Customers <span className="font-bold">Reviews and Ratings</span>
        </h3>
      </div>
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
              <StarRating
                stars={parseInt(review?.star) || 0}
                starsize="text-xl"
              />
              <p className="text-gray-500">{review?.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewSection;
