import { IReview } from "@/Interface/service";
import { baseApi } from "./baseApi";

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
      query: ({ id, review }: { id: any; review: IReview }) => ({
        url: `/service/review/${id}`,
        method: "POST",
        data: review,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllServiceQuery,
  useGetOneServiceQuery,
  useSubmitServiceReviewMutation,
} = serviceApi;
