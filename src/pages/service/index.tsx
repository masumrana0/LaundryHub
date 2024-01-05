import RootLayout from "@/Components/Layout/RootLayout";
import ServiceCard from "@/Components/service/ServiceCard";

import { IService } from "@/Interface/service";
import { useGetAllServiceQuery } from "@/Redux/api/serviceApi";
import React, { ReactElement } from "react";

const Service = () => {
  const { data, error, isLoading } = useGetAllServiceQuery(null);
  // console.log(data);
  return (
    <div className="bg-green-100">
      <div className="  container border p-5 ">
        <div className="mt-10 flex justify-center gap-2 ">
          <input
            type="text"
            name=""
            id=""
            className="border-2 rounded-lg border-green-400 shadow-md  w-[30%] p-2  outline-green-500     bg-green-100  "
          />
          <button className="rounded px-5 py-2 shadow-lg font-semibold bg-green-300 transition-colors duration-300 hover:bg-green-500 hover:text-white text-gray-600">
            Search
          </button>
        </div>

        <div className="mt-12 flex justify-center flex-wrap gap-10">
          {data?.data?.map((service: IService) => (
            <ServiceCard key={service?._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

Service.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
