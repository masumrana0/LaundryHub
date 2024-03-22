import { instance } from "@/helper/axios/axiosInstance";
import { getBaseUrl } from "@/helper/config/envConfig";

export const setToLocalStorage = (key: string, value: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  const data = JSON.stringify(value);
  return localStorage.setItem(key, data);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  const authToken = localStorage.getItem(key);
  if (!authToken) {
    return false;
  }

  return authToken;
};

export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem(key);
};

export const getRefreshToken = async () => {
  return await instance({
    url: ` ${getBaseUrl()}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
