import RootLayout from "@/Components/Layout/RootLayout";
import React, { ReactElement } from "react";
import banner from "/public/about/banner.png";
import Image from "next/image";
import AboutSection from "@/Components/HomeUi/AboutSection";

const AboutPage = () => {
  return (
    <div className="pb-10 bg-gray-50">
      <div className="  bg-green-100 py-10 lg:py-20 ">
        {/* <p className="text-xl text-center font-thin tracking-tighter">
            We Clean EveryThing
          </p> */}
        <h3 className="text-gray-600 text-2xl md:text-3xl lg:text-4xl text-center font-bold">
          About
        </h3>
      </div>

      <div className=" mb-10">
        <AboutSection />
      </div>

      <div className="md:container flex items-center justify-center bg-gray-800   ">
        <div className="  flex flex-col md:flex-row w-full max-w-6xl gap-5 md:gap-0">
          <div className="md:w-1/2 h-[40rem]  pt-10">
            <Image
              src={banner}
              width={500}
              height={500}
              className="h-full "
              alt="banner img"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center px-6 py-5   text-left ">
            <p className="text-md md:text-lg font-semibold text-white">
              Dry Cleaning is the latest dry cleaning & laundry service with
              many types of the quality cleaning process. It is a star laundry
              service replacing the local launderette or dry cleaner. Dry
              Cleaning offers a quick & reliable laundry pick-up service
              directly from your home. Using our laundry App, you can place your
              online laundry order easily through the website.
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-green-500 mt-5">
              Drycleaners always provide hassle-free doorstep delivery.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
