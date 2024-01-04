import { authKey } from "@/constants/storageKey";
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
  //   console.log(accessToken);

  return !!accessToken;
};

export const logOut = () => {
  return removeFromLocalStorage(authKey);
};
