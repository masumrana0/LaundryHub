import { baseApi } from "./baseApi";

const siteContentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFQA: build.query({
      query: () => ({
        url: "/fqa",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFQAQuery } = siteContentApi;
