import { FaRegStar, FaStar } from "react-icons/fa6";
import StarRating from "../Shared/HomeUi/StarRating";
import { useEffect, useState } from "react";
import {
  useGetRatingsQuery,
  useSubmitRatingMutation,
} from "@/Redux/api/review&ratingApi";
import { AwardIcon } from "lucide-react";
import { IRatingData } from "@/Interface/rating&review";

const Ratings = ({ id }: { id: string }) => {
  const [star, setStar] = useState<number>(0);

  // redux
  const [submitRating] = useSubmitRatingMutation();
  const { data } = useGetRatingsQuery(id);
  const rating: IRatingData = data?.data;

  // handle submitinğ rating
  useEffect(() => {
    const ratingData = {
      service: `${id}`,
      rating: star,
    };
    const submitRatingAsync = async () => {
      if (star >= 1) {
        await submitRating(ratingData);
      }
    };
    submitRatingAsync();
  }, [star]);

  return (
    <div>
      <div className="  bg-white shadow-4xl shadow-gray-200 p-10 rounded-2xl">
        {/* average rating */}
        <div>
          <h2 className="lg:text-4xl text-3xl font-bold font-momo text-center">
            Average Ratings
          </h2>
          <div className="bg-gray-100 mx-5 rounded-xl shadow-lg py-1 mt-5 ">
            <StarRating stars={rating.averageRating} starsize="text-5xl" />
          </div>
        </div>

        {/* customer ratings  */}
        <div className="mt-3">
          <h3 className="text-xl font-thin text-gray-500 text-center">
            {rating?.totalGiveCustomerRating} Customer ratings
          </h3>
          <div className="mt-3">
            {/* 5 star  */}
            <div className="w-full flex items-center justify-center gap-2 mb-1">
              <h5 className=" text-violet-500  ">5star</h5>
              <div className="w-full bg-gray-300 h-5 rounded-xl">
                <div className="w-full bg-amber-300 h-5  rounded-xl"></div>
              </div>
            </div>
            {/* 4 star  */}
            <div className="w-full flex items-center justify-center gap-2 mb-1">
              <h5 className=" text-violet-500  ">4star</h5>
              <div className="w-full bg-gray-300 h-5 rounded-xl">
                <div className="w-[80%] bg-amber-300 h-5  rounded-xl"></div>
              </div>
            </div>
            {/* 3 star  */}
            <div className="w-full flex items-center justify-center gap-2 mb-1">
              <h5 className=" text-violet-500  ">3star</h5>
              <div className="w-full bg-gray-300 h-5 rounded-xl">
                <div className="w-[60%] bg-amber-300 h-5  rounded-xl"></div>
              </div>
            </div>
            {/* 2 star  */}
            <div className="w-full flex items-center justify-center gap-2 mb-1">
              <h5 className=" text-violet-500  ">2star</h5>
              <div className="w-full bg-gray-300 h-5 rounded-xl">
                <div className="w-[40%] bg-amber-300 h-5  rounded-xl"></div>
              </div>
            </div>
            {/* 2 star  */}
            <div className="w-full flex items-center justify-center gap-2 mb-1">
              <h5 className=" text-violet-500  ">1star</h5>
              <div className="w-full bg-gray-300 h-5 rounded-xl">
                <div className="w-[20%] bg-amber-300 h-5  rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* customer give rating */}
        <div className="mt-5">
          <h2 className="text-center  font-semibold">
            How was your experience?
          </h2>
          <div className="flex justify-center gap-4 mt-2">
            <span className="cursor-pointer" onClick={() => setStar(1)}>
              {star >= 1 ? (
                <FaStar className="text-4xl font-thin text-amber-400" />
              ) : (
                <FaRegStar className="text-4xl font-thin text-amber-400" />
              )}
            </span>
            <span className="cursor-pointer" onClick={() => setStar(2)}>
              {star >= 2 ? (
                <FaStar className="text-4xl font-thin  text-amber-400" />
              ) : (
                <FaRegStar className="text-4xl font-thin text-amber-400" />
              )}
            </span>
            <span className="cursor-pointer" onClick={() => setStar(3)}>
              {star >= 3 ? (
                <FaStar className="text-4xl font-thin text-amber-400" />
              ) : (
                <FaRegStar className="text-4xl font-thin text-amber-400" />
              )}
            </span>
            <span className="cursor-pointer" onClick={() => setStar(4)}>
              {star >= 4 ? (
                <FaStar className="text-4xl font-thin text-amber-400" />
              ) : (
                <FaRegStar className="text-4xl font-thin text-amber-400" />
              )}
            </span>
            <span className="cursor-pointer" onClick={() => setStar(5)}>
              {star == 5 ? (
                <FaStar className="text-4xl font-thin text-amber-400" />
              ) : (
                <FaRegStar className="text-4xl font-thin text-amber-400" />
              )}
            </span>
          </div>
          <div className="flex justify-between mt-6">
            <h3 className="font-semibold text-gray-500">Bad</h3>
            <h3 className="font-semibold text-gray-500">Excellent</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
