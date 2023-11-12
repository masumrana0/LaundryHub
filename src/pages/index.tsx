import AboutSection from "@/Components/Shared/HomeUi/AboutSection";
import IntroduceService from "@/Components/Shared/HomeUi/IntroduceServices/IntroduceService";
import HowItsWorkSectiont from "@/Components/Shared/HomeUi/HowItsWorkSection";
import ChooseSection from "@/Components/Shared/HomeUi/ChooseSection";
import Image from "next/image";
import contactBanner from "../../public/assets/contact_us-two.jpg";

import ReviewSection from "@/Components/Shared/HomeUi/ReviewSection";
import StarRating from "@/Components/Shared/HomeUi/StarRating";
import ContactUs from "@/Components/Shared/HomeUi/ContactUs";

const HomePage = ({ reviews }: any) => {
  return (
    <div className=" lg:px-0 mx-auto">
      {/* introduce-section  */}
      <div className="mt-8 px-5">
        <IntroduceService />
      </div>

      {/* about Section  */}
      <div className=" bg-[#5cb8ff] lg:p-20 mt-10 p-5  lg:pt-0  ">
        <AboutSection />
      </div>
      {/* how to work section  */}
      <div>
        <HowItsWorkSectiont />
      </div>

      {/* why choose use section*/}
      <div>
        <ChooseSection />
      </div>

      {/* review and rating section */}

      <div className="mx-auto py-10">
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
      <div className="container mx-auto ">
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
