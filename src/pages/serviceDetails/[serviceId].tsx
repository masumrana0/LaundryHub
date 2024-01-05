import RootLayout from "@/Components/Layout/RootLayout";
import { IReview, IService } from "@/Interface/service";
import {
  useGetOneServiceQuery,
  useSubmitServiceReviewMutation,
} from "@/Redux/api/serviceApi";
import { AwardIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, ReactHTML, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiLogoFacebook, BiSave, BiAddToQueue } from "react-icons/bi";
import { FaRegStar, FaStar, FaCircleUser } from "react-icons/fa6";

const ServiceDetails = () => {
  const router = useRouter();
  const id = router.query.serviceId;
  const [reviewMutation] = useSubmitServiceReviewMutation();

  //   console.log(id);

  const handleSubmitReview = async (event) => {
    event.preventDefault();

    const data = event.target.review.value;
    const reviewData: IReview = {
      review: data,
    };

    const res = await reviewMutation({ id, review: reviewData });
    // console.log(res);
  };

  const { data, isError, isLoading } = useGetOneServiceQuery(id as string);

  //   service
  const service = data?.data;
  //   console.log(service);

  const [star, setStar] = useState(0);
  const dummyservice = {
    _id: "6594ef530b1c8bcff3026b22",
    title: "Deep Wash",
    images: [
      "https://img.freepik.com/free-photo/lady-putting-laundry-washing-machine_23-2148387031.jpg?w=826&t=st=1704022659~exp=1704023259~hmac=20c97e59307f90e5c19e8b7a12eb04d75082e2f6c392511b8cc62fb09d44c043",
      "https://img.freepik.com/free-photo/front-view-young-female-holding-clean-clothes-from-washing-machine-white-wall_140725-109331.jpg?w=360&t=st=1704022622~exp=1704023222~hmac=b7afdf5765af28d98c0743077b359b056030637deaffeeeb027fbed32344de3f",
      "https://img.freepik.com/free-photo/textured-plaids-wicker-basket-gray-background_169016-18720.jpg?w=1060&t=st=1704022557~exp=1704023157~hmac=90218db27b3b6a93e58d95e9e6b04e4a4bab781a28bcdd74de7b7d1d75e8303d",
    ],
    details: [
      "Our Deep Wash service at LaundryHub is a comprehensive cleaning process designed to revitalize your garments. It involves an in-depth cleaning approach that goes beyond regular washing, targeting embedded dirt, grime, and impurities in fabrics. This service is ideal for garments that require intensive cleaning to restore their freshness.",
      "The Deep Wash service ensures a thorough and meticulous cleaning process for your garments. We utilize specialized techniques and detergents that penetrate deep into the fabric fibers, effectively removing accumulated dirt, oils, and stains that may not be eliminated through regular washing methods. Our goal is to deliver garments that feel and look rejuvenated.",
      "Fabric care and enhancement are paramount in our Deep Wash service. While focusing on deep cleaning, we also prioritize maintaining the integrity of the fabric. Our process is tailored to different fabric types, ensuring that the cleaning agents used are gentle yet effective. Additionally, this service aims to enhance the fabric's appearance and feel, leaving your clothes refreshed and revitalized.",
    ],
    reviews: [],
    createdAt: "2024-01-03T05:23:31.023Z",
    updatedAt: "2024-01-03T05:23:31.023Z",
    __v: 0,
    id: "6594ef530b1c8bcff3026b22",
  };

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
                <div className="py-10">
                  <div className="shadaw-lg border-2  p-3 mx-5 rounded-lg shadow-lg  mb-3 bg-white ">
                    <div className="flex items-center gap-2 mb-3">
                      <span>
                        <FaCircleUser className="text-4xl" />
                      </span>
                      <h3 className="font-bold text-xl ">Masum Rana</h3>
                    </div>
                    <p className="text-gray-700 font-thin">
                      {" "}
                      its a good service
                    </p>
                  </div>
                </div>
              </div>
              {/* submit reviews and rating */}
              <div className="flex items-center gap-10 mt-10 ">
                <div className=" lg:w-1/2  ">
                  <form onSubmit={handleSubmitReview}>
                    <div className="h-48">
                      <textarea
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

                <div className="lg:w-1/2  ">
                  <div className="shadow-lg bg-white h-48 px-5 py-6 ">
                    <h3 className="text-center lg:text-4xl font-thin text-gray-600">
                      How do you rate our in this Service
                    </h3>
                    <div className="flex justify-center gap-4 mt-2">
                      <span
                        className="cursor-pointer"
                        onClick={() => setStar(1)}
                      >
                        {star >= 1 ? (
                          <FaStar className="lg:text-5xl font-thin text-amber-400" />
                        ) : (
                          <FaRegStar className="lg:text-5xl font-thin text-amber-400" />
                        )}
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => setStar(2)}
                      >
                        {star >= 2 ? (
                          <FaStar className="lg:text-5xl font-thin  text-amber-400" />
                        ) : (
                          <FaRegStar className="lg:text-5xl font-thin text-amber-400" />
                        )}
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => setStar(3)}
                      >
                        {star >= 3 ? (
                          <FaStar className="lg:text-5xl font-thin text-amber-400" />
                        ) : (
                          <FaRegStar className="lg:text-5xl font-thin text-amber-400" />
                        )}
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => setStar(4)}
                      >
                        {star >= 4 ? (
                          <FaStar className="lg:text-5xl font-thin text-amber-400" />
                        ) : (
                          <FaRegStar className="lg:text-5xl font-thin text-amber-400" />
                        )}
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => setStar(5)}
                      >
                        {star == 5 ? (
                          <FaStar className="lg:text-5xl font-thin text-amber-400" />
                        ) : (
                          <FaRegStar className="lg:text-5xl font-thin text-amber-400" />
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between mt-6">
                      <h3 className="font-bold">Bad</h3>
                      <h3 className="font-bold">Excellent</h3>
                    </div>
                  </div>
                </div>
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
