export const setLocalStorage = (key: string, value: string) => {
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
    return "token not found";
  }
  
  return authToken;
};

export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem(key);
};
