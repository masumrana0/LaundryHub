import Image from "next/image";
import laundrybanner from "/public/storyset/laundry_2.png";
import Signin from "@/Components/Loginui/Signin";
import Signup from "@/Components/Loginui/Signup";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { setAuthState } from "@/Redux/features/auth/authSlice";

const Auth = () => {
  const isRegisterModalOpen = useAppSelector((state) => state.auth.authState);
  const dispatch = useAppDispatch();
  return (
    <div className=" h-screen bg-gray-50 ">
      <div className="container mx-auto  py-44 relative ">
        <div className="  flex  justify-center items-center gap-20    ">
          {/* left  part */}
          <div className=" relative   p-3  ">
            <h2 className="font-bold lg:text-4xl ">
              WelCome To <span className="text-green-500   ">LaundryHub</span>
            </h2>
            <p className="text-lg text-left font-thin  absolute py-5 ">
              Let's simplify your laundry routine and make life a little easier
              with <span className="text-green-400   ">LaundryHub</span>
            </p>
            <Image
              src={laundrybanner}
              width={400}
              height={400}
              className="mt-6"
              alt="LaundryHub img"
            />
          </div>
          {/* right part  */}
          <div>
            <Signin />
          </div>
        </div>

        <div className="lg:w-1/4 w-full m-4 lg:m-0 ">
          {isRegisterModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="bg-gray-50  p-6 rounded-xl">
                <Signup />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
