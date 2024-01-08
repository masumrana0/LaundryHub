import React from "react";
import { Button, Result } from "antd";
import Link from "next/link";
import { IBookingResult } from "@/Interface/booking";

const BookingResult = ({
  bookingResult,
}: {
  bookingResult: IBookingResult;
}) => {
  const { success, orderId } = bookingResult;

  return success ? (
    <Result
      status="success"
      title="Booking Submitted Successfully"
      subTitle={`Booking number: ${orderId}. Your booking is being reviewed by our team, typically taking 1-5 minutes. Please wait. Thank you.`}
      extra={[
        <Link href="/" key="homeLink">
          <Button className=" bg-green-400" type="primary" key="homeButton">
            Go Home
          </Button>
        </Link>,
        <Link href="/laundry" key="bookingLink">
          <Button className=" bg-green-400" type="primary" key="bookingButton">
            Book Again
          </Button>
        </Link>,
      ]}
    />
  ) : (
    <Result
      status="warning"
      title="There are some problems with your operation."
      extra={
        <Link href="/" key="homeLink">
          <Button className="bg-green-400" type="primary" key="homeButton">
            Go Home
          </Button>
        </Link>
      }
    />
  );
};

export default BookingResult;
