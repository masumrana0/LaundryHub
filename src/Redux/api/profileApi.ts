import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProfileQuery } = profileApi;
