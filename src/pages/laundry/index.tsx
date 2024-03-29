/**
 * Title: 'laundry service and booking ui'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 07-01-2024
 *
 */

import Accordion from "@/Components/Laundryui/Accordian";
import UserAddressSection from "@/Components/Laundryui/OrderAddress";
import OrderSection from "@/Components/Laundryui/OrderSection";
import RootLayout from "@/Components/Layout/RootLayout";
import { ISelectService } from "@/Interface/booking";
import { useGetAllServiceWithAnyTermQuery } from "@/Redux/api/serviceApi";
import { selectIsLoggedIn } from "@/Redux/features/auth/authSlice";
import { addSelectService } from "@/Redux/features/order/orderSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React, { ReactElement, useEffect } from "react";

const Laundry = () => {
  // handle private page
  const router = useRouter();
  const isLogged = useAppSelector(selectIsLoggedIn);
  useEffect(() => {
    if (!isLogged) {
      return router.push("/auth");
    }
  }, [router]);

  // redux
  const dispatch = useAppDispatch();
  const selectedService = useAppSelector((state) => state.order.service);
  const bookingState = useAppSelector((state) => state.order.bookingState);

  const { data } = useGetAllServiceWithAnyTermQuery(null);
  const serviceTitles = data;

  // console.log(service);
  const handleAddService = (data: string) => {
    const selectedService = serviceTitles.find(
      (service: ISelectService) => service.title == data
    );
    dispatch(addSelectService(selectedService));
  };

  return (
    <div className="md:container sm:mx-auto mx-5 pb-20 ">
      {/* Heading of the page  */}
      <div
        className={`lg:my-10 my-5 flex flex-col lg:flex-row lg:justify-between items-center ${
          bookingState ? "hidden" : ""
        } `}
      >
        <div>
          <p className="mt-5 font-semibold text-lg text-green-500">
            We Clean Eeverything
          </p>
          <h3 className="text-3xl font-semibold text-green-500">
            {selectedService?.title}
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-5">
          <p className="text-gray-700 text-center lg:text-start ">
            Want to change service
          </p>
          <select
            name="cars"
            id="carSelect"
            onChange={(e) => handleAddService(e.target.value)}
            value={selectedService.title}
            className="w-50 border-1 border-white bg-green-500 text-white font-semibold rounded px-4 py-2 transition-all duration-300 focus:border-green-700 focus:outline-none hover:bg-green-700 hover:border-green-700"
          >
            {serviceTitles?.map((title: { title: string; _id: string }) => (
              <option key={title?._id} value={title?.title}>
                {title?.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Botom page oƒ the laundry page  */}
      <div className="flex flex-col lg:flex-row justify-center  gap-5">
        {/* accordian section */}
        <div
          className={`${
            bookingState ? "lg:w-[50%]" : "lg:w-[55%]"
          }     p-1 lg:p-10 `}
        >
          {bookingState ? <UserAddressSection /> : <Accordion />}
        </div>

        {/* order section  */}
        <div
          className={`${
            bookingState ? "lg:w-[55%]" : "lg:w-[45%]"
          }  shadow-lg    mt-5  `}
        >
          <OrderSection />
        </div>
      </div>
    </div>
  );
};

export default Laundry;

Laundry.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
