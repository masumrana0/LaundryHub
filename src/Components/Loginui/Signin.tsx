import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import style from "../style/Loginui.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

type ISigninData = {
  email: string;
  password: string;
};

const Signin = () => {
  const loginState = useSelector(
    (state: RootState) => state.loginState.loginState
  );

  // console.log(loginState);

  const [isViewPass, setIsViewPass] = useState(false);
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISigninData>();

  const togglePasswordVisibility = () => {
    setIsViewPass(!isViewPass);
  };

  const onSubmit = (data: ISigninData) => {};
  return (
    <div
      className={`border absolute ${
        loginState ? "right-[-2000px]" : "right-40"
      }  top-52 my-10 rounded-lg shadow-lg ${style.form} p-24   `}
    >
      <h2 className="font-bold text-3xl text-center mb-5 ">Sign In</h2>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-3">
              <h3 className="text-xl">Email</h3>
              <div className="border hover:border-blue-400 py-2  px-4   rounded-lg focus:border-blue-500 focus:outline-none m">
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

            <div className="flex justify-center  mt-5">
              <button
                type="submit"
                className="border px-10 rounded-lg bg-blue-400 text-white font-bold  py-2 hover:bg-blue-500"
              >
                SignIn
              </button>
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign Up
                </button>
              </div> */}
        </form>
      </div>
    </div>
  );
};

export default Signin;
