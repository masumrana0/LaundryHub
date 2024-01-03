import * as yup from "yup";

const userSignupSchema = yup.object({
  name: yup.object({
    firstName: yup.string().required("First Name is required."),
    lastName: yup.string().optional(),
  }),
  email: yup.string().required("email is required").email("Invalid email"),
  phoneNumber: yup.string().required("phoneNumber is required"),
  password: yup
    .string()
    .required("Password is requred")
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 6 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm you password")
    .oneOf([yup.ref("password")], "Password don't match."),
});

const userSigninSchema = yup.object({
  email: yup.string().required("email is required").email("Invalid email"),

  password: yup.string().required("Password is requred"),
});

export const AuthValidations = {
  userSigninSchema,
  userSignupSchema,
};
