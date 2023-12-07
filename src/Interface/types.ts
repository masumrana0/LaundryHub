import { UseFormRegisterReturn } from "react-hook-form";
export interface IFormInput {
  name: string;
  type: "text" | "password" | "email" | "number" | "etc"; // Define the specific types you'll use
  placeholder?: string;
  register: UseFormRegisterReturn;
  label: string;
  errorMessage: string;
}
