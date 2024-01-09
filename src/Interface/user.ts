export type IName = {
  firstName: string;
  lastName?: string;
};

export type IUser = {
  _id?: string;
  name: IName;
  role: "customer" | "admin" | "super_admin";
  password: string;
  phoneNumber: string;
  email: string;
  passwordChangedAt?: Date;
  isPasswordChanged: boolean;
  isEmailVerified: boolean;
  profileImage?: string;
};

export interface ProfileResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: IUser;
}
