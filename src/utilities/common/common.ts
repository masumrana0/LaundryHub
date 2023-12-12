import { ILaundryProduct } from "@/Interface/types";

export const isExistedData = (
  data: ILaundryProduct | any,
  AllData: ILaundryProduct[] | any
): { status: boolean; isExistedData: ILaundryProduct } => {
  const isExistData = AllData?.find(
    (data: ILaundryProduct) => data._id === data._id
  );
  if (isExistData) {
    return { status: true, isExistedData: isExistData };
  } else {
    return { status: false, isExistedData: isExistData };
  }
};
