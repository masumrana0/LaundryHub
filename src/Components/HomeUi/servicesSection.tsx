import Image from "next/image";
import { FaFaceSmile } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../style/Homeui.module.css";

const ServicesSection = () => {
  return (
    <div id="service">
      <div className="text-center font-thin text-sm md:text-md lg:text-xl mt-32 mb-10 ">
        <p>We Clean Everything</p>
        <h2 className="text-lg md:text-xl lg:text-3xl font-normal ">
          Always the <span className="font-bold">Best Service</span>
        </h2>
      </div>
      <Swiper
        // spaceBetween={}
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
        <div>
          <SwiperSlide>
            <div
              className={`w-[300px]   hover:border-green-400 rounded  text-center c  border relative ${style.servicesCard} `}
            >
              <Image
                src="https://img.freepik.com/free-photo/cheerful-young-girl-washes-windows-with-green-towel_176420-8407.jpg?w=1060&t=st=1701429399~exp=1701429999~hmac=b7ca6ceb6e5e4647254e00e873b098df517baa91f63258b7447d05a65166788f"
                width={200}
                height={100}
                alt="Wet Cleaning"
                className="w-full   h-[150px]"
              />
              <div
                className={`flex justify-center items-center w-[50px] h-[50px]  mx-auto rounded-full  bg-green-300  absolute    top-[8rem] ${style.homeEmojiCircle}`}
              >
                <FaFaceSmile className="text-xl   text-white " />
              </div>
              <div className=" p-2">
                <h2 className="font-bold text-md sm:text-lg md:text-xl   mb-2 mt-5  ">
                  Wet Cleaning
                </h2>
                <p className=" text-gray-400  text-sm lg:text-md">
                  Utilizing water-based solutions and specialized equipment, wet
                  cleaning effectively treats delicate fabrics, removing .
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`w-[300px] hover:border-green-400 rounded  text-center   border relative ${style.servicesCard} `}
            >
              <Image
                src="https://img.freepik.com/free-photo/young-african-american-man-doing-laundry_273609-23249.jpg?w=1060&t=st=1701439470~exp=1701440070~hmac=1b91092cbf7425cf23e0408f8cc29daba631fe265f14c7f0ad47bdb5721d02c4"
                width={200}
                height={100}
                alt="Wet Cleaning"
                className="w-full  h-[150px]"
              />
              <div
                className={`flex justify-center items-center w-[50px] h-[50px]  mx-auto rounded-full  bg-green-300  absolute    top-[8rem] ${style.homeEmojiCircle}`}
              >
                <FaFaceSmile className="text-xl   text-white " />
              </div>
              <div className="p-2">
                <h2 className="font-bold text-md sm:text-lg md:text-xl   mb-2 mt-5  ">
                  Eco-Friendly Cleaning
                </h2>
                <p className=" text-gray-400  text-sm lg:text-md">
                  Employing environmentally friendly detergents and methods,
                  this service focuses on reducing the carbon footprint while
                  maintaining exceptional cleaning standards.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`w-[300px] hover:border-green-400 rounded  text-center  border relative ${style.servicesCard} `}
            >
              <Image
                src="https://img.freepik.com/free-photo/woman-cleaning-sheepskin-with-whisk-broom_1398-432.jpg?w=1060&t=st=1701439571~exp=1701440171~hmac=65af05d1f7e8934646620461a1939c53a2eafce5dcebdecb98c939f78e13cf03"
                width={200}
                height={100}
                alt="Wet Cleaning"
                className="w-full   h-[150px]"
              />
              <div
                className={`flex justify-center items-center w-[50px] h-[50px]  mx-auto rounded-full  bg-green-300  absolute    top-[8rem] ${style.homeEmojiCircle}`}
              >
                <FaFaceSmile className="text-xl   text-white " />
              </div>
              <div className="p-2">
                <h2 className="font-bold text-md sm:text-lg md:text-xl   mb-2 mt-5 ">
                  Leather Cleaning
                </h2>
                <p className=" text-gray-400  text-sm lg:text-md">
                  Catering specifically to leather and suede garments, this
                  service employs techniques that preserve the material's
                  integrity while removing stains and restoring.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`w-[300px] hover:border-green-400 rounded  text-center   border relative ${style.servicesCard} `}
            >
              <Image
                src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-smelling-clean-clothes_23-2148246495.jpg?w=740&t=st=1701440094~exp=1701440694~hmac=0828a719ca8127ea9b057d3889199c29e5b918db54e95cc58de658da84782d4f"
                width={200}
                height={100}
                alt="Wet Cleaning"
                className="w-full   h-[150px]"
              />
              <div
                className={`flex justify-center items-center w-[50px] h-[50px]   mx-auto rounded-full  bg-green-300  absolute    top-[8rem] ${style.homeEmojiCircle}`}
              >
                <FaFaceSmile className="text-xl   text-white " />
              </div>
              <div className="p-2">
                <h2 className="font-bold text-md sm:text-lg md:text-xl   mb-2 mt-5 ">
                  Uniform Cleaning
                </h2>
                <p className=" text-gray-400  text-sm lg:text-md">
                  Specifically designed for work uniforms, this service ensures
                  garments are thoroughly cleaned, removing stains and
                  maintaining professional appearance.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`w-[300px] hover:border-green-400 rounded  text-center   border relative ${style.servicesCard} `}
            >
              <Image
                src="https://img.freepik.com/free-photo/closeup-shot-male-helping-her-wife-wearing-bridal-dress_181624-33692.jpg?w=1060&t=st=1701440499~exp=1701441099~hmac=d0008e94244885eab6183962ed70be0f866afea3d7c2ea4c82a54a3c0ef3e2b9"
                width={200}
                height={100}
                alt="Wet Cleaning"
                className="w-full   h-[150px]"
              />
              <div
                className={`flex justify-center items-center w-[50px] h-[50px]   mx-auto rounded-full  bg-green-300  absolute    top-[8rem] ${style.homeEmojiCircle}`}
              >
                <FaFaceSmile className="text-xl   text-white " />
              </div>
              <div className="p-2">
                <h2 className="font-bold text-md sm:text-lg md:text-xl   mb-2 mt-5  ">
                  Dress Preservation
                </h2>
                <p className=" text-gray-400  text-sm lg:text-md">
                  Specialized in delicate fabrics and intricate designs, this
                  service cleans and preserves wedding gowns, preventing
                  discoloration and fabric degradation.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`w-[300px] hover:border-green-400 rounded  text-center  border relative ${style.servicesCard} `}
            >
              <Image
                src="https://img.freepik.com/free-photo/closeup-shot-male-helping-her-wife-wearing-bridal-dress_181624-33692.jpg?w=1060&t=st=1701440499~exp=1701441099~hmac=d0008e94244885eab6183962ed70be0f866afea3d7c2ea4c82a54a3c0ef3e2b9"
                width={200}
                height={100}
                alt="Wet Cleaning"
                className="w-full   h-[150px]"
              />
              <div
                className={`flex justify-center items-center w-[50px] h-[50px]  mx-auto rounded-full  bg-green-300  absolute    top-[8rem] ${style.homeEmojiCircle}`}
              >
                <FaFaceSmile className="text-xl  text-white " />
              </div>
              <div className="p-2">
                <h2 className="font-bold text-md sm:text-lg md:text-xl   mb-2 mt-5  ">
                  Dress Preservation
                </h2>
                <p className=" text-gray-400  text-sm lg:text-md">
                  Specialized in delicate fabrics and intricate designs, this
                  service cleans and preserves wedding gowns, preventing
                  discoloration and fabric degradation.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default ServicesSection;
