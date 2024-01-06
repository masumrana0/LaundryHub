import { IUser } from "./user";

export type IReview = {
  service: string;
  review: string;
};

type arrayOFString = string;

export type IService = {
  _id?: string;
  title: string;
  images: arrayOFString[];
  details: arrayOFString[];
  reviews: IReview[];
};
