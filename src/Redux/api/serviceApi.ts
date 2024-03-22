import { baseApi } from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllServiceWithAnyTerm: build.query({
      query: () => ({
        url: `/service/all`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
    getAllService: build.query({
      query: () => ({
        url: `/service?limit=6`,
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
