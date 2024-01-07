import { IReview } from "@/Interface/service";
import { baseApi } from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllService: build.query({
      query: ({ searchTerm, page }: { searchTerm: string; page: number }) => ({
        url: `/service?searchTerm=${searchTerm}&page=${page}&limit=${4}`,
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
