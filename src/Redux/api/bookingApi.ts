import { baseApi } from "./baseApi";
import { IBooking, IBookingResponse } from "@/Interface/booking";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    submitBookingRequet: build.mutation<IBookingResponse, unknown>({
      query: (data: IBooking) => ({
        url: `/booking`,
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const { useSubmitBookingRequetMutation } = bookingApi;
