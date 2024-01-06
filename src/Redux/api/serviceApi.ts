import { IReview } from "@/Interface/service";
import { baseApi } from "./baseApi";
import { url } from "inspector";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllService: build.query({
      query: () => ({
        url: "/service",
        method: "GET",
      }),
    }),
    getOneService: build.query({
      query: (id: string) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
    }),
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
  }),
});

export const {
  useGetAllServiceQuery,
  useGetOneServiceQuery,
  useSubmitServiceReviewMutation,
  useGetReviewQuery,
} = serviceApi;
