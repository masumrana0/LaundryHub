import Image from "next/image";
import React, { useState } from "react";
import signinImg from "/public/login/signin.png";
import Button from "@/Components/ui/button";

const MovingCircle: React.FC = () => {
  const [isMoving, setIsMoving] = useState(false);

  const handleMove = () => {
    setIsMoving(!isMoving);
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div
        className="bg-green-400 w-[500px] h-[500px] lg:w-[110rem] lg:h-[110rem] left-[-50rem] top-[-53rem] rounded-full absolute"
        style={{
          transition: "transform 2s ease-in-out",
          transform: isMoving ? "translateX(100%)" : "translateX(0)",
        }}
      >
        <div className="relative">
          <div
            className={`absolute top-[64rem] right-[16rem] text-center ${
              isMoving && "hidden"
            }`}
          >
            <div className="relative">
              <div className="w-[500px] absolute right-0 ">
                <div>
                  <h2 className="font-bold lg:text-4xl text-gray-100">
                    New Here !
                  </h2>
                  <p className="text-lg text-gray-50 font-semibold">
                    Please create new Account.
                  </p>
                  <Button className="w-32 mt-3 bg-green-600 border rounded-[20px] font-bold border-white">
                    SIGNUP
                  </Button>
                </div>
                <div>
                  <Image
                    src={signinImg}
                    width={500}
                    height={500}
                    alt="signin img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="ml-4 px-4 py-2 rounded-md bg-green-500 text-white"
        onClick={handleMove}
      >
        {isMoving ? "Stop Moving" : "Start Moving"}
      </button>
    </div>
  );
};

export default MovingCircle;
