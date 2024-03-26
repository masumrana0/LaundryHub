import { IReview } from "@/Interface/service";
import {
  useGetReviewQuery,
  useSubmitServiceReviewMutation,
} from "@/Redux/api/review&ratingApi";
import { selectIsLoggedIn } from "@/Redux/features/auth/authSlice";
import { useAppSelector } from "@/Redux/hook";
import { FormEvent } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";

const Review = ({ id }: { id: string }) => {
  // redux
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const { data: reviewDatas } = useGetReviewQuery(id);
  // console.log(reviewDatas);

  const [reviewSubmitMutation] = useSubmitServiceReviewMutation();

  //   handle submit review
  const handleSubmitReview = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const review = (event.target as HTMLFormElement)?.review?.value;
    if (review) {
      const reviewData = {
        service: `${id}`,
        review: review,
      };
      // console.log(reviewData);

      const res = await reviewSubmitMutation(reviewData);

      form.reset();
    }
  };
  return (
    <div>
      {/* reviews section */}
      <div
        className={`${
          reviewDatas?.length > 0 && "h-96"
        }  overflow-y-auto my-10   border-gray-300 rounded-xl`}
      >
        {reviewDatas?.map((Review: IReview) => (
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
      <div className="mb-20">
        {isLoggedIn && (
          <form onSubmit={handleSubmitReview}>
            <div className="h-12  mx-5     ">
              <textarea
                required
                name="review"
                placeholder="Enter Your Opinion in this service"
                className="md:w-1/2 w-full  h-full outline-green-500  border  border-gray-300 bg-white rounded-[5px] py-2 px-5 text-sm "
              ></textarea>
              <div>
                <button className="border-2 border-white shadow-lg shadow-white px-3 py-2 font-bold  bg-green-400 text-white hover:bg-green-700 transition-colors duration-300  rounded-xl ">
                  <LuSend className="text-2xl" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Review;
