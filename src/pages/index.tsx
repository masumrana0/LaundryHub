import AboutSection from "@/Components/Shared/HomeUi/AboutSection";
import IntroduceService from "@/Components/Shared/HomeUi/IntroduceServices/IntroduceService";
import HowItsWorkSectiont from "@/Components/Shared/HomeUi/HowItsWorkSection";
import ChooseSection from "@/Components/Shared/HomeUi/ChooseSection";
import ServicesSection from "@/Components/Shared/HomeUi/servicesSection";
import Image from "next/image";
import contactBanner from "../../public/assets/contact_us-two.jpg";
import ReviewSection from "@/Components/Shared/HomeUi/ReviewSection";
import StarRating from "@/Components/Shared/HomeUi/StarRating";
import ContactUs from "@/Components/Shared/HomeUi/ContactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactElement, useEffect } from "react";
import RootLayout from "@/Components/Layout/RootLayout";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import FirstSwiperData from "@/Components/headSwiper/FirstSwiperData";

const HomePage = ({ reviews }: any) => {
  return (
    <div>
      {/* introduce-section  */}
      <div>
        <FirstSwiperData />
      </div>

      <div
        className="mt-8 px-5"
        data-aos="zoom-in-right"
        data-aos-duration="2000"
      >
        <IntroduceService />
      </div>

      {/* about Section  */}
      <div
        data-aos="zoom-in-right"
        data-aos-duration="2000"
        id="about"
        className=" bg-[#5cb8ff] lg:p-20 mt-10 p-5  lg:pt-0  "
      >
        <AboutSection />
      </div>

      {/* service section  */}
      <div className="container mx-auto">
        <ServicesSection />
      </div>
      {/* how to work section  */}
      <div data-aos="flip-right" data-aos-duration="2000">
        <HowItsWorkSectiont />
      </div>

      {/* why choose use section*/}
      <div data-aos="zoom-in-left" data-aos-duration="2000">
        <ChooseSection />
      </div>

      {/* review and rating section */}

      <div
        className="mx-auto py-10"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
      >
        <div className="flex justify-center">
          <h2 className="inline-block border-b-4 border-blue-500 font-bold lg:text-5xl text-3xl my-20">
            Review & Rating
          </h2>
        </div>
        <div className="container mx-auto">
          <ReviewSection reviews={reviews.data} />
        </div>
      </div>

      {/* contact us section  */}
      <div
        className="container mx-auto "
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const res = await fetch(`http://localhost:4000/api/v1/reviews`);
  const reviews = await res.json();

  return { props: { reviews } };
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
