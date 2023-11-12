import AboutSection from "@/Components/Shared/HomeUi/AboutSection";
import IntroduceService from "@/Components/Shared/HomeUi/IntroduceServices/IntroduceService";
import HowItsWorkSectiont from "@/Components/Shared/HomeUi/HowItsWorkSection";
import ChooseSection from "@/Components/Shared/HomeUi/ChooseSection";
import Image from "next/image";
import contactBanner from "../../public/assets/contact_us-two.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import ReviewSection from "@/Components/Shared/HomeUi/ReviewSection";
import StarRating from "@/Components/Shared/HomeUi/StarRating";

const HomePage = ({ reviews }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
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

      {/* Contact us Section  */}

      {/* <div className="container mx-auto">
        <div className=" flex justify-center mt-32">
          <h2 className="lg:text-4xl mb-5 text-3xl text-blue-500 font-bold border-b-4 border-blue-500 inline-block">
            Contact Us
          </h2>
        </div>

        <hr className="text-bold text-blue-500 " />
      </div> */}

      <div className="mx-auto    py-10">
        <div className="flex justify-center">
          <h2 className="inline-block border-b-4 border-blue-500 font-bold lg:text-5xl text-3xl my-20">
            Review & Rating
          </h2>
        </div>
        <div className="container mx-auto">
          <ReviewSection reviews={reviews.data} />
        </div>
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
