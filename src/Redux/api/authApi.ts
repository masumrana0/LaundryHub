import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userSignin: build.mutation({
      query: (signInData) => ({
        url: "/auth/login",
        method: "POST",
        data: signInData,
      }),
      invalidatesTags: ["user"],
    }),

    userSignup: build.mutation({
      query: (signupData) => ({
        url: "/auth/customer/register",
        method: "POST",
        data: signupData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUserSigninMutation, useUserSignupMutation } = authApi;
