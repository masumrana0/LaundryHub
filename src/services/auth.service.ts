/**
 * Title: 'authentication  essentialites'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 06-01-2024
 *
 */

import { authKey, isVerifiedKey } from "@/constants/storageKey";
import { jwtDecoder } from "@/utilities/jwtDecoder";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setLocalStorage,
} from "@/utilities/local-storage";

export const storeLocalStorageInfo = (key: string, accessToken: string) => {
  return setLocalStorage(key, accessToken as string);
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

export const isLoggedIn = () => {
  const accessToken = getFromLocalStorage(authKey);

  return !!accessToken;
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
