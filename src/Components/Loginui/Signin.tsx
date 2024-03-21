import { ISigninData } from "@/Interface/auth";
import { IValidationResponse } from "@/Interface/shared";
import { useUserSigninMutation } from "@/Redux/api/authApi";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { authKey } from "@/constants/storageKey";
import { storeLocalStorageInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import LoadingSpinner from "../Shared/Loading";
import { setAuthState } from "@/Redux/features/auth/authSlice";
import Button from "../ui/Button";

const Signin = () => {
  const isRegisterModalOpen = useAppSelector((state) => state.auth.authState);
  const dispatch = useAppDispatch();
  // essential state
  const [validationResponse, setValidationResponse] =
    useState<IValidationResponse>({});
  // redux
  const [userSignin, { isLoading }] = useUserSigninMutation();
  const authState = useAppSelector((state) => state.auth.authState);
  const [isViewPass, setIsViewPass] = useState(false);
  const router = useRouter();

  // handle form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISigninData>();

  // toogle visibility
  const togglePasswordVisibility = () => {
    setIsViewPass(!isViewPass);
  };

  // handle  submit form
  const onSubmit = async (signInData: ISigninData) => {
    const res = await userSignin(signInData).unwrap();
    // handling validation response and setup accessToken
    if ("validationResponse" in res?.data) {
      setValidationResponse(res?.data?.validationResponse);
    } else if ("accessToken" in res?.data) {
      storeLocalStorageInfo(authKey, res?.data?.accessToken);
      toast.success("You are Sigin successfully");
      router.push("/");
    }
  };

  // validationMessage
  const validationMessage =
    Object.keys(validationResponse).length > 0 && validationResponse?.message;

  return (
    <div className="w-full lg:p-20 px-10 shadow-xl shadow-green-100 rounded">
      <h2 className="font-bold text-3xl text-center mb-5 ">Sign In</h2>

      <div>
        {/* sigin form  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {/* email  */}
            <div className="mb-3">
              <h3 className="text-xl">Email</h3>
              {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="absolute">
                    {true && <LoadingSpinner size="regular" />}
                  </div>
                </div>
              )}
              <div className="border hover:border-green-400 py-2  px-4   rounded-xl focus:border-green-500 focus:outline-none border-gray-400 ">
                <input
                  {...register("email", { required: "email is required" })}
                  className="  w-full  outline-none focus:outline-none  bg-slate-50 "
                  defaultValue={"masum.rana6267@gmail.com"}
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  id="email"
                />
              </div>
              <p className="text-red-500 ms-2">{errors.email?.message}</p>
            </div>

            {/* password  */}
            <div>
              <h3 className="text-xl">Password</h3>
              <div className="flex items-center border hover:border-green-400 py-2  px-4   rounded-xl focus:border-green-500 focus:outline-none border-gray-400 ">
                <input
                  {...register("password", {
                    required: "password is required",
                  })}
                  className="  w-full  outline-none focus:outline-none  bg-slate-50 "
                  type={isViewPass ? "text" : "password"}
                  defaultValue={"123456"}
                  name="password"
                  placeholder="enter your password"
                  id="password"
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  {isViewPass ? (
                    <FaEyeSlash className="cursor-pointer" />
                  ) : (
                    <FaEye className="cursor-pointer" />
                  )}
                </button>
              </div>
              <p className="text-red-500 ms-2"> {errors.password?.message}</p>
              <p className="text-red-500 ms-2"> {validationMessage}</p>
            </div>
            {/* button  */}
            <div className="flex justify-center  mt-5  ">
              <Button
                isLoading={isLoading}
                className=" rounded-[4px] hover:shadow-lg  "
              >
                Sign in
              </Button>
            </div>
          </div>
        </form>
        <h3 className="py-3 font-thin text-lg">
          Don't have an account?{" "}
          <button
            onClick={() => dispatch(setAuthState())}
            className="text-xl  text-blue-500  rounded"
          >
            Signup
          </button>
        </h3>
      </div>
    </div>
  );
};

export default Signin;
