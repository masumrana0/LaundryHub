/**
 * Title: 'Laoundry service provide or sevice order page'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 07-12-2023
 *
 */
import Accordion from "@/Components/Laundryui/Accordian";
import OrderSection from "@/Components/Laundryui/OrderSection";
import RootLayout from "@/Components/Layout/RootLayout";

import { useAppSelector } from "@/Redux/hook";
import fetchData from "@/fetchData(CSR)/fetchData";
import React, { useState, useEffect, ReactElement } from "react";

const Laundry = () => {
  const [service, setService] = useState("Wash & Iron Service");
  const { laundryProducts } = useAppSelector((state) => state.order);

  return (
    <div className="container mx-auto">
      {/* Heading of the page  */}
      <div className="lg:my-10 my-5 flex flex-col lg:flex-row lg:justify-between items-center ">
        <div>
          <p className="mt-5 font-semibold text-lg text-blue-500">
            We Clean Eeverything
          </p>
          <h3 className="text-3xl font-semibold text-blue-500">{service}</h3>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-5">
          <p className="text-gray-700 text-center lg:text-start ">
            Want to change service
          </p>
          <select
            name="cars"
            id="carSelect"
            onChange={(e) => setService(e.target.value)}
            className="border bg-blue-400 text-white font-semibold rounded-lg border-blue-400 px-4 py-2"
          >
            <option value="Wash & Iron Service">Wash & Iron Service</option>
            <option value="Iron & Fold">Iron & Fold</option>
            <option value="Dry Cleaning">Dry Cleaning</option>
            <option value="Deep Cleaning and Iron Service">
              Deep Cleaning and Iron Service
            </option>
          </select>
        </div>
      </div>

      {/* Botom page oƒ the laundry page  */}
      <div className="flex flex-col lg:flex-row justify-center  gap-10">
        {/* accordian section */}
        <div className="lg:w-[65%] p-5  lg:p-10">
          {" "}
          <Accordion service={service} />
        </div>

        {/* order section  */}
        <div className="lg:w-[35%] shadow-lg p-4 lg:p-0   ">
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
