import RootLayout from "@/Components/Layout/RootLayout";
import LoadingSpinner from "@/Components/Shared/Loading";
import ServiceCard from "@/Components/service/ServiceCard";
import { IService } from "@/Interface/service";
import { useGetAllServiceQuery } from "@/Redux/api/serviceApi";
import React, { ReactElement, useEffect, useState } from "react";

const Service = () => {
  const [services, setServices] = useState<IService[]>([]);
  const { data, isLoading } = useGetAllServiceQuery(null);

  useEffect(() => {
    setServices(data);
  }, [data]);

  return (
    <div className="w-full bg-gray-50  ">
      <div className="  bg-green-100 py-10 ">
        <p className="text-xl text-center font-thin tracking-tighter">
          We Clean EveryThing
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
          Select Your Services
        </h3>
      </div>
      <div className="container  py-10">
        <div className="py-10 flex justify-center flex-wrap gap-10">
          {isLoading ? (
            <LoadingSpinner size="regular" />
          ) : (
            <>
              {services?.length >= 1 ? (
                services.map((service: IService) => (
                  <ServiceCard key={service?._id} service={service} />
                ))
              ) : (
                <div>
                  <h3>Service not found</h3>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;

Service.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
