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
import fetchData from "@/fetchData(CSR)/fetchData";
import type { ReactElement, ReactNode } from "react";
import React, { useState, useEffect } from "react";

const Laundry = () => {
  const [datas, setData] = useState<ICloth[] | null>(null);
  const menCollection = [];
  const womanCollection = [];
  const homeCollection = [];

  if (datas) {
    datas?.map((data: ICloth) => {
      if (data?.category === "men") {
        menCollection.push(data);
      } else if (data?.category === "woman") {
        womanCollection.push(data);
      } else {
        homeCollection.push(data);
      }
    });
  }

  useEffect(() => {
    fetchData(`http://localhost:4000/api/v1/cloth`, setData).catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <h3 className="mt-5 font-semibold text-2xl">We Clean Eeverything</h3>
      <Accordion />
    </div>
  );
};

export default Laundry;

Laundry.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
