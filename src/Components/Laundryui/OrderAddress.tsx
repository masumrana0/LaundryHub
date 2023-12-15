import { FaLocationDot } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";

const UserAddressSection = () => {
  return (
    <div className="  ">
      <div className="flex ">
        <div className="w-full">
          <input
            className="w-full border me-5 hover:border-blue-400  p-2 outline-none focus:outline-none"
            type="number"
            name="number"
            placeholder="0180000000"
            id="number"
          />
        </div>
        <div className="">
          <input
            className="w-full border hover:border-blue-400  p-2 outline-none focus:outline-none"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            id="email"
          />
        </div>
      </div>
    </div>
  );
};

export default UserAddressSection;
