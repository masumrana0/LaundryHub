/**
 * Title: 'Laoundry service provide or sevice order page'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 07-12-2023
 *
 */
import Accordion from "@/Components/Laundryui/Accordian";
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
          <div className="text-center border-b-2 mb-1  bg-blue-400 py-6 text-white ">
            <h2 className="font-bold   text-3xl">Your Order</h2>
            <p className="mb-2 text-lg">Total Item: {laundryProducts.length}</p>
          </div>

          <div
            className={`  overflow-y-auto h-[300px] lg:h-[400px]   transition-height duration-300 ease-in-out   border  `}
          >
            <div>
              {laundryProducts?.map((laundryProduct) => (
                <div
                  className="border-2 rounded shadow-lg shadow-blue-400    mb-2"
                  key={laundryProduct._id}
                >
                  <p className="text-center font-semibold text-lg text-gray-600">
                    {laundryProduct.service}
                  </p>
                  <div className="py-2 px-4 flex justify-between item-center">
                    <h2 className="font-semibold lg:text-xl ">
                      {laundryProduct.name}
                    </h2>
                    <p>
                      <span className="text-xl font-extrabold  text-blue-400">
                        &#2547;
                        <span className="font-semibold text-md">
                          {" "}
                          {laundryProduct?.price}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" p-10   ">
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

              {
                <div className="flex justify-center mt-5 ">
                  <button
                    disabled={laundryProducts.length === 0}
                    className={`border px-4 py-3  font-bold text-white rounded-lg ${
                      laundryProducts.length === 0
                        ? " bg-gray-500 text-gray-300"
                        : "bg-blue-400"
                    }`}
                  >
                    Check Out Your Order
                  </button>
                </div>
              }
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
