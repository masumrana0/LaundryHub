import style from "../Components/style/Loginui.module.css";
import Image from "next/image";
import signin from "../../public/login/signin.png";
import signup from "../../public/login/signup.png";
import { useState } from "react";
import Signin from "@/Components/Loginui/Signin";
import { FaLessThanEqual } from "react-icons/fa6";
import { Provider, useDispatch } from "react-redux";
import { RootState, store } from "@/Redux/store";
import { loginStateCore } from "@/Redux/features/login/loginSlice";
import Signup from "@/Components/Loginui/Signup";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { isLoggedIn } from "@/services/auth.service";

const Login = () => {
  const dispatch = useAppDispatch();
  const [isSignup, setSignup] = useState(false);
  const loginState = useAppSelector(
    (state: RootState) => state.loginState.loginState
  );

  return (
    <div>
      <div className={`${style.main}`}>
        <div
          className={` bg-green-500 w-[500px] h-[500px] lg:w-[70%] lg:h-[1300px]  rounded-full absolute  lg:top-[-200px]  flex justify-center items-start lg:justify-end lg:items-center ${
            loginState
              ? "top-[550px] right-[-60px]  lg:right-[-300px]"
              : "top-[450px] left-[-60px]  lg:left-[-300px] "
          }`}
        >
          {loginState ? (
            <div className="flex items-center">
              <div className="text-center text-white lg:me-[100px] lg:mt-[50px]">
                <h2 className="font-bold text-2xl mt-1 lg:mt-0 lg:text-4xl">
                  Sign in
                </h2>
                <p className="lg:text-2xl">Already have an account</p>
                <button
                  onClick={() => dispatch(loginStateCore())}
                  className="border border-white px-10 py-2 font-bold rounded-lg mt-3 bg-200 hover:bg-blue-700"
                >
                  Signin
                </button>
              </div>
              <Image
                src={signin}
                width={500}
                height={100}
                alt="signin-img"
                className=" hidden lg:block lg:me-96"
              />
            </div>
          ) : (
            <div className="flex items-center  lg:gap-6 ">
              <Image
                src={signup}
                width={600}
                height={100}
                alt="signup-img"
                className=" hidden lg:block lg:me-50"
              />
              <div className="text-center text-white lg:me-[100px] lg:mt-[50px]">
                <h2 className="font-bold text-2xl mt-10 lg:mt-0 lg:text-4xl">
                  New Here !
                </h2>
                <p className="lg:text-2xl">Welcome to LaundryHub</p>
                <button
                  onClick={() => dispatch(loginStateCore())}
                  className="border border-white px-10 py-2 font-bold rounded-lg mt-3 bg-200 hover:bg-blue-700"
                >
                  Signup
                </button>
              </div>
            </div>
          )}
        </div>

        <div>
          <Signin />
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default Login;
