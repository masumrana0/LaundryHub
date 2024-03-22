/**
 * Title: 'Signup Form'
 * Description: 'This authentication page Component.'
 * Author: 'Masum Rana'
 * Date: 07-12-2023
 *
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useUserSignupMutation } from "@/Redux/api/authApi";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useAppDispatch } from "@/Redux/hook";

// custom componnet
import Button from "../ui/Button";
import { setAuthState } from "@/Redux/features/auth/authSlice";
import { AuthValidations } from "@/Schema/Schema";
import { authKey } from "@/constants/storageKey";
import { storeLocalStorageInfo } from "@/services/auth.service";
import { IValidationResponse } from "@/Interface/shared";
import LoadingSpinner from "../Shared/Loading";
// import { ISignupData } from "@/Interface/auth";

const Signup = () => {
  // essential state
  const [validationResponse, setValidationResponse] =
    useState<IValidationResponse>({});
  // password visivility state
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  // redux
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [userSignup, { isLoading }] = useUserSignupMutation();

  // React Form hook handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AuthValidations.userSignupSchema) });

  // handling registration
  const onSubmit = async (signupData: any) => {
    const res = await userSignup(signupData).unwrap();

    if ("validationResponse" in res) {
      setValidationResponse(res?.validationResponse);
    } else if ("accessToken" in res) {
      storeLocalStorageInfo(authKey, res?.accessToken);
      toast.success("Signup successful! Check your email for verification.");
      router.push("/");
    }
  };

  // validationMessage
  const validationMessage =
    Object.keys(validationResponse).length > 0 && validationResponse?.message;

  return (
    <div className="lg:w-[450px]  mt-8  p-10  rounded-md shadow-lg ">
      <div>
        <h2 className="font-bold text-2xl lg:text-3xl text-center mb-10 ">
          Sign Up
        </h2>

        <div>
          {/* sign up form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
              {/* firstName  */}
              <div>
                <div className="border hover:border-green-400 py-2  px-4   rounded-xl focus:border-green-500 focus:outline-none border-gray-400 ">
                  <input
                    {...register("name.firstName")}
                    className="  w-full  outline-none focus:outline-none  bg-slate-50 "
                    type="text"
                    name="name.firstName"
                    placeholder="First Name"
                    id="firstName"
                  />
                </div>
                <p className="text-red-500 ms-2">
                  {errors.name?.firstName?.message}
                </p>
              </div>

              {/* lastName  */}
              <div className="">
                <div className="border border-gray-400 hover:border-green-400 py-2  px-4   rounded-xl focus:border-green-500 focus:outline-none m">
                  <input
                    {...register("name.lastName")}
                    className="  w-full  outline-none focus:outline-none bg-slate-50"
                    type="text"
                    name="name.lastName"
                    placeholder="Last Name"
                    id="lastName"
                  />
                </div>
                <p className="text-red-500 ms-2">
                  {errors.name?.lastName?.message}
                </p>
              </div>

              {/* loading state  */}
              {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="absolute">
                    <LoadingSpinner size="regular" />
                  </div>
                </div>
              )}

              {/* Phone Number  */}
              <div className="">
                <div className="border border-gray-400 hover:border-green-400 py-2  px-4   rounded-xl focus:border-green-500 focus:outline-none m">
                  <input
                    {...register("phoneNumber")}
                    className="  w-full  outline-none focus:outline-none bg-slate-50"
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    id="phoneNumber"
                  />
                </div>
                <p className="text-red-500 ms-2">
                  {errors.phoneNumber?.message}
                </p>
              </div>

              {/* emial  */}
              <div className="">
                <div className="border border-gray-400 hover:border-green-400  py-2  px-4   rounded-xl focus:border-green-500 focus:outline-none m">
                  <input
                    {...register("email")}
                    className="  w-full  outline-none focus:outline-none bg-slate-50"
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                  />
                </div>
                <p className="text-red-500 ms-2">{errors.email?.message}</p>
              </div>

              {/* password  */}
              <div className="">
                <div className="flex items-center  border border-gray-400 rounded-xl px-3 hover:border-green-500 ">
                  <input
                    {...register("password")}
                    className="  w-full py-2  outline-none focus:outline-none bg-slate-50  "
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    placeholder=" Password"
                    id="password"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    {isPasswordVisible ? (
                      <FaEyeSlash className="cursor-pointer" />
                    ) : (
                      <FaEye className="cursor-pointer" />
                    )}
                  </button>
                </div>
                <p className="text-red-500 ms-2">{errors.password?.message}</p>
              </div>

              {/* confirmPassword  */}
              <div className="">
                <div className="flex items-center  border border-gray-400  rounded-xl px-3 hover:border-green-500 ">
                  <input
                    {...register("confirmPassword")}
                    className="w-full py-2  outline-none focus:outline-none bg-slate-50"
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }
                  >
                    {isConfirmPasswordVisible ? (
                      <FaEyeSlash className="cursor-pointer" />
                    ) : (
                      <FaEye className="cursor-pointer" />
                    )}
                  </button>
                </div>
                <p className="text-red-500 ms-2">
                  {errors.confirmPassword?.message}
                </p>
              </div>
              {/* submit button */}
              <p className="text-red-500 ms-2"> {validationMessage}</p>
              <div className="flex justify-center ">
                <Button className="rounded-[5px] p-1 ">Signup</Button>
              </div>
            </div>
          </form>
          <h3 className="py-3 font-thin text-lg">
            Already have an account?{" "}
            <button
              onClick={() => dispatch(setAuthState())}
              className="text-xl  text-blue-500  rounded"
            >
              Signin
            </button>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Signup;
