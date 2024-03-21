import {
  FaCar,
  FaMoneyBill1Wave,
  FaMedal,
  FaLeaf,
  FaStreetView,
  FaHandHoldingDollar,
} from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ChooseSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="  mx-auto mt-32">
      <div className="text-center lg:mb-20  mb-10">
        <h2 className="inline-block border-b-4 border-green-500 font-bold lg:text-4xl text-3xl ">
          Why We&apos;re Your Top Choice
        </h2>
      </div>

      {/* card  */}
      <div className="flex flex-wrap  gap-10   ">
        {/* card 1 */}
        <div
          className={`w-[350px] border p-6 group  mx-auto shadow-lg rounded `}
        >
          {/* icon section */}
          <div className="flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100">
            <FaStreetView className=" text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out" />
          </div>
          {/* text section */}
          <div>
            <h2
              className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700  "
              data-aos="fade-right"
              data-aos-duration="5000"
            >
              Clean and Sanitary
            </h2>
            <p
              className="text-gray-600"
              data-aos="fade-left"
              data-aos-duration="5000"
            >
              Your clothing receives a hygienic washing, leaving them both
              germ-free and immaculate. It&apos;s a fresh approach to your
              laundry!
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div
          // data-aos="flip-left"
          // data-aos-duration="2000"
          className={`w-[350px] border p-6 group  mx-auto shadow-lg rounded `}
        >
          {/* icon section */}
          <div
            className={`flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100   `}
          >
            <FaCar
              className={`  text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out  `}
            />
          </div>
          {/* text section */}
          <div>
            <h2
              // data-aos="fade-right"
              // data-aos-duration="5000"
              className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700  "
            >
              Free Pickup & Delivery
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="5000"
              className="text-gray-600"
            >
              We offer convenient doorstep collection, and your clothing will be
              delivered punctually, as fresh as a daisy.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div
          // data-aos="flip-up"
          // data-aos-duration="2000"
          className={`w-[350px] border p-6 group  mx-auto shadow-lg rounded `}
        >
          {/* icon section */}
          <div
            className={`flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100   `}
          >
            <FaHandHoldingDollar
              className={`  text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out  `}
            />
          </div>
          {/* text section */}
          <div>
            <h2
              data-aos="fade-right"
              data-aos-duration="5000"
              className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700  "
            >
              Affordable
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="5000"
              className="text-gray-600"
            >
              At no extra cost, you pay the same price as set by your chosen
              laundry provider, ensuring affordability and convenience for your
              laundry needs.
            </p>
          </div>
        </div>

        {/* card 4 */}
        <div
          // data-aos="flip-up"
          // data-aos-duration="2000"
          className={`w-[350px] border p-6 group  mx-auto shadow-lg rounded `}
        >
          {/* icon section */}
          <div
            className={`flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100   `}
          >
            <FaMoneyBill1Wave
              className={`  text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out  `}
            />
          </div>
          {/* text section */}
          <div>
            <h2
              data-aos="fade-right"
              data-aos-duration="5000"
              className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700  "
            >
              Honest Pricing
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="5000"
              className="text-gray-600"
            >
              At a budget-friendly rate, our services are competitively priced
              and often more affordable than other local laundry services in
              your vicinity
            </p>
          </div>
        </div>

        {/* card 5 */}
        <div
          // data-aos="flip-up"
          // data-aos-duration="2000"
          className={`w-[350px] border p-6 group  mx-auto shadow-lg rounded `}
        >
          {/* icon section */}
          <div
            className={`flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100   `}
          >
            <FaLeaf
              className={`  text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out  `}
            />
          </div>
          {/* text section */}
          <div>
            <h2
              data-aos="fade-right"
              data-aos-duration="5000"
              className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700  "
            >
              Eco-Conscious
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="5000"
              className="text-gray-600"
            >
              This version clarifies the relationship between local residents,
              the laundry services, and the positive sentiment.
            </p>
          </div>
        </div>

        {/* card 6 */}
        <div
          // data-aos="flip-up"
          // data-aos-duration="2000"
          className={`w-[350px] border p-6 group  mx-auto shadow-lg rounded `}
        >
          {/* icon section */}
          <div
            className={`flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full  bg-gray-100   `}
          >
            <FaMedal
              className={`  text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out  `}
            />
          </div>
          {/* text section */}
          <div>
            <h2
              data-aos="fade-right"
              data-aos-duration="5000"
              className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700  "
            >
              Satisfaction Guarantee
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="5000"
              className="text-gray-600"
            >
              We are laundry industry experts, staying current with the latest
              technologies to provide you with the best service.!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
