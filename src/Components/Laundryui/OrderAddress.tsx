import { FaLocationDot, FaCar } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";

const UserAddressSection = () => {
  return (
    <div>
      {/* header section  */}
      <div className="mb-10">
        <h2 className="text-center font-bold lg:text-lg mb-1  ">
          Modify Pickup & Drop-off Information
        </h2>
        <hr />
      </div>

      <div>
        <div className="mb-5">
          <h2 className="flex items-center text-xl gap-2 font-bold text-blue-500 mb-5 border-b-2">
            <FaCar /> Schedule
          </h2>
          <h4 className="text-sm text-gray-500">
            Within the next 30 minutes, a expert will reach your provided
            address.
          </h4>
        </div>

        <div className=" inline-flex gap-10 mb-10">
          <div>
            <h3 className="text-gray-500 text-sm">Pickup Date</h3>
            <input
              type="date"
              id="datePicker"
              className=" border-b-2 border-blue-500 rounded pb-2"
            />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Delivery Date</h3>
            <input
              type="date"
              id="datePicker"
              className=" rounded border-b-2 border-blue-500 pb-2"
            />
          </div>
        </div>
      </div>
      {/* address section  */}
      <div>
        <h2 className="flex items-center text-xl gap-2 font-bold text-blue-500 mb-5 border-b-2">
          <FaLocationDot /> Address
        </h2>
        <form className="  ">
          <div className="w-full mb-5">
            <h3 className="mb-1 font-bold">PhoneNumber</h3>
            <input
              className="w-full border me-5 hover:border-blue-400  p-2 outline-none focus:outline-none"
              type="number"
              name="number"
              required
              placeholder="0180000000"
              id="number"
            />
          </div>
          <div className="mb-5">
            <h3 className="mb-1 font-bold">E-mail</h3>
            <input
              className="w-full border hover:border-blue-400  p-2 outline-none focus:outline-none"
              type="email"
              name="email"
              required
              placeholder="example@gmail.com"
              id="email"
            />
          </div>

          <div>
            <h3 className="mb-2 font-bold">Enter your Address</h3>
            <textarea
              id="address"
              name="address"
              placeholder="Write your address"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows={4}
              required
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAddressSection;
