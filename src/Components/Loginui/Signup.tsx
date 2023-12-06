import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import style from "../style/Loginui.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

type ISignupData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPass: string;
};

const Signup = () => {
  const loginState = useSelector(
    (state: RootState) => state.loginState.loginState
  );

  console.log(loginState);
  loginState ? console.log("left-50") : console.log("left-[-500px]");
  const [isViewPass, setIsViewPass] = useState(false);
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignupData>();

  const togglePasswordVisibility = () => {
    setIsViewPass(!isViewPass);
  };

  const onSubmit = (data: ISignupData) => {};
  return (
    <div
      className={`border absolute  ${
        loginState ? "left-40" : "left-[-2000px]"
      }  top-10 my-10 rounded-lg shadow-lg ${style.form} p-16`}
    >
      <h2 className="font-bold text-3xl text-center mb-5 ">Sign Up</h2>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-3">
              <h3 className="text-xl">First Name</h3>
              <div className="border hover:border-blue-400 py-2  px-4   rounded-lg focus:border-blue-500 focus:outline-none m">
                <input
                  {...register("firstName", {
                    required: "FirstName is required",
                  })}
                  className="  w-full  outline-none focus:outline-none"
                  type="text"
                  name="firstName"
                  placeholder="enter your firstName"
                  id="firstName"
                />
              </div>
              <p className="text-red-500 ms-2">{errors.email?.message}</p>
            </div>

            <div className="mb-3">
              <h3 className="text-xl">Last Name</h3>
              <div className="border hover:border-blue-400 py-2  px-4   rounded-lg focus:border-blue-500 focus:outline-none m">
                <input
                  {...register("lastName", { required: false })}
                  className="  w-full  outline-none focus:outline-none"
                  type="text"
                  name="LastName"
                  placeholder="enter your lastName"
                  id="email"
                />
              </div>
              <p className="text-red-500 ms-2">{errors.email?.message}</p>
            </div>

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

            <div className="mb-3">
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

            <div className="mb-3">
              <h3 className="text-xl">Confirm Password</h3>
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
