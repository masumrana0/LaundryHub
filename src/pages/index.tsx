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
import { ReactElement, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-gray-50">
      <div className="lg:container">
        <div>
          <HomeHeaderSwiper />
        </div>

        {/* introduce-section  */}
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="mt-20 px-5 green box"
        >
          <IntroduceService />
        </div>

        <div data-aos="zoom-in-up" data-aos-duration="1500">
          <HowItsWorkSectionTwo />
        </div>

        {/* service section  */}
        {/* <div
         
          className="md:container md:mx-auto mx-5 "
        >
          <ServicesSection />
        </div> */}
        {/* how to work section  */}
        <div data-aos="zoom-in" data-aos-duration="1500">
          <HowItsWorkSectiont />
        </div>

        {/* why choose use section*/}
        <div data-aos="zoom-in-down" data-aos-duration="1500">
          <ChooseSection />
        </div>

        {/* review and rating section */}

        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="mx-auto py-10"
        >
          <div className="lg:container mx-auto">
            <ReviewSection />
          </div>
        </div>

        <div data-aos="zoom-out" data-aos-duration="1500" className="mx-3">
          <FQA />
        </div>

        {/* contact us section  */}
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          className="md:container  md:mx-auto mx-3 "
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
