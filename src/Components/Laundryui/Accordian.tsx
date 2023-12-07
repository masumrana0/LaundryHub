/**
 * Title: 'accordion for loaudry page'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 07-12-2023
 *
 */

import { ICloth } from "@/Interface/types";
import fetchData from "@/fetchData(CSR)/fetchData";
import { ManOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";
import React, { useState, useEffect } from "react";


const Accordions = () => {
  const [datas, setData] = useState<ICloth[] | null>(null);
  const [menCollection, setMenCollection] = useState<ICloth[]>([]);
  const [womanCollection, setWomanCollection] = useState<ICloth[]>([]);
  const [homeCollection, setHomeCollection] = useState<ICloth[]>([]);

  if (datas) {
    datas?.map((data: ICloth) => {
      if (data?.category === "men") {
        const doesExist = menCollection.find(
          (isExist) => isExist?._id == data?._id
        );
        if (!doesExist) {
          return menCollection.push(data);
        }
      } else if (data?.category === "woman") {
        const doesExist = womanCollection.find(
          (isExist) => isExist?._id == data?._id
        );
        if (!doesExist) {
          return womanCollection.push(data);
        }
      } else {
        const doesExist = homeCollection.find(
          (isExist) => isExist?._id == data?._id
        );
        if (!doesExist) {
          return homeCollection.push(data);
        }
      }
    });
  }

  useEffect(() => {
    fetchData(`http://localhost:4000/api/v1/cloth`, setData).catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  const [accordions, setAccordions] = useState<AccordionItem[]>([
    {
      id: 1,
      isOpen: false,
      title: "Accordion Title 1",
      imgUrl: "image_url_1.jpg",
      contents: menCollection,
    },
    {
      id: 2,
      isOpen: false,
      title: "Accordion Title 2",
      imgUrl: "image_url_2.jpg",
      contents: womanCollection,
    },
    {
      id: 3,
      isOpen: false,
      title: "Accordion Title 3",
      imgUrl: "image_url_3.jpg",
      contents: homeCollection,
    },
  ]);

  // console.log(accordions);
  const toggleAccordion = (id: number) => {
    const updatedAccordions = accordions.map((accordion) =>
      accordion.id === id
        ? { ...accordion, isOpen: !accordion.isOpen }
        : accordion
    );
    setAccordions(updatedAccordions);
  };

  return (
    <div>
      {accordions.map((accordion) => (
        <div
          key={accordion.id}
          className="border rounded-md mb-4 overflow-hidden"
        >
          <div
            className="flex items-center justify-between p-4 bg-gray-200 cursor-pointer"
            onClick={() => toggleAccordion(accordion.id)}
          >
            <div className="flex items-center space-x-2">
              <img
                src={accordion.imgUrl}
                alt={`Image ${accordion.id}`}
                className="w-10 h-10"
              />
              <h3 className="text-lg font-semibold">{accordion.title}</h3>
            </div>
            <span className="text-xl transition-transform transform">
              {accordion.isOpen ? "-" : "+"}
            </span>
          </div>
          <div
            className={`overflow-y-auto transition-height duration-300 ease-in-out ${
              accordion.isOpen ? "h-auto" : "h-0"
            }`}
            style={{ maxHeight: accordion.isOpen ? "200px" : "0px" }}
          >
            {accordion.contents.map((content: ICloth) => (
              <div className="p-4 bg-white">
                <h2>{content.name}</h2>
                <p>{content.category}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordions;
