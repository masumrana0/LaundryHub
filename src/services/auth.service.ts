import { authKey } from "@/constants/storageKey";
import { jwtDecoder } from "@/utilities/jwtDecoder";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setLocalStorage,
} from "@/utilities/local-storage";

export const storeUserInfo = (accessToken: string) => {
  return setLocalStorage(authKey, accessToken as string);
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
  const logOuting = removeFromLocalStorage(authKey);
  return console.log("logouting");
};
