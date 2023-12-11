/**
 * Title: 'Laoundry service provide or sevice order page'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 07-12-2023
 *
 */
import Accordion from "@/Components/Laundryui/Accordian";
import RootLayout from "@/Components/Layout/RootLayout";
import { ICloth } from "@/Interface/types";
import { useAppSelector } from "@/Redux/hook";
import fetchData from "@/fetchData(CSR)/fetchData";
import React, { useState, useEffect, ReactElement } from "react";

const Laundry = () => {
  const [service, setService] = useState("Wash & Iron Service");
  const { laundryProducts } = useAppSelector((state) => state.order);

  return (
    <div className="container mx-auto">
      {/* Heading of the page  */}
      <div className="lg:my-10 my-5 flex flex-col-reverse lg:flex-row lg:justify-between items-center ">
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
      <div className="flex justify-center gap-10">
        {/* accordian section */}
        <div className="lg:w-[65%]">
          {" "}
          <Accordion />
        </div>

        {/* order section  */}
        <div
          className={` lg:w-[33%] overflow-y-auto transition-height duration-300 ease-in-out h-auto border shadow-lg p-10 `}
        >
          <div className="text-center border-b-2 mb-10 ">
            <h2 className="font-bold text-blue-400 text-3xl">Your Order</h2>
            <p className="mb-2 text-gray-500">Total Item: 0</p>
          </div>

          <div>
            {laundryProducts.map((laundryProduct) => (
              <div className="border rounded" key={laundryProduct._id}>
                <h2>{laundryProduct.name}</h2>
              </div>
            ))}
          </div>

          <div>
            <div className="">
              <div className="flex justify-between items-center mb-5 ">
                <h3 className="font-bold">Sub Total</h3>
                <span className="text-lg font-extrabold text-blue-400">
                  &#2547;
                  <span className="font-semibold text-md"> 0</span>
                </span>
              </div>

              <div className="flex justify-between items-center mb-5 ">
                <h3 className="font-bold">Delivery Charge</h3>
                <span className="text-lg font-extrabold text-blue-400">
                  &#2547;
                  <span className="font-semibold text-md"> 0</span>
                </span>
              </div>

              <div className="flex justify-between  items-center">
                <h3 className="font-bold">Grand Total</h3>{" "}
                <span className="text-lg font-extrabold text-blue-400">
                  &#2547;
                  <span className="font-semibold text-md"> 0</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laundry;

Laundry.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
