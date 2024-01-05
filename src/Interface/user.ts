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
