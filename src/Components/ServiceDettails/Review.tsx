import { IReview } from "@/Interface/service";
import {
  useGetReviewQuery,
  useSubmitServiceReviewMutation,
} from "@/Redux/api/serviceApi";
import { FormEvent } from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const Review = ({ id }: { id: string }) => {
  const { data: reviewDatas } = useGetReviewQuery(id);
  // redux
  const [reviewSubmitMutation] = useSubmitServiceReviewMutation();

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
  return (
    <div>
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
      {/* submit review section */}
      <div>
        <form onSubmit={handleSubmitReview}>
          <div className="h-40  ">
            <textarea
              required
              name="review"
              placeholder="Enter Your Opinion in this service"
              className="w-full h-full outline-green-500  border  border-gray-300 bg-white rounded-2xl py-2 px-5 text-xl "
            ></textarea>
            <div className="">
              <button className="border-2 border-white shadow-lg shadow-white px-10 py-2 font-bold  bg-green-400 text-white hover:bg-green-700 transition-colors duration-300  rounded-xl ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
