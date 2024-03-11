import ChooseSection from "@/Components/HomeUi/ChooseSection";
import ContactUs from "@/Components/HomeUi/ContactUs";
import FQA from "@/Components/HomeUi/FQA";
import HowItsWorkSectiont from "@/Components/HomeUi/HowItsWorkSection";
import IntroduceService from "@/Components/HomeUi/IntroduceServices/IntroduceService";
import ServicesSection from "@/Components/HomeUi/servicesSection";
import RootLayout from "@/Components/Layout/RootLayout";
import HomeHeaderSwiper from "@/Components/headSwiper/HomeSwiper";
import "aos/dist/aos.css";
import { ReactElement } from "react";

const HomePage = () => {
  return (
    <div className="lg:container">
      {/* introduce-section  */}
      <div>{/* <HomeHeaderSwiper /> */}</div>

      <div>{/* <HowItsWorkSectionTwo /> */}</div>

      <div
        className="mt-8 px-5"
        data-aos="zoom-in-right"
        data-aos-duration="2000"
      >
        {/* <IntroduceService /> */}
      </div>

      {/* about Section  */}
      {/* <div
        data-aos="zoom-in-right"
        data-aos-duration="2000"
        id="about"
        className=" bg-[#5cb8ff] lg:p-20 mt-10 p-5  lg:pt-0  "
      >
        <AboutSection />
      </div> */}

      {/* service section  */}
      {/* <div className="container mx-auto">
        <ServicesSection />
      </div> */}
      {/* how to work section  */}
      {/* <div data-aos="flip-right" data-aos-duration="2000">
        <HowItsWorkSectiont />
      </div> */}

      {/* why choose use section*/}
      <div data-aos="zoom-in-left" data-aos-duration="2000">
        {/* <ChooseSection /> */}
      </div>

      {/* review and rating section */}

      <div
        className="mx-auto py-10"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
      >
        {/* <div className="flex justify-center">
          <h2 className="inline-block border-b-4 border-green-500 font-bold lg:text-5xl text-3xl my-20">
            Review & Rating
          </h2>
        </div> */}
        <div className="container mx-auto">
          {/* <ReviewSection reviews={reviews.data} /> */}
        </div>
      </div>

      <div>
        <FQA />
      </div>

      {/* contact us section  */}
      <div
        className="container mx-auto "
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        {/* <ContactUs /> */}
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
