import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { instance as axiosInstance } from "./axiosInstance";
import { getFromLocalStorage } from "@/utilities/local-storage";
import { authKey } from "@/constants/storageKey";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, contentType }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": contentType || "application/json",
        },
        withCredentials: true,
      });

      return result;
    } catch (axiosError) {
      let err = axiosError as AxiosError & {
        statusCode: number;
        message: string;
        success: boolean;
        errorMessages: Array<any>;
      };

      const error = {
        status: err.response?.status || err?.statusCode || 400,
        data: err.response?.data || err.message,
        message: err.response?.data || err.message,
        success: err?.success,
        errorMessages: err?.errorMessages,
      };
      return {
        error: error,
      };
    }
  };
