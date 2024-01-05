import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllService: build.query({
      query: () => ({
        url: "/service",
        method: "GET",
      }),
    }),
    getOneService: build.query({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllServiceQuery, useGetOneServiceQuery } = profileApi;
