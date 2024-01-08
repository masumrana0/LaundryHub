import RootLayout from "@/Components/Layout/RootLayout";
import Ratings from "@/Components/ServiceDettails/Ratings";
import Review from "@/Components/ServiceDettails/Review";
import { ISelectService } from "@/Interface/booking";

import { useGetOneServiceQuery } from "@/Redux/api/serviceApi";
import { addSelectService } from "@/Redux/features/order/orderSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { BiLogoFacebook, BiSave, BiAddToQueue } from "react-icons/bi";
import { useDispatch } from "react-redux";

const ServiceDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = router.query.serviceId;
  const { data, isError, isLoading } = useGetOneServiceQuery(id as string);

  //service
  const service = data?.data;

  const [isReviewOpen, setReviewOpen] = useState(false);
  const [isDescriptionOpen, setDescriptionOpen] = useState(true);

  const handleDescriptionOpen = () => {
    setDescriptionOpen(true);
    setReviewOpen(false);
  };

  const handleReviewOpen = () => {
    setDescriptionOpen(false);
    setReviewOpen(true);
  };

  const handleSelectService = () => {
    const selectedService: ISelectService = {
      service: service?._id as string,
      title: service.title,
    };
    dispatch(addSelectService(selectedService));
  };
  return (
    <div className="mt-20">
      <div className="container mx-auto ">
        {/* upper part  */}
        <div className=" flex justify-between mx-4 lg:mx-0  items-center bg-gray-100  p-3 rounded-xl shadow-xl ">
          <p className="flex items-center  lg:text-2xl hover:text-amber-600 ">
            Share <BiLogoFacebook />{" "}
          </p>
          <div className="flex items-center gap-5">
            <p className="flex items-center  lg:text-2xl hover:text-amber-600">
              <BiSave />
              Save
            </p>
            <p className="flex items-center  lg:text-2xl hover:text-amber-600">
              <BiAddToQueue /> Add to Compare
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  py-10  gap-10 ">
          <div className="lg:w-1/2">
            <Image
              src={service?.images[0]}
              className="w-full"
              width={500}
              height={500}
              alt="product-img"
            />
          </div>
          <div className="px-4 lg:px-0  lg:w-1/2 ">
            <h2 className="lg:text-4xl text-xl font-bold">{service?.title}</h2>
            <p className="font-semibold text-lg mt-4">{service?.details[0]}</p>
            <p className="font-semibold text-lg ">{service?.details[1]}</p>

            <div className="mt-2">
              <div className="flex justify-center gap-5 mt-1">
                <button className="rounded px-10 py-2 shadow-lg font-semibold bg-green-300 transition-colors duration-300 hover:bg-green-500 hover:text-white text-gray-600">
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
      <div className=" w-full   h-[100vh]  p-5">
        <div className="container mx-auto">
          <div className="flex gap-5 py-3">
            <button
              onClick={handleDescriptionOpen}
              className={`btn btn-outline border border-white text-gray-500 rounded px-10 py-2 shadow-lg font-semibold bg-green-400 transition-colors duration-300 hover:bg-green-500 hover:text-white    shadow-white  ${
                isDescriptionOpen && "bg-red-500  text-white "
              }`}
            >
              Description
            </button>
            <button
              onClick={handleReviewOpen}
              className={`btn btn-outline border border-white text-gray-500 rounded px-10 py-2 shadow-lg font-semibold bg-green-400 transition-colors duration-300 hover:bg-green-500 hover:text-white    shadow-white ${
                isReviewOpen && "bg-red-500  text-white "
              }`}
            >
              Review & Rating
            </button>
          </div>
          <div className="w-full h-4 bg-green-400 rounded-xl"></div>
          {isDescriptionOpen ? (
            <div className="bg-white mt-5 p-5">
              <h2 className="text-3xl font-bold mb-6 ">Description</h2>
              <h3 className="lg:text-3xl text-xl font-semibold">
                {/* {data?.productName} */}
              </h3>
              <p className="text-lg mt-3 ">{service?.details[0]}</p>
              <p className="text-lg mt-3 ">{service?.details[1]}</p>
              <p className="text-lg mt-3 ">{service?.details[2]}</p>
            </div>
          ) : (
            <div className=" mx-auto bg-gray-100 mt-5  rounded-xl">
              <div className="p-5">
                <h3 className="lg:text-3xl text-xl font-extrabold text-gray-700 mb-5 shadow-xl  border-2 py-1 px-4 border-gray-100   ">
                  Review & Ratings
                </h3>
                <div className="flex justify-center  ">
                  {/* review section */}
                  <div className="lg:w-[65%]">
                    <Review id={`${id}`} />
                  </div>

                  {/* ratings section */}
                  <div className="lg:w-[35%]">
                    <Ratings id={`${id}`} />
                  </div>
                  {/* end   */}
                </div>
              </div>

              {/* submit reviews and rating */}
              <div className="flex items-center gap-10 mt-10 ">
                <div className="lg:w-1/2  "></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

ServiceDetails.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
