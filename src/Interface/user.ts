type IName = {
  firstName: string;
  lastName: string;
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
  data: ProfileData;
}

interface ProfileData {
  _id: string;
  name: Name;
  role: string;
  email: string;
  phoneNumber: string;
  isEmailVerified: boolean;
  isPasswordChanged: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

interface Name {
  firstName: string;
  lastName: string;
  _id: string;
  id: string;
}
