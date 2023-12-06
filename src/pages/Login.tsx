import style from "../Components/style/Loginui.module.css";
import Image from "next/image";
import signin from "../../public/login/signin.png";
import signup from "../../public/login/signup.png";
import { useState } from "react";
import Signin from "@/Components/Loginui/Signin";
import { FaLessThanEqual } from "react-icons/fa6";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/Redux/store";
import { loginStateCore } from "@/Redux/features/login/loginSlice";
import Signup from "@/Components/Loginui/Signup";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignup, setSignup] = useState(false);
  const loginState = useSelector(
    (state: RootState) => state.loginState.loginState
  );
  console.log(loginState);
  return (
    <div>
      <div className={`${style.main}`}>
        <div
          className={` bg-blue-500  flex justify-end items-center   ${
            loginState ? style.afiterClickCircle : style.circle
          }`}
        >
          {loginState ? (
            <div className="flex items-center">
              <div className="text-center text-white lg:me-[100px] lg:mt-[50px]">
                <h2 className="font-bold lg:text-4xl">Sigin</h2>
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
                className="lg:me-96"
              />
            </div>
          ) : (
            <div className="flex items-center lg:gap-6 ">
              <Image src={signup} width={600} height={100} alt="signup-img" />
              <div className="text-center text-white lg:me-[100px] lg:mt-[50px]">
                <h2 className="font-bold lg:text-4xl">New Here !</h2>
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
