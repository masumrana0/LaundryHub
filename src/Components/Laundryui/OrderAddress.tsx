import { FaLocationDot, FaCar, FaMoneyBill1 } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "@/Redux/hook";
import { useState } from "react";
import { IBooking, IBookingService } from "@/Interface/booking";
import { useSubmitBookingRequetMutation } from "@/Redux/api/bookingApi";
import { AwardIcon } from "lucide-react";
import toast from "react-hot-toast";
import clsx from "clsx";
import { log } from "console";

const UserAddressSection = () => {
  const { register, handleSubmit, reset } = useForm();
  const selectedServiceData = useAppSelector(
    (state) => state.order.laundryProducts
  );
  const grandPrice = useAppSelector((state) => state.order.grandPrice);

  const [bookingRequest, { isLoading, isError }] =
    useSubmitBookingRequetMutation();

  const services: IBookingService[] = [];
  if (selectedServiceData.length >= 1) {
    for (const bookingService of selectedServiceData) {
      const modifiyBookingService: IBookingService = {
        service: bookingService?.service?.service as string,
        cleaningProduct: bookingService?._id as string,
        cleaningProductItem: bookingService?.quntity as number,
      };

      services.push(modifiyBookingService);
    }
  }

  const handleSubmitBooking = async (data: {
    deliveryDate: Date;
    pickupDate: Date;
    address: string;
    email: string;
    phoneNumber: string;
  }) => {
    const booking: IBooking = {
      ...data,
      grandPrice: grandPrice,
      services: services,
    };

    const res = await bookingRequest(booking);
    if (res?.data?.statusCode == 200) {
      toast.success("Your booking requst has been send successfuly");
      reset();
    }
  };

  return (
    <div>
      {/* header section  */}
      <div className="mb-10">
        <h2 className="text-center font-bold lg:text-xl mb-1 border-b-4 border-green-500  pb-3   ">
          Modify Pickup & Drop-off Information
        </h2>
      </div>

      {/* order pickup to delivery date section */}

      <div className="mb-5">
        <h2 className="flex items-center text-xl gap-2 font-bold text-green-500 mb-5 border-b-2">
          <FaCar /> Schedule
        </h2>
        <h4 className="text-sm text-gray-500">
          Within the next 30 minutes, a expert will reach your provided address.
        </h4>
      </div>

      {/* address section  */}
      <div className="mb-10">
        <h2 className="flex items-center text-xl gap-2 font-bold text-green-500 mb-5 border-b-2">
          <FaLocationDot /> Address
        </h2>
        <form onSubmit={handleSubmit(handleSubmitBooking)}>
          <div className=" inline-flex gap-10 mb-10">
            <div>
              <h3 className="text-gray-500 text-sm">Pickup Date</h3>
              <input
                {...register("pickupDate")}
                type="date"
                id="pickupDate"
                name="pickupDate"
                required
                className="border-b-2 border-green-500  rounded pb-2 outline-none"
              />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">Delivery Date</h3>
              <input
                {...register("deliveryDate")}
                type="date"
                id="deliveryDate"
                name="deliveryDate"
                required
                className=" rounded border-b-2 border-green-500 pb-2 outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-5">
            <h3 className="mb-1 font-bold">PhoneNumber</h3>
            <input
              {...register("phoneNumber")}
              className="w-full border me-5 hover:border-green-400  p-2 outline-none focus:outline-none"
              type="number"
              name="phoneNumber"
              required
              placeholder="0180000000"
              id="number"
            />
          </div>
          <div className="mb-5">
            <h3 className="mb-1 font-bold">E-mail</h3>
            <input
              {...register("email")}
              className="w-full border hover:border-green-400  p-2 outline-none focus:outline-none"
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
              {...register("address")}
              id="address"
              name="address"
              placeholder="Write your address"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              rows={4}
              required
            ></textarea>
          </div>
          {/* payment method section */}
          <div>
            <h2 className="flex items-center text-xl gap-2 font-bold text-green-500 mb-5 border-b-2">
              <FaMoneyBill1 /> Payment Method
            </h2>
            <p className="text-sm text-gray-500 mb-4 ">
              Expert will collect your payment after delivery your order
            </p>
            <div className="flex gap-5">
              <input type="radio" name="" id="" className="" checked />{" "}
              <h3 className="font-bold">Cash on delivery</h3>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className=" border px-10 py-2 rounded-xl bg-green-400 hover:bg-green-900 text-white font-bold
            transition-colors duration-300"
            >
              Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAddressSection;
