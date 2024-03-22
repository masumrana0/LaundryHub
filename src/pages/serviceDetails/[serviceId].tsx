import RootLayout from "@/Components/Layout/RootLayout";
import Ratings from "@/Components/ServiceDettails/Ratings";
import Review from "@/Components/ServiceDettails/Review";
import LoadingSpinner from "@/Components/Shared/Loading";
import { ISelectService } from "@/Interface/booking";
import { useGetOneServiceQuery } from "@/Redux/api/serviceApi";
import { addSelectService } from "@/Redux/features/order/orderSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { BiLogoFacebook, BiSave } from "react-icons/bi";
import { useDispatch } from "react-redux";

const ServiceDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = router.query.serviceId;

  const { data, isLoading } = useGetOneServiceQuery(id as string);

  //service
  const service = data;
 

  const handleSelectService = () => {
    const selectedService: ISelectService = {
      service: service?._id as string,
      title: service.title,
    };
    dispatch(addSelectService(selectedService));
  };
  return (
    <div>
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <LoadingSpinner size="regular" />
        </div>
      ) : (
        <div className="mt-20 md:container mx-auto">
          {/* upper part  */}
          <div>
            <div className=" flex justify-between mx-4 lg:mx-0  items-center bg-gray-100  p-3 rounded-xl shadow-xl px-5 ">
              <p className="flex items-center  lg:text-2xl hover:text-green-600 ">
                Share <BiLogoFacebook />{" "}
              </p>
              <div className="flex items-center gap-5">
                <p className="flex items-center  lg:text-2xl hover:text-green-600">
                  <BiSave />
                  Save
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row  py-10  gap-10 ">
              <div className="lg:w-1/2">
                <Image
                  src={service?.images[1]}
                  className="w-full md:h-[25rem] "
                  width={500}
                  height={500}
                  alt="product-img"
                />
              </div>
              <div className="px-4 lg:px-0  lg:w-1/2 ">
                <h2 className="lg:text-4xl text-xl font-bold">
                  {service?.title}
                </h2>
                <p className="font-semibold text-lg mt-4">
                  {service?.details[0]}
                </p>
                <p className="font-semibold text-lg ">{service?.details[1]}</p>

                <div className="mt-2">
                  <div className="flex justify-center gap-5 mt-1">
                    <button
                      onClick={handleSelectService}
                      className="rounded px-10 py-2 shadow-lg font-semibold bg-green-300 transition-colors duration-300 hover:bg-green-500 hover:text-white text-gray-600"
                    >
                      <Link href="/laundry" scroll={false}>
                        Select
                      </Link>
                    </button>
                    <button className="rounded px-10 py-2 shadow-lg font-semibold bg-green-300 transition-colors duration-300 hover:bg-green-500 hover:text-white text-gray-600">
                      Add To cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* lower part */}
          <div className="w-full h-2 rounded-full   bg-green-400"></div>

          {/* rating part */}
          <div className="mt-5">
            <Ratings id={`${id}`} />
          </div>
          {/* review */}
          <div>
            <Review id={`${id}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;

ServiceDetails.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
