import { IReview } from "@/Interface/service";
import { baseApi } from "./baseApi";

const reviewAndRatingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    submitServiceReview: build.mutation({
      query: (review: { review: IReview }) => ({
        url: `/review`,
        method: "POST",
        data: review,
      }),
      invalidatesTags: ["review"],
    }),

    getReview: build.query({
      query: (id) => ({
        url: `/review/${id}`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),

    getRatings: build.query({
      query: (id: string) => ({
        url: `/rating/${id}`,
        method: "GET",
      }),
      providesTags: ["rating"],
    }),

    submitRating: build.mutation({
      query: (rating) => ({
        url: "/rating",
        method: "POST",
        data: rating,
      }),
      invalidatesTags: ["rating"],
    }),
  }),
});

export const {
  useSubmitServiceReviewMutation,
  useGetReviewQuery,
  useGetRatingsQuery,
  useSubmitRatingMutation,
} = reviewAndRatingApi;
