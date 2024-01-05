import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      //   providesTags: ["user"],
    }),
  }),
  //   overrideExisting: false,
});

export const { useGetProfileQuery } = profileApi;
