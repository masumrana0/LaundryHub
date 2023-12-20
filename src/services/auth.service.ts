import { authKey } from "@/constants/storageKey";
import { setLocalStorage } from "@/utilities/local-storage";

export const storeUserInfo = (accessToken: string) => {
  return setLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
    
};
