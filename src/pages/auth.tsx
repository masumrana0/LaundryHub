import Image from "next/image";
import laundrybanner from "/public/storyset/laundry_2.png";
import Signin from "@/Components/Loginui/Signin";
import Signup from "@/Components/Loginui/Signup";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";

const Auth = () => {
  const isRegisterModalOpen = useAppSelector((state) => state.auth.authState);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen my-auto bg-gray-50 flex justify-center items-center relative ">
      <div className="lg:container mx-auto      ">
        <div className="flex md:flex-row flex-col justify-center  md:items-center gap-0 ">
          {/* left  part */}
          <div className=" lg:w-1/2 text-gray-800 lg:p-5 p-20 ">
            <h2 className="font-bold lg:text-4xl text-3xl  ">
              WelCome To <span className="text-green-500 ">LaundryHub</span>
            </h2>
            <p className="text-lg  font-semibold   ">
              Let's make your life easier!
            </p>

            <Image
              src={laundrybanner}
              width={500}
              height={500}
              placeholder="blur"
              className="mt-6"
              alt="LaundryHub img"
            />
          </div>

          {/* right part  */}

          <div className="lg:w-1/2">
            <Signin />
          </div>
        </div>

        {/* register modal opening handling */}
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
