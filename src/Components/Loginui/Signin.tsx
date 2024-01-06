import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import style from "../style/Loginui.module.css";
import {
  getUserInfo,
  isLoggedIn,
  storeLocalStorageInfo,
} from "@/services/auth.service";
import { useUserSigninMutation } from "@/Redux/api/authApi";
import { useRouter } from "next/navigation";
import { authKey } from "@/constants/storageKey";
import { useAppSelector } from "@/Redux/hook";
import toast from "react-hot-toast";
import { ISigninData } from "@/Interface/auth";

const Signin = () => {
  // redux
  const [userSignin] = useUserSigninMutation();
  const authState = useAppSelector((state) => state.auth.authState);
  const [isViewPass, setIsViewPass] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISigninData>();

  const togglePasswordVisibility = () => {
    setIsViewPass(!isViewPass);
  };

  const onSubmit = async (data: ISigninData) => {
    const res = await userSignin(data).unwrap();
    if (res?.data?.accessToken) {
      // if(res.isEmailVerified){

      // }
      console.log(res.data.isEmailVerified);
      toast.success("You are Login successfully");
      router.push("/");
    }
    storeLocalStorageInfo(authKey, res?.data?.accessToken);
  };
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
              <div className="border hover:border-blue-400 py-2  px-4   rounded-lg focus:border-blue-500 focus:outline-none ">
                <input
                  {...register("email", { required: "email is required" })}
                  className="  w-full  outline-none focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  id="email"
                />
              </div>
              <p className="text-red-500 ms-2">{errors.email?.message}</p>
            </div>

            <div>
              <h3 className="text-xl">Password</h3>
              <div className="flex items-center  border rounded-lg px-3 hover:border-blue-500 ">
                <input
                  {...register("password", {
                    required: "password is required",
                  })}
                  className="w-full py-2 outline-none focus:outline-none"
                  type={isViewPass ? "text" : "password"}
                  name="password"
                  placeholder="enter your password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  {isViewPass ? (
                    <FaEyeSlash className="cursor-pointer" />
                  ) : (
                    <FaEye className="cursor-pointer" />
                  )}
                </button>
              </div>
              <p className="text-red-500 ms-2">{errors.password?.message}</p>
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
