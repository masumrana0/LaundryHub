import {
  FaCar,
  FaMoneyBill1Wave,
  FaMedal,
  FaLeaf,
  FaStreetView,
  FaHandHoldingDollar,
} from "react-icons/fa6";

const ChooseSection = () => {
  return (
    <div className="mx-auto mt-32 px-4 lg:px-7">
      <div className=" my-12 ">
        <p className="text-xl text-center font-thin tracking-tighter">
          We Clean EveryThing
        </p>
        <h3 className="text-3xl text-center font-semibold">
          Why We're <span className="font-bold">Your Best Choice</span>
        </h3>
      </div>

      {/* card  */}
      <div className="flex flex-wrap gap-10 justify-center">
        {/* card 1 */}
        <div className="w-full sm:w-1/2 lg:w-[350px] border p-6 group mx-auto shadow-lg rounded">
          {/* icon section */}
          <div className="flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full bg-gray-100">
            <FaStreetView className="text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out" />
          </div>
          {/* text section */}
          <div>
            <h2 className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700">
              Clean and Sanitary
            </h2>
            <p className="text-gray-600">
              Your clothing receives a hygienic washing, leaving them both
              germ-free and immaculate. It's a fresh approach to your laundry!
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full sm:w-1/2 lg:w-[350px] border p-6 group mx-auto shadow-lg rounded">
          {/* icon section */}
          <div className="flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full bg-gray-100">
            <FaCar className="text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out" />
          </div>
          {/* text section */}
          <div>
            <h2 className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700">
              Free Pickup & Delivery
            </h2>
            <p className="text-gray-600">
              We offer convenient doorstep collection, and your clothing will be
              delivered punctually, as fresh as a daisy.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full sm:w-1/2 lg:w-[350px] border p-6 group mx-auto shadow-lg rounded">
          {/* icon section */}
          <div className="flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full bg-gray-100">
            <FaHandHoldingDollar className="text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out" />
          </div>
          {/* text section */}
          <div>
            <h2 className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700">
              Affordable
            </h2>
            <p className="text-gray-600">
              At no extra cost, you pay the same price as set by your chosen
              laundry provider, ensuring affordability and convenience for your
              laundry needs.
            </p>
          </div>
        </div>
        {/* card 4 */}
        <div className="w-full sm:w-1/2 lg:w-[350px] border p-6 group mx-auto shadow-lg rounded">
          {/* icon section */}
          <div className="flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full bg-gray-100">
            <FaMoneyBill1Wave className="text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out" />
          </div>
          {/* text section */}
          <div>
            <h2 className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700">
              Honest Pricing
            </h2>
            <p className="text-gray-600">
              At a budget-friendly rate, our services are competitively priced
              and often more affordable than other local laundry services in
              your vicinity.
            </p>
          </div>
        </div>
        {/* card 5 */}
        <div className="w-full sm:w-1/2 lg:w-[350px] border p-6 group mx-auto shadow-lg rounded">
          {/* icon section */}
          <div className="flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full bg-gray-100">
            <FaLeaf className="text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out" />
          </div>
          {/* text section */}
          <div>
            <h2 className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700">
              Eco-Conscious
            </h2>
            <p className="text-gray-600">
              This version clarifies the relationship between local residents,
              the laundry services, and the positive sentiment.
            </p>
          </div>
        </div>
        {/* card 6 */}
        <div className="w-full sm:w-1/2 lg:w-[350px] border p-6 group mx-auto shadow-lg rounded">
          {/* icon section */}
          <div className="flex justify-center items-center w-[105px] h-[110px] mx-auto rounded-full bg-gray-100">
            <FaMedal className="text-green-400 text-[50px] group-hover:scale-[2] transition-transform duration-700 ease-in-out" />
          </div>
          {/* text section */}
          <div>
            <h2 className="text-2xl my-3 font-semibold group-hover:text-green-400 transition-colors duration-700">
              Satisfaction Guarantee
            </h2>
            <p className="text-gray-600">
              We are laundry industry experts, staying current with the latest
              technologies to provide you with the best service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
