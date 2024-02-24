import { axiosBaseQuery } from "@/helper/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helper/config/envConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: ["user", "service", "review", "rating", "booking"],
});
