/**
 * Title: 'accordion for loaudry page'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 07-12-2023
 *
 */

import { IAccordionItem, ILaundryProduct } from "@/Interface/types";
import fetchData from "@/fetchData(CSR)/fetchData";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import menImg from "../../../public/laundrypageimg/men.png";
import womenImg from "../../../public/laundrypageimg/woman.png";
import homeImg from "../../../public/laundrypageimg/home.png";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import {
  addToOrder,
  removeOneToOrder,
} from "@/Redux/features/order/orderSlice";
import { AccrodianContent } from "@/utilities/LaundryPageAccordianUtilites";
import { isExistedData } from "@/utilities/common/common";

const Accordion = ({ service }: { service: string }) => {
  // State to track the quantity of each product in the order
  const [productQuantities, setProductQuantity] = useState<{
    [key: string]: number;
  }>({});

  //  accordion's data /content
  const [accordions, setAccordions] = useState<IAccordionItem[]>(
    AccrodianContent()
  );

  //  redux
  const dispath = useAppDispatch();
  const { laundryProducts } = useAppSelector((state) => state.order);

  // Toogle Accrodian
  const toggleAccordion = (id: number) => {
    const updatedAccordions = accordions.map((accordion) =>
      accordion.id === id
        ? { ...accordion, isOpen: !accordion.isOpen }
        : accordion
    );
    setAccordions(updatedAccordions);
  };

  // Function to handle adding a product to the order with its quantity
  const handleAddToOrder = (order: ILaundryProduct): void => {
    const updatedPrductQuantities = {
      ...productQuantities,
      [order?._id!]: (productQuantities[order?._id!] || 0) + 1,
    };
    setProductQuantity(updatedPrductQuantities);
    const orderdata = { ...order, service: service };
    dispath(addToOrder(orderdata));
  };

  // Function to handle removing a product from the order with its quantity
  const handleRemoveFromOrder = (order: ILaundryProduct): void => {
    if (productQuantities[order?._id!] && productQuantities[order?._id!] > 0) {
      const updatedPrductQuantities = {
        ...productQuantities,
        [order?._id!]: productQuantities[order?._id!] - 1,
      };
      setProductQuantity(updatedPrductQuantities);
    }
    dispath(removeOneToOrder(order));
  };

  return (
    <div>
      {accordions?.map((accordion) => (
        <div
          key={accordion.id}
          className="border rounded-md mb-4 overflow-hidden"
        >
          <div
            className="flex items-center justify-between p-4 bg-blue-200 cursor-pointer"
            onClick={() => toggleAccordion(accordion.id)}
          >
            <div className="flex items-center space-x-2">
              <Image
                src={accordion.imgUrl}
                alt={`Image ${accordion.id}`}
                width={50}
                height={60}
                className="w-16 h-16"
              />
              <h3 className="text-lg font-semibold">{accordion.title}</h3>
            </div>
            <span className="text-xl transition-transform transform">
              {accordion.isOpen ? <FaAngleDown /> : <FaAngleUp />}
            </span>
          </div>
          <div
            className={`overflow-y-auto transition-height duration-300 ease-in-out ${
              accordion.isOpen ? "h-auto" : "h-0"
            }`}
            style={{ maxHeight: accordion.isOpen ? "500px" : "0px" }}
          >
            {accordion.contents.map((content: ILaundryProduct) => (
              <div
                key={content?._id}
                className="p-4 bg-white border   border-b-2 border-blue-200"
              >
                <h2 className="text-lg font-semibold ">{content.name}</h2>
                <div className="mt-4 flex justify-between items-center">
                  <p>
                    <span className="text-lg font-extrabold text-blue-400">
                      &#2547;
                      <span className="font-semibold text-md">
                        {" "}
                        {content?.price}
                      </span>
                    </span>
                  </p>

                  {isExistedData(content, laundryProducts) ? (
                    <div className="shadow-lg border border-blue-500 flex  items-center gap-6 text-xl   px-2 py-1 rounded-full">
                      <button
                        className="font-extrabold text-xl"
                        onClick={() => handleAddToOrder(content)}
                      >
                        +
                      </button>
                      <span>{productQuantities[content?._id!] || 0}</span>
                      <button
                        className="font-extrabold text-xl"
                        onClick={() => handleRemoveFromOrder(content)}
                      >
                        -
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddToOrder(content)}
                      className="border px-3 py-2 rounded-lg bg-blue-500  hover:bg-blue-900 text-white font-bold"
                    >
                      Add To order
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
