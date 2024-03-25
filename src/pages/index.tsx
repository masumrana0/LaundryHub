import AboutSection from "@/Components/HomeUi/AboutSection";
import ChooseSection from "@/Components/HomeUi/ChooseSection";
import ContactUs from "@/Components/HomeUi/ContactUs";
import FQA from "@/Components/HomeUi/FQA";
import HowItsWorkSectiont from "@/Components/HomeUi/HowItsWorkSection";
import HowItsWorkSectionTwo from "@/Components/HomeUi/HowItsWorkSectionTwo";
import IntroduceService from "@/Components/HomeUi/IntroduceServices/IntroduceService";
import ReviewSection from "@/Components/HomeUi/ReviewSection";
// import ServicesSection from "@/Components/HomeUi/servicesSection";
import RootLayout from "@/Components/Layout/RootLayout";
import HomeHeaderSwiper from "@/Components/headSwiper/HomeSwiper";
import { ReactElement, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa6";
import FacebookChat from "@/Components/FacebookChat/FacebookChat";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYPosition = window.scrollY;

      setIsVisible(scrollYPosition > 300);
    };

    // Check if window is defined (running in the browser)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Cleanup function to remove event listener
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="bg-gray-50 pb-20">
      <button
        className={`fixed bottom-20 border-2 right-1 md:right-[12rem] bg-green-500 text-white p-4 rounded-full z-50 ${
          isVisible ? "block" : "hidden"
        }`}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <FaArrowUp className="animate-bounce text-xl" />
      </button>

      <div id="top" className="lg:container">
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

        <div data-aos="fade-up" data-aos-duration="1500" className="mx-3">
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
        <FacebookChat/>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
