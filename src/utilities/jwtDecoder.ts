import { jwtDecode } from "jwt-decode";
export const jwtDecoder = (token: string) => {
  const decodedData = jwtDecode(token);
  return decodedData;
};
