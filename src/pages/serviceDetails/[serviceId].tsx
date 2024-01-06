import RootLayout from "@/Components/Layout/RootLayout";
import Ratings from "@/Components/ServiceDettails/Ratings";
import StarRating from "@/Components/Shared/HomeUi/StarRating";
import { IReview } from "@/Interface/service";
import {
  useGetOneServiceQuery,
  useGetReviewQuery,
  useSubmitServiceReviewMutation,
} from "@/Redux/api/serviceApi";
import { AwardIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, ReactElement, ReactHTML, useState } from "react";
import { BiLogoFacebook, BiSave, BiAddToQueue } from "react-icons/bi";
import { FaRegStar, FaStar, FaCircleUser } from "react-icons/fa6";

const ServiceDetails = () => {
  const router = useRouter();
  const id = router.query.serviceId;

  // redux
  const [reviewSubmitMutation] = useSubmitServiceReviewMutation();
  const { data: reviewDatas } = useGetReviewQuery(id);
  // console.log(reviewDatas);

  // handle submition Review
  const handleSubmitReview = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const review = (event.target as HTMLFormElement)?.review?.value;

    if (review) {
      const reviewData = {
        service: `${id}`,
        review: review,
      };

      const res = await reviewSubmitMutation(reviewData);

      form.reset();
    }
  };

  const { data, isError, isLoading } = useGetOneServiceQuery(id as string);

  //   service
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
                  <Link href="/login" scroll={false}>
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
      <div className="my-20 w-full bg-green-200 h-[100vh]  p-5">
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
            <div>
              <div className="h-96 overflow-y-auto  mx-auto bg-gray-500 mt-5 p-10 rounded-xl ">
                <h2 className="text-3xl font-bold mb-2 text-white">
                  Service Review
                </h2>
                <div className="flex justify-center items-center">
                  {/* reviews section */}
                  <div className="lg:w-[65%]">
                    {reviewDatas?.data?.map((Review: IReview) => (
                      <div className="shadaw-lg border-2  p-3 mx-5 rounded-lg shadow-lg  mb-3 bg-white ">
                        <div className="flex items-center gap-2 mb-3">
                          {
                            <span>
                              <FaCircleUser className="text-4xl" />
                            </span>
                          }
                          <h3 className="font-bold text-xl ">
                            {Review?.user?.name?.firstName +
                              " " +
                              Review?.user?.name?.lastName}
                          </h3>
                        </div>
                        <p className="text-gray-700 font-thin">
                          {" "}
                          {Review?.review}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* ratings section */}

                  <div className="lg:w-[35%]">
                    <Ratings />
                  </div>
                  {/* end raing section  */}
                </div>
              </div>
              {/* submit reviews and rating */}
              <div className="flex items-center gap-10 mt-10 ">
                <div className=" lg:w-1/2  ">
                  <form onSubmit={handleSubmitReview}>
                    <div className="h-48">
                      <textarea
                        required
                        name="review"
                        placeholder="Enter Your Opinion in this service"
                        className="w-full h-full  border  border-gray-300 bg-white rounded-md py-2 px-3"
                      ></textarea>
                      <div className="">
                        <button className="btn btn-outline border border-white text-gray-500 rounded px-10 py-2 shadow-lg font-semibold bg-green-400 transition-colors duration-300 hover:bg-green-500 hover:text-white    shadow-white">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

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
