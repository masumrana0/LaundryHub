import { ILaundryProduct } from "@/Interface/types";

export const isExistedData = (
  dataToCheck: ILaundryProduct | any,
  allData: ILaundryProduct[] | any
): boolean => {
  const isExistData = allData?.find(
    (data: ILaundryProduct) => data._id === dataToCheck._id
  );
  return !!isExistData; // Convert to boolean
};
