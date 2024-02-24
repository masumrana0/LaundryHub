import { IReview } from "@/Interface/service";
import { baseApi } from "./baseApi";
import { url } from "inspector";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // getAllService: build.query({
    //   query: ({
    //     searchTerm,
    //     page,
    //     limit,
    //   }: {
    //     searchTerm?: string;
    //     page?: number;
    //     limit?: number;
    //   }) => ({
    //     url: `/service?searchTerm=${searchTerm}&page=${page}&limit=${4}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["service"],
    // }),
    getAllServiceWithAnyTerm: build.query({
      query: () => ({
        url: `/service/all`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
    getAllService: build.query({
      query: () => ({
        url: `/service`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
    getOneService: build.query({
      query: (id: string) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
    }),

    getAllCleaningProduct: build.query({
      query: () => ({
        url: `/cleaningproduct`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllServiceQuery,
  useGetOneServiceQuery,
  useGetAllCleaningProductQuery,
  useGetAllServiceWithAnyTermQuery,
} = serviceApi;
