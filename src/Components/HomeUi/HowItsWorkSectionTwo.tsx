/**
 * Title: 'How to work '
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 26-12-2023
 *
 */

import Image from "next/image";
import style from "../../../Components/style/Homeui.Sectiontwo.module.css";
import icon1 from "/public/icons/icon1.png";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

const HowItsWorkSectionTwo = () => {
  const [hoverState, setHoverState] = useState(0);

  //   useEffect(() => {
  //     gsap.to(".img", {
  //       x: 60,
  //       y: -5,
  //       delay: 1,
  //     });
  //   }, [hoverState]);

  return (
    <div className={` container mx-auto text-center mt-20`}>
      <div className=" mb-10">
        <p className="text-xl text-center font-thin tracking-tighter">
          We Clean EveryThing
        </p>
        <h3 className="text-3xl font-semibold">
          This is <span className="font-bold">How We Work</span>
        </h3>
      </div>

      <div className="flex  mx-auto items-center  ">
        {/* div */}
        <div
          className="p-10 border lg:w-auto w-[25rem]  relative "
          onMouseEnter={() => setHoverState(1)}
          onMouseLeave={() => setHoverState(0)}
        >
          <div
            className={`${
              hoverState === 1 ? "bg-green-400" : "bg-gray-300"
            }   h-[7rem] w-[7rem]  rounded-full mx-auto  mb-4 transition-colors ease-in duration-300 `}
          >
            <Image
              className={`mx-auto absolute  ${
                hoverState === 1
                  ? "left-[13rem] top-[-0.2rem]  "
                  : "left-[11rem]"
              } transition-all duration-200 `}
              src={icon1}
              alt="icon"
            />
          </div>
          <h3 className="font-semibold text-xl mb-2">WE PICK YOUR CLOTHES</h3>
          <p>
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>

        <div
          className="p-10 border lg:w-auto w-[25rem]  "
          onMouseEnter={() => setHoverState(1)}
          onMouseLeave={() => setHoverState(0)}
        >
          <div
            className={`${
              hoverState === 1 ? "bg-green-400" : "bg-gray-300"
            }  h-[7rem] w-[7rem]  rounded-full mx-auto  mb-4 transition-colors duration-300 `}
          >
            <Image className="mx-auto" src={icon1} alt="icon" />
          </div>
          <h3 className="font-semibold text-xl mb-2">WE PICK YOUR CLOTHES</h3>
          <p>
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>
        <div
          className="p-10 border lg:w-auto w-[25rem]  "
          onMouseEnter={() => setHoverState(1)}
          onMouseLeave={() => setHoverState(0)}
        >
          <div
            className={`${
              hoverState === 1 ? "bg-green-400" : "bg-gray-300"
            }  h-[7rem] w-[7rem]  rounded-full mx-auto  mb-4 transition-colors duration-300 `}
          >
            <Image className="mx-auto" src={icon1} alt="icon" />
          </div>
          <h3 className="font-semibold text-xl mb-2">WE PICK YOUR CLOTHES</h3>
          <p>
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorkSectionTwo;
