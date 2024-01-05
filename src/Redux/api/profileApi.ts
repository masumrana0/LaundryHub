import { ProfileResponse } from "@/Interface/user";
import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<ProfileResponse, unknown>({
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
