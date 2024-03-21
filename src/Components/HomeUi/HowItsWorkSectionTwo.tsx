/**
 * Title: 'How to work '
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 26-12-2023
 *
 */

import Image from "next/image";
import icon1 from "/public/icons/icon1.png";
import icon2 from "/public/icons/icon2-1.png";
import icon3 from "/public/icons/icon3.png";

const HowItsWorkSectionTwo = () => {
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

      <div className="flex flex-col md:flex-row mx-auto items-center  ">
        {/* first*/}
        <div className="group p-10   lg:w-auto w-[25rem] relative">
          <div className="border group-hover:bg-amber-300 bg-gray-300 h-[7rem] w-[7rem] rounded-full mx-auto mb-4">
            <Image
              className="transition-transform ease-in-out duration-1000  group-hover:translate-x-[2rem] group-hover:translate-y-[-2.5rem] mx-auto my-2 "
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

        {/* Second*/}
        <div className="group p-10   lg:w-auto w-[25rem] relative">
          <div className="border group-hover:bg-amber-300 bg-gray-300 h-[7rem] w-[7rem] rounded-full mx-auto mb-4">
            <Image
              className="transition-transform ease-in-out duration-1000  group-hover:translate-x-[2rem] group-hover:translate-y-[-2.5rem] mx-auto my-2 "
              src={icon2}
              alt="icon"
            />
          </div>
          <h3 className="font-semibold text-xl mb-2">QUICKER DELIVERY</h3>
          <p>
            We ensure delivery in the quickest of the turnaround time in the
            industry. Superior quality of service with speed!
          </p>
        </div>
        {/* third*/}
        <div className="group p-10  lg:w-auto w-[25rem] relative">
          <div className="border group-hover:bg-amber-300 bg-gray-300 h-[7rem] w-[7rem] rounded-full mx-auto mb-4">
            <Image
              className="transition-transform ease-in-out duration-1000  group-hover:translate-x-[2rem] group-hover:translate-y-[-2.5rem] mx-auto my-2 "
              src={icon3}
              alt="icon"
            />
          </div>
          <h3 className="font-semibold text-xl mb-2">
            DELIVERY AT THE DOORSTEP!
          </h3>
          <p>
            We have pioneered the concept of pickup and delivery in the shortest
            possible time. We intend keeping it that way!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorkSectionTwo;
