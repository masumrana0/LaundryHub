import AboutSection from "@/Components/HomeUi/AboutSection";
import ChooseSection from "@/Components/HomeUi/ChooseSection";
import ContactUs from "@/Components/HomeUi/ContactUs";
import FQA from "@/Components/HomeUi/FQA";
import HowItsWorkSectiont from "@/Components/HomeUi/HowItsWorkSection";
import HowItsWorkSectionTwo from "@/Components/HomeUi/HowItsWorkSectionTwo";
import IntroduceService from "@/Components/HomeUi/IntroduceServices/IntroduceService";
import ReviewSection from "@/Components/HomeUi/ReviewSection";
import ServicesSection from "@/Components/HomeUi/servicesSection";
import RootLayout from "@/Components/Layout/RootLayout";
import HomeHeaderSwiper from "@/Components/headSwiper/HomeSwiper";
import AOS from "aos";

import "aos/dist/aos.css";

import { ReactElement, useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);
  return (
    <div className="bg-gray-50">
      <div className="lg:container">
        <div>
          <HomeHeaderSwiper />
        </div>

        {/* introduce-section  */}
        <div
          className="mt-20 px-5"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <IntroduceService />
        </div>

        <div data-aos="zoom-out-up" data-aos-duration="2000">
          <HowItsWorkSectionTwo />
        </div>

        {/* service section  */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
          className="container mx-auto"
        >
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
          <div className="container mx-auto">
            <ReviewSection />
          </div>
        </div>

        <div data-aos="zoom-out" data-aos-duration="1000">
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
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
