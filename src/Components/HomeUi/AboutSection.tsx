import Image from "next/image";
import aboutBanner from "/public/assets/pexels-max-avans-5087727.jpg";

const AboutSection = () => {
  return (
    <div className="container mx-auto relative">
      <div className="  bg-[#005477] text-white lg:w-1/2 lg:h-[500px] lg:p-20 p-5 ">
        <h2 className="font-bold lg:text-6xl lg:mb-5 text-5xl lg:text-start    mt-60 lg:mt-0 border-b-4 inline-block border-blue-500 ">
          About
        </h2>
        <p className="lg:w-[90%] lg:text-lg lg:mt-0 mt-3 ">
          LaundryHub, a modern and innovative laundry service, has emerged as a
          game-changer in the world of garment care, redefining how we approach
          this everyday chore. LaundryHub is not just a laundry service; it is a
          complete laundry solution that prioritizes quality, convenience, and
          sustainability. With a strong commitment to delivering exceptional
          results, it has quickly gained a reputation as the go-to laundry
          service for individuals and families looking for a hassle-free and
          reliable experience. In the fast-paced world we live in today, the
          demand for convenient and efficient services has never been higher.
          One such service that plays an essential role in our daily lives is
          laundry.
        </p>
      </div>
      <div className="absolute  lg:right-[5rem] lg:top-[5rem] lg:w-1/2 lg:h-[500px]  top-0 ">
        <Image
          className=" lg:w-[800px] lg:h-[500px] h-[250px]"
          src={aboutBanner}
          width="500"
          height="500"
          alt="cloth img"
        />
      </div>
    </div>
  );
};

export default AboutSection;
