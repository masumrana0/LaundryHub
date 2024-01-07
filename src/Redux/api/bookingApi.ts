import { IReview } from "@/Interface/service";
import { baseApi } from "./baseApi";
import { url } from "inspector";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // getAllService: build.query({
    //   query: ({ searchTerm, page }: { searchTerm: string; page: number }) => ({
    //     url: `/service?searchTerm=${searchTerm}&page=${page}&limit=${8}`,
    //     method: "GET",
    //   }),
    // }),
    // getOneService: build.query({
    //   query: (id: string) => ({
    //     url: `/service/${id}`,
    //     method: "GET",
    //   }),
    // }),

    // submitBooking:build.mutation({
    //     query:()
    // })
  }),
});

// export const { useGetAllCleaningProductQuery } = bookingApi;
