import { IName } from "./user";

export interface ISigninData {
  email: string;
  password: string;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}

export interface ISignupData {
  _id?: string;
  name: IName;
  role: "customer" | "admin" | "super_admin";
  password: string;
  phoneNumber: string;
  email: string;
  profileImage?: string;
}
