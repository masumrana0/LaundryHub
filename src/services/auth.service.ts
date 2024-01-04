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

export const isLoggedIn = () => {
  const accessToken = getFromLocalStorage(authKey);
  //   console.log(accessToken);

  return !!accessToken;
};

export const logOut = () => {
  return removeFromLocalStorage(authKey);
};
