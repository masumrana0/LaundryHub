import { FaRegStar, FaStar } from "react-icons/fa6";

import { useEffect, useState } from "react";
import {
  useGetRatingsQuery,
  useSubmitRatingMutation,
} from "@/Redux/api/review&ratingApi";
import { AwardIcon } from "lucide-react";
import { IRatingData } from "@/Interface/rating&review";
import StarRating from "../HomeUi/StarRating";
import Review from "./Review";

const Ratings = ({ id }: { id: string }) => {
  const [star, setStar] = useState<number>(0);

  // redux
  const [submitRating] = useSubmitRatingMutation();
  const { data } = useGetRatingsQuery(id);
  const rating: IRatingData = data;

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
    <div className="flex items-center gap-5 mx-3 sm:mx-0">
      <div className="sm:w-1/2 md:w-1/3 w-full mt-5">
        {/* 5 star  */}
        <div className="w-full flex items-center justify-center gap-2 mb-1">
          <h5 className=" text-violet-500  ">5star</h5>
          <div className="w-full bg-gray-300 h-5 rounded-xl">
            <div className="w-full bg-amber-300 h-5  rounded-xl"></div>
          </div>
          <h5 className=" text-violet-500  ">{rating?.totalFiveRating}</h5>
        </div>
        {/* 4 star  */}
        <div className="w-full flex items-center justify-center gap-2 mb-1">
          <h5 className=" text-violet-500  ">4star</h5>
          <div className="w-full bg-gray-300 h-5 rounded-xl">
            <div className="w-[80%] bg-amber-300 h-5  rounded-xl"></div>
          </div>
          <h5 className=" text-violet-500  ">{rating?.totalFourRating}</h5>
        </div>
        {/* 3 star  */}
        <div className="w-full flex items-center justify-center gap-2 mb-1">
          <h5 className=" text-violet-500  ">3star</h5>
          <div className="w-full bg-gray-300 h-5 rounded-xl">
            <div className="w-[60%] bg-amber-300 h-5  rounded-xl"></div>
          </div>
          <h5 className=" text-violet-500  ">{rating?.totalThreeRating}</h5>
        </div>
        {/* 2 star  */}
        <div className="w-full flex items-center justify-center gap-2 mb-1">
          <h5 className=" text-violet-500  ">2star</h5>
          <div className="w-full bg-gray-300 h-5 rounded-xl">
            <div className="w-[40%] bg-amber-300 h-5  rounded-xl"></div>
          </div>
          <h5 className=" text-violet-500  ">{rating?.totalTwoRating}</h5>
        </div>
        {/* 1 star  */}
        <div className="w-full flex items-center justify-center gap-2 mb-1">
          <h5 className=" text-violet-500  ">1star</h5>
          <div className="w-full bg-gray-300 h-5 rounded-xl">
            <div className="w-[20%] bg-amber-300 h-5  rounded-xl"></div>
          </div>
          <h5 className=" text-violet-500  ">{rating?.totalOneRating}</h5>
        </div>
      </div>
      {/* ratings */}
      <div>
        <h3 className="text-center font-bold text-5xl md:text-8xl text-slate-600">
          {rating?.averageRating}.0
        </h3>
        <div className="flex justify-center   mt-2">
          <button onClick={() => setStar(1)}>
            {star >= 1 ? (
              <FaStar className="md:text-3xl text-2xl font-thin text-amber-400" />
            ) : (
              <FaRegStar className="md:text-3xl text-2xl font-thin text-amber-400" />
            )}
          </button>
          <button onClick={() => setStar(2)}>
            {star >= 2 ? (
              <FaStar className="md:text-3xl text-2xl font-thin  text-amber-400" />
            ) : (
              <FaRegStar className="md:text-3xl text-2xl font-thin text-amber-400" />
            )}
          </button>
          <button onClick={() => setStar(3)}>
            {star >= 3 ? (
              <FaStar className="md:text-3xl text-2xl font-thin text-amber-400" />
            ) : (
              <FaRegStar className="md:text-3xl text-2xl font-thin text-amber-400" />
            )}
          </button>
          <button onClick={() => setStar(4)}>
            {star >= 4 ? (
              <FaStar className="md:text-3xl text-2xl font-thin text-amber-400" />
            ) : (
              <FaRegStar className="md:text-3xl text-2xl font-thin text-amber-400" />
            )}
          </button>
          <button onClick={() => setStar(5)}>
            {star == 5 ? (
              <FaStar className="md:text-3xl text-2xl font-thin text-amber-400" />
            ) : (
              <FaRegStar className="md:text-3xl text-2xl font-thin text-amber-400" />
            )}
          </button>
        </div>
        <h3 className="text-xl font-thin text-gray-500 text-center">
          {rating?.totalGiveCustomerRating} Customer ratings
        </h3>
      </div>
    </div>
  );
};

export default Ratings;
