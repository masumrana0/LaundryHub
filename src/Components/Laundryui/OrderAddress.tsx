/**
 * Title: 'Order booking page'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 08-01-2024
 *
 */

// Imports
import { FaLocationDot, FaCar, FaMoneyBill1 } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/Redux/hook";
import {
  IBooking,
  IBookingForm,
  IBookingResponse,
  IBookingResult,
  IBookingService,
} from "@/Interface/booking";
import { useSubmitBookingRequetMutation } from "@/Redux/api/bookingApi";
import toast from "react-hot-toast";
import BookingResult from "./BookingResult";
import { useState } from "react";

// Component Definition
const UserAddressSection = () => {
  // React Hook Form Initialization
  const { register, handleSubmit, reset } = useForm<IBookingForm>();
  const [bookingResultData, setBookingResultData] =
    useState<IBookingResult | null>(null);

  // Redux State Usage
  const selectedServiceData = useAppSelector(
    (state) => state.order.laundryProducts
  );

  // console.log(selectedServiceData);
  const grandPrice = useAppSelector((state) => state.order.grandPrice);

  // Mutation Hook for Submitting Booking Request
  const [bookingRequest, { isLoading, isError }] =
    useSubmitBookingRequetMutation();

  // Initialize an array to store selected services
  const services: IBookingService[] = [];

  // Iterate through selected service data to create booking services array
  if (selectedServiceData.length >= 1) {
    for (const bookingService of selectedServiceData) {
      // console.log(bookingService);
      const modifiedBookingService = {
        service: bookingService.service.service,
        cleaningProduct: bookingService?._id as string,
        cleaningProductItem: bookingService?.quntity as number,
      };
      services.push(modifiedBookingService);
    }
  }

  let BookingResultData: IBookingResult | null = null;

  // Handle form submission for booking
  const handleSubmitBooking = async (data: IBookingForm) => {
    // Create booking data object
    const booking = {
      ...data,
      grandPrice: grandPrice,
      services,
    };
    console.log(booking);
    // console.log(booking);

    // Send booking request and handle response
    const res: IBookingResponse | any = await bookingRequest(booking);
    console.log(res);
    if (res?.data?.statusCode === 200) {
      toast.success("Your booking request has been sent successfully");
      reset();
    }

    setBookingResultData({
      success: res?.data?.success,
      orderId: res?.data?.data?._id,
    });
  };

  // JSX for User Address Section
  return (
    <div>
      {bookingResultData ? (
        <BookingResult bookingResult={bookingResultData} />
      ) : (
        <div>
          {/* Header Section */}
          <div className="mb-10">
            <h2 className="text-center font-bold lg:text-xl mb-1 border-b-4 border-green-500 pb-3">
              Modify Pickup & Drop-off Information
            </h2>
          </div>

          {/* Order Pickup to Delivery Date Section */}
          <div className="mb-5">
            <div className="flex  items-center gap-5 border-b-2 mb-5 text-xl font-bold text-green-500">
              <h2 className="flex items-center  gap-1    ">
                <FaCar /> Schedule
              </h2>
              <p>and</p>
              <h2 className="flex items-center   text-green-500  ">
                <FaLocationDot /> Address
              </h2>
            </div>
            <h4 className="text-sm text-gray-500">
              Within the next 30 minutes, an expert will reach your provided
              address.
            </h4>
          </div>

          {/* Address Section */}
          <div className="mb-10">
            <form onSubmit={handleSubmit(handleSubmitBooking)}>
              {/* Pickup and Delivery Date Inputs */}
              <div className="inline-flex gap-10 mb-10">
                <div>
                  <h3 className="text-gray-500 text-sm">Pickup Date</h3>
                  <input
                    {...register("pickupDate")}
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    required
                    className="border-b-2 border-green-500 rounded pb-2 outline-none"
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
                    className="rounded border-b-2 border-green-500 pb-2 outline-none"
                  />
                </div>
              </div>

              {/* Phone Number Input */}
              <div className="w-full mb-5">
                <h3 className="mb-1 font-bold">PhoneNumber</h3>
                <input
                  {...register("phoneNumber")}
                  className="w-full border me-5 hover:border-green-400 p-2 outline-none focus:outline-none"
                  type="number"
                  name="phoneNumber"
                  required
                  placeholder="0180000000"
                  id="number"
                />
              </div>

              {/* Address Textarea */}
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

              {/* Payment Method Section */}
              <div>
                <h2 className="flex items-center text-xl gap-2 font-bold text-green-500 mb-5 border-b-2">
                  <FaMoneyBill1 /> Payment Method
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  An expert will collect your payment after delivering your
                  order.
                </p>
                <div className="flex gap-5">
                  <input type="radio" name="" id="" className="" checked />{" "}
                  <h3 className="font-bold">Cash on delivery</h3>
                </div>
              </div>

              {/* Booking Button */}
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="border px-10 py-2 rounded-xl bg-green-400 hover:bg-green-900 text-white font-bold transition-colors duration-300"
                >
                  Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAddressSection;
