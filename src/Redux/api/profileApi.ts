import { IUser, ProfileResponse } from "@/Interface/user";
import { baseApi } from "./baseApi";
import { IChangePassword } from "@/Interface/auth";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<ProfileResponse, unknown>({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    updateProfile: build.mutation({
      query: (data: Partial<IUser>) => ({
        url: "/profile",
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
    updatePassword: build.mutation({
      query: (data: IChangePassword) => ({
        url: "/auth/change-password",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
} = profileApi;
