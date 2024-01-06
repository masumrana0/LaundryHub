import { IReview } from "@/Interface/service";
import { useGetReviewQuery } from "@/Redux/api/serviceApi";
import { FaRegCircleUser } from "react-icons/fa6";

const Review = ({ id }: { id: string }) => {
  const { data: reviewDatas } = useGetReviewQuery(id);
  return (
    <div className=" h-96 overflow-y-auto border-2 border-gray-300 rounded-xl ">
      {reviewDatas?.data?.map((Review: IReview) => (
        <div className="shadaw-lg border-2  p-3 mx-5 rounded-2xl shadow-lg  mb-3 bg-white ">
          <div className="flex items-center gap-2 mb-3  ">
            {
              <span>
                <FaRegCircleUser className="text-4xl" />
              </span>
            }
            <h3 className="font-bold text-xl ">
              {Review?.user?.name?.firstName +
                " " +
                Review?.user?.name?.lastName}
            </h3>
          </div>
          <p className="text-gray-700 font-thin"> {Review?.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
