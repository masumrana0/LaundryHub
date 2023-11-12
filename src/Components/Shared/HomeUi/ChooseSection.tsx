import {
  FaCar,
  FaMoneyBill1Wave,
  FaMedal,
  FaLeaf,
  FaStreetView,
  FaHandHoldingDollar,
} from "react-icons/fa6";

const ChooseSection = () => {
  const boxShadowStyle = {
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
  };

  return (
    <div className="container mx-auto mt-32">
      <div className="flex justify-center lg:mb-20  mb-10">
        <h2 className="text-center font-bold lg:text-4xl text-2xl text-blue-500 border-b-4 border-blue-500  inline-block ">
          Why We&apos;re Your Top Choice
        </h2>
      </div>

      {/* card  */}
      <div className=" flex justify-center flex-wrap gap-20  ">
        <div style={boxShadowStyle} className="w-[350px] border p-6 ">
          <div className="flex justify-center">
            <FaStreetView className="text-6xl text-blue-400  " />
          </div>
          <h2 className="text-2xl my-3 font-semibold">Clean and Sanitary</h2>
          <p className="text-gray-600">
            Your clothing receives a hygienic washing, leaving them both
            germ-free and immaculate. It&apos;s a fresh approach to your
            laundry!
          </p>
        </div>

        <div style={boxShadowStyle} className="w-[350px] border p-6">
          <div className="flex justify-center">
            <FaCar className="text-6xl text-blue-400  " />
          </div>
          <h2 className="text-2xl my-3 font-semibold  ">
            Free Pickup & Delivery
          </h2>
          <p className="text-gray-600">
            We offer convenient doorstep collection, and your clothing will be
            delivered punctually, as fresh as a daisy.
          </p>
        </div>

        <div style={boxShadowStyle} className="w-[350px] border p-6">
          <div className="flex justify-center">
            <FaHandHoldingDollar className="text-6xl text-blue-400  " />
          </div>
          <h2 className="text-2xl my-3 font-semibold">Affordable</h2>
          <p className="text-gray-600">
            At no extra cost, you pay the same price as set by your chosen
            laundry provider, ensuring affordability and convenience for your
            laundry needs
          </p>
        </div>

        <div style={boxShadowStyle} className="w-[350px] border p-6">
          <div className="flex justify-center">
            <FaMoneyBill1Wave className="text-6xl text-blue-400  " />
          </div>
          <h2 className="text-2xl my-3 font-semibold">Honest Pricing</h2>
          <p className="text-gray-600">
            At a budget-friendly rate, our services are competitively priced and
            often more affordable than other local laundry services in your
            vicinity
          </p>
        </div>

        <div style={boxShadowStyle} className="w-[350px] border p-6">
          <div className="flex justify-center">
            <FaLeaf className="text-6xl text-blue-400  " />
          </div>
          <h2 className="text-2xl my-3 font-semibold">Eco-Conscious</h2>
          <p className="text-gray-600">
            This version clarifies the relationship between local residents, the
            laundry services, and the positive sentiment.
          </p>
        </div>

        <div style={boxShadowStyle} className="w-[350px] border p-6">
          <div className="flex justify-center">
            <FaMedal className="text-6xl text-blue-400  " />
          </div>
          <h2 className="text-2xl my-3 font-semibold">
            Satisfaction Guarantee
          </h2>
          <p className="text-gray-600">
            We are laundry industry experts, staying current with the latest
            technologies to provide you with the best service.!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
