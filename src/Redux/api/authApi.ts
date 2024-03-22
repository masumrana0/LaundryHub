import { baseApi } from "./baseApi";
import { ISigninData, ISignupData } from "@/Interface/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userSignin: build.mutation({
      query: (signInData: ISigninData) => ({
        url: "/auth/login",
        method: "POST",
        data: signInData,
      }),

      invalidatesTags: ["user"],
    }),

    userSignup: build.mutation({
      query: (signupData: ISignupData) => ({
        url: "/auth/customer/register",
        method: "POST",
        data: signupData,
      }),
    }),

    sendVerificationEmail: build.query({
      query: () => ({
        url: "/auth/verification/client",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useUserSigninMutation,
  useUserSignupMutation,
  useSendVerificationEmailQuery,
} = authApi;
