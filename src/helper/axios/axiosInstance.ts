import { setIsLoggedIn } from "@/Redux/features/auth/authSlice";
import { useAppDispatch } from "@/Redux/hook";
import { authKey } from "@/constants/storageKey";
import { getNewAccessToken, getUseAbleToken } from "@/services/auth.service";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utilities/local-storage";

import axios from "axios";
 

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
  function (config) {
    const accessToken = getUseAbleToken();

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // console.log("🚀 ~ response:", response);
    const responseObject: any = {
      data: response?.data?.data,
      // meta: response?.data?.meta,
    };
    return responseObject;
  },

  async function (error) {
    const config = error?.config;
    console.log(error.response.data.message);
    if (error.response.data.message == "Validation Error") {
      removeFromLocalStorage(authKey);
    }
    if (error?.response?.status === 403 && !config?.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      const accessToken = response?.data?.accessToken;
      config.headers["Authorization"] = accessToken;
      setToLocalStorage(authKey, accessToken);
      return instance(config);
    } else {
      if (error?.response?.status === 403 || error?.response?.status === 401) {
        removeFromLocalStorage(authKey);
      }
      let responseObject: any = {
        statusCode: error?.response?.status || 500,
        message: "Something went wrong",
        success: false,
        errorMessages: [],
      };
      // Check if the error response has the expected structure
      if (error?.response?.data) {
        responseObject.message =
          error?.response?.data?.message || responseObject.message;
        responseObject.success =
          error?.response?.data?.success || responseObject.success;

        if (error?.response?.data?.errorMessage) {
          responseObject.errorMessages.push(
            error?.response?.data?.errorMessage
          );
        }
      }
      return Promise.reject(responseObject);
      // return responseObject;
    }

    // return Promise.reject(error);
  }
);

export { instance };

// console.log("i am from instance", instance);
