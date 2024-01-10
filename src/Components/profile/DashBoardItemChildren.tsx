// Assuming ILaundryProduct and IBooking interfaces are defined correctly in their respective files

import { IBooking } from "@/Interface/booking";

import Link from "next/link";
import { Key } from "react";

interface IBookingProps {
  booking: IBooking;
}

const DashBoardItemChildren = ({ booking }: IBookingProps) => {
  return (
    <div className="">
      {booking?.services?.map((service: any, index: Key | null | undefined) => (
        <div
          key={index}
          className="px-2 border-2 rounded shadow-lg shadow-green-400 mb-2"
        >
          <p className="text-center font-semibold text-lg text-gray-600">
            <Link href="/" passHref>
              <button className="border px-5 rounded-xl text-white font-bold transition-colors duration-300 bg-green-500 hover:bg-green-900">
                Service
              </button>
            </Link>
          </p>

          <div className="py-2 px-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h2 className="font-bold lg:text-xl">Man Grooming Products</h2>
            </div>
            <p>
              <span className="text-xl font-extrabold text-green-400">
                &#2547;<span className="font-semibold text-md"> 200</span>
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoardItemChildren;
