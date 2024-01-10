import { IUser, ProfileResponse } from "@/Interface/user";
import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<ProfileResponse, unknown>({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    updateProfile: build.mutation<ProfileResponse, unknown>({
      query: (data: Partial<IUser>) => ({
        url: "/profile",
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
