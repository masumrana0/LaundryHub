import RootLayout from "@/Components/Layout/RootLayout";
import LoadingSpinner from "@/Components/Shared/Loading";
import ServiceCard from "@/Components/service/ServiceCard";
import { IService } from "@/Interface/service";
import { useGetAllServiceQuery } from "@/Redux/api/serviceApi";
import { Pagination } from "antd";
import clsx from "clsx";
import { pages } from "next/dist/build/templates/app-page";
import React, { ReactElement, useEffect, useState } from "react";

const Service = () => {
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, error, isLoading } = useGetAllServiceQuery({
    searchTerm,
    page,
  });
  // console.log(isLoading);

  return (
    <div className="bg-green-100">
      <div className="  container border p-5 ">
        <div className="mt-10 flex justify-center gap-2 ">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            name=""
            id=""
            className="border-2 rounded-lg border-green-400 shadow-md  w-[30%] p-2  outline-green-500     bg-green-100  "
          />
          {/* <button className="rounded px-5 py-2 shadow-lg font-semibold bg-green-300 transition-colors duration-300 hover:bg-green-500 hover:text-white text-gray-600">
            Search
          </button> */}
        </div>

        <div className="mt-12 flex justify-center flex-wrap gap-10">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {data?.data?.map((service: IService) => (
                <ServiceCard key={service?._id} service={service} />
              ))}
            </>
          )}
        </div>

        {/* pagination */}
        <div className="flex justify-center mt-10">
          <Pagination
            defaultCurrent={3}
            total={50}
            onChange={(page) => setPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;

Service.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
