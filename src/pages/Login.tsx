import style from "../Components/style/Loginui.module.css";
import Image from "next/image";
import signin from "../../public/login/signin.png";
import signup from "../../public/login/signup.png";
import { useState } from "react";
import Signin from "@/Components/Loginui/Signin";

const Login = () => {
  const [isSignup, setSignup] = useState(false);

  return (
    <div>
      <div className={`${style.main}`}>
        <div
          className={` bg-blue-500  flex justify-end items-center   ${
            isSignup ? style.afiterClickCircle : style.circle
          }`}
        >
          {isSignup ? (
            <h1>Hello</h1>
          ) : (
            <div className="flex items-center lg:gap-6 ">
              <Image src={signup} width={600} height={100} alt="signup-img" />
              <div className="text-center text-white lg:me-[100px] lg:mt-[50px]">
                <h2 className="font-bold lg:text-4xl">New Here !</h2>
                <p className="lg:text-2xl">Welcome to LaundryHub</p>
                <button
                  onClick={() => setSignup(!isSignup)}
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
        </div>
      </div>
    </div>
  );
};

export default Login;
