import ServiceSwiper from "./ServiceSwiper";
const IntroduceService = () => {
  return (
    <div className="lg:container mx-auto  lg:flex  lg:flex-row-reverse  lg:justify-center lg:items-center ">
      <div className="w-full lg:w-1/2">
        <ServiceSwiper />
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-xl lg:text-3xl font-semibold">
          High-Quality
          <span className="text-green-400">
            {" "}
            Laundry and Ironing Service
          </span>{" "}
          Delivered to Your Doorstep
        </h2>

        <p className="mt-5 text-lg lg:text-2xl">
          Our Wash & Iron service is designed to make your life easier and more
          convenient. We understand the importance of clean and freshly pressed
          clothes in your daily routine. Whether you&apos;re a busy
          professional, a parent, or simply someone who values their time, our
          service is tailored to meet your laundry needs with the utmost care
          and quality.
        </p>
        <button className="mt-3 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          View Services
        </button>
      </div>
    </div>
  );
};

export default IntroduceService;
