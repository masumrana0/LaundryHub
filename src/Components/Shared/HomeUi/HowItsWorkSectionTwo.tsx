/**
 * Title: 'How to work '
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 26-12-2023
 *
 */

import Image from "next/image";
import style from "../../../Components/style/Homeui.Sectiontwo.module.css";
import icon1 from "../../../../public/icons/icon1.png";

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

      <div className="flex  mx-auto items-center">
        <div className={`p-10 `}>
          <div
            className={`   h-[7rem] w-[7rem] bg-gray-300 rounded-full mx-auto  mb-4`}
          >
            <Image className="mx-auto" src={icon1} alt="icon" />
          </div>
          <h3 className="headText font-semibold text-xl mb-2">
            WE PICK YOUR CLOTHES
          </h3>
          <p>
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>

        {/* div */}
        <div className="p-10 ">
          <div className="h-[7rem] w-[7rem] bg-gray-300 rounded-full mx-auto  mb-4  ">
            <Image className="mx-auto" src={icon1} alt="icon" />
          </div>
          <h3 className="font-semibold text-xl mb-2">WE PICK YOUR CLOTHES</h3>
          <p>
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>
        <div className="p-10">
          <div className="h-[7rem] w-[7rem] bg-gray-300 rounded-full mx-auto  mb-4">
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
