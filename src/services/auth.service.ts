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
import { runInThisContext } from "vm";

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

export const isEmailVerified = () => {
  const isEmailVerified = getFromLocalStorage(isVerifiedKey);

  if (isEmailVerified) {
    return true;
  } else {
    return false;
  }
};

export const logOut = () => {
  return removeFromLocalStorage(authKey);
};
