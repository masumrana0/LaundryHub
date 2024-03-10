import { ISigninData } from "@/Interface/auth";
import { IValidationResponse } from "@/Interface/shared";
import { useUserSigninMutation } from "@/Redux/api/authApi";
import { useAppSelector } from "@/Redux/hook";
import { authKey } from "@/constants/storageKey";
import { storeLocalStorageInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Signin = () => {
  // essential state
  const [validationResponse, setValidationResponse] =
    useState<IValidationResponse>({});
  // redux
  const [userSignin] = useUserSigninMutation();
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
    <div
      className={`border lg:absolute ${
        authState ? "right-[-2000px] hidden lg:block" : "right-40 "
      }  top-52 my-10 rounded-lg shadow-lg  lg:p-24 lg:w-[30%] w-[90%] mx-auto p-10`}
    >
      <h2 className="font-bold text-3xl text-center mb-5 ">Sign In</h2>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-3">
              <h3 className="text-xl">Email</h3>
              <div className="border hover:border-green-400 py-2  px-4   rounded-lg focus:border-green-500 focus:outline-none ">
                <input
                  {...register("email", { required: "email is required" })}
                  className="  w-full  outline-none focus:outline-none"
                  defaultValue={"masum.rana6267@gmail.com"}
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  id="email"
                />
              </div>
              <p className="text-red-500 ms-2">{errors.email?.message}</p>
            </div>

            <div>
              <h3 className="text-xl">Password</h3>
              <div className="flex items-center  border rounded-lg px-3 hover:border-green-500 ">
                <input
                  {...register("password", {
                    required: "password is required",
                  })}
                  className="w-full py-2 outline-none focus:outline-none"
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

            <div className="flex justify-center  mt-5">
              <button
                type="submit"
                className="border px-10 rounded bg-green-400 shadow-lg   shadow-gray-400 hover:text-white font-semibold text-lg  py-2 hover:bg-green-700 transition-colors duration-300 text-white "
              >
                SignIn
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
