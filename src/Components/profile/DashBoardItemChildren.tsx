/**
 * Title: 'Dashborad content'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 10-01-2024
 *
 */

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
        <Link href={`serviceDetails/${service?.service}`}>
          <div
            key={index}
            className="px-2 border-2 rounded shadow-lg shadow-green-100 mb-2"
          >
            <div className="py-2 px-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h2 className="font-semibold text-[10px] md:text-md lg:text-[14px]">
                  {service?.cleaningProduct?.name}
                </h2>
              </div>
              <p>
                <span className="lg:text-xl text-md font-extrabold text-gray-600">
                  &#2547;
                  <span className="font-semibold text-md">
                    {service?.cleaningProduct?.price}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DashBoardItemChildren;
