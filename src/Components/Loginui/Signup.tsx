/**
 * Title: 'Signup Form'
 * Description: 'This Login page Component.'
 * Author: 'Masum Rana'
 * Date: 07-12-2023
 *
 */

import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import style from "../style/Loginui.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

import userSignupSchema from "@/Schema/Schema";

const Signup = () => {
  // Login State come to redux store
  const loginState = useSelector(
    (state: RootState) => state.loginState.loginState
  );

  // essential Component state
  const [isViewPass, setIsViewPass] = useState(false);
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  // React Form hook handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSignupSchema) });

  const togglePasswordVisibility = () => {
    setIsViewPass(!isViewPass);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div
      className={`border lg:absolute  ${
        loginState ? "left-40" : "left-[-2000px] hidden lg:block"
      }  lg:top-10  lg:my-10 rounded-lg shadow-lg ${
        style.form
      } w-[90%] mx-auto  lg:w-[30%] lg:p-16 p-5 `}
    >
      <h2 className="font-bold text-2xl lg:text-3xl text-center lg:mb-5 ">
        Sign Up
      </h2>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {/* firstName  */}
            <div className="lg:mb-3">
              <h3 className="lg:text-xl text-md">First Name</h3>
              <div className="border hover:border-blue-400 py-2  px-4   rounded-lg focus:border-blue-500 focus:outline-none m">
                <input
                  {...register("name.firstName")}
                  className="  w-full  outline-none focus:outline-none"
                  type="text"
                  name="name.firstName"
                  placeholder="enter your firstName"
                  id="firstName"
                />
              </div>
              <p className="text-red-500 ms-2">
                {errors.name?.firstName?.message}
              </p>
            </div>

            {/* lastName  */}
            <div className="lg:mb-3">
              <h3 className="lg:text-xl text-md">Last Name</h3>
              <div className="border hover:border-blue-400 py-2  px-4   rounded-lg focus:border-blue-500 focus:outline-none m">
                <input
                  {...register("name.lastName")}
                  className="  w-full  outline-none focus:outline-none"
                  type="text"
                  name="name.lastName"
                  placeholder="enter your lastName"
                  id="lastName"
                />
              </div>
              <p className="text-red-500 ms-2">
                {errors.name?.lastName?.message}
              </p>
            </div>

            {/* emial  */}
            <div className="lg:mb-3">
              <h3 className="lg:text-xl text-md">Email</h3>
              <div className="border hover:border-blue-400 py-2  px-4   rounded-lg focus:border-blue-500 focus:outline-none m">
                <input
                  {...register("email")}
                  className="  w-full  outline-none focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  id="email"
                />
              </div>
              <p className="text-red-500 ms-2">{errors.email?.message}</p>
            </div>

            {/* password  */}
            <div className="lg:mb-3">
              <h3 className="text-xl">Password</h3>
              <div className="flex items-center  border rounded-lg px-3 hover:border-blue-500 ">
                <input
                  {...register("password")}
                  className="  w-full py-2    outline-none focus:outline-none   "
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

            {/* confirmPassword  */}
            <div className="lg:mb-3">
              <h3 className="text-xl">Confirm Password</h3>
              <div className="flex items-center  border rounded-lg px-3 hover:border-blue-500 ">
                <input
                  {...register("confirmPassword")}
                  className="w-full py-2  outline-none focus:outline-none"
                  type={isViewPass ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="enter your confirm password"
                  id="confirmPassword"
                  value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)}
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  {isViewPass ? (
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

            <div className="flex justify-center  lg:mt-5">
              <button
                type="submit"
                className="border px-10 rounded-lg bg-blue-400 text-white font-bold  py-2 hover:bg-blue-500"
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

export default Signup;
