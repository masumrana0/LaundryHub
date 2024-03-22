/**
 * Title: 'authentication  essentialites'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 06-01-2024
 *
 */

import { authKey, isVerifiedKey } from "@/constants/storageKey";
import { instance } from "@/helper/axios/axiosInstance";
import { getBaseUrl } from "@/helper/config/envConfig";
import { jwtDecoder } from "@/utilities/jwtDecoder";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utilities/local-storage";

export const storeLocalStorageInfo = (key: string, accessToken: string) => {
  return setToLocalStorage(key, accessToken as string);
};

export const getUserInfo = () => {
  const accessToken = getFromLocalStorage(authKey);
  if (accessToken) {
    const data = jwtDecoder(accessToken);
    return data;
  } else {
    return " ";
  }
};

// export const storeVerificationStatus = (key: string, isVerified: boolean) => {
//   if (key && typeof isVerified == "boolean") {
//     const VerifiedStatus = {
//       isVerified: isVerified,
//     };
//     return setLocalStorage(key, VerifiedStatus);
//   }
// };

export const getUseAbleToken = (): string => {
  const accessToken = getFromLocalStorage(authKey);
  if (!accessToken) {
    return "";
  }
  const useAbleToken = accessToken.substring(1, accessToken.length - 1);
  return useAbleToken;
};

interface IisEmailVerified {
  isVerified: boolean;
}

export const isVerifiedUser = (): IisEmailVerified | "not-found" => {
  const isEmailVerified = getFromLocalStorage(isVerifiedKey);
  if (
    isEmailVerified &&
    typeof isEmailVerified === "object" &&
    "isVerified" in isEmailVerified
  ) {
    const { isVerified } = isEmailVerified;
    if (typeof isVerified === "boolean") {
      return { isVerified };
    }
  }

  return "not-found";
};

export const logOut = () => {
  return removeFromLocalStorage(authKey);
};

export const storeUserToken = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

// export const getUserInfo = (): IDecodedToken | null => {
//   if (isLoggedIn()) {
//     const token = getFromLocalStorage(authKey);
//     try {
//       const userDecodedData = jwtDecode(token as string) as IDecodedToken;
//       return userDecodedData;
//     } catch (error) {
//       console.error("Error decoding token:", error);
//     }
//   }
//   return null;
// };

// console.log(getUserInfo());

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await  instance({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
