/**
 * Title: 'Laoundry service provide or sevice order page'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 07-12-2023
 *
 */

import Accordions from "@/Components/Laundryui/Accordian";
import Accordion from "@/Components/Laundryui/Accordian";
import RootLayout from "@/Components/Layout/RootLayout";
import { ICloth } from "@/Interface/types";
import fetchData from "@/fetchData(CSR)/fetchData";
import type { ReactElement, ReactNode } from "react";
import React, { useState, useEffect } from "react";

const Laundry = () => {
  return (
    <div className="container mx-auto">
      <h3 className="mt-5 font-semibold text-2xl">We Clean Eeverything</h3>
      <Accordions />
    </div>
  );
};

export default Laundry;

Laundry.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
