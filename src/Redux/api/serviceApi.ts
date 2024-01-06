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
  }),
});

export const { useGetAllServiceQuery, useGetOneServiceQuery } = serviceApi;
