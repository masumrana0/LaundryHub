import { baseApi } from "./baseApi";
import { IFeedback } from "@/Interface/feedback";

const FeedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    submitFeedbackApi: build.mutation({
      query: (data: IFeedback) => ({
        url: `/feedback`,
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const { useSubmitFeedbackApiMutation } = FeedbackApi;
