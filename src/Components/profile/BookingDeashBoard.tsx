import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import UseCollapse from "../Shared/Collapse/Collapse";
import { useGetUserBookingHistoryQuery } from "@/Redux/api/bookingApi";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { setUserBookingHistory } from "@/Redux/features/order/orderSlice";
import LoadingSpinner from "../Shared/Loading";
import { useState } from "react";

// items

import DashboardLabel from "./DashBoradLabel";
import DashBoardItemChildren from "./DashBoardItemChildren";
import { store } from "@/Redux/store";
import { IBooking } from "@/Interface/booking";

const DashBoardDataItem: CollapseProps["items"] = [];
const currentState = store.getState();

const BookingDeashBoard = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetUserBookingHistoryQuery(null);

  data?.data?.forEach((booking: IBooking, index: number) => {
    DashBoardDataItem.push({
      key: `${index + 1}`,
      label: <DashboardLabel booking={booking} />,
      children: <DashBoardItemChildren booking={booking} />,
    });
  });

  return (
    <div className="container">
      {isLoading ? (
        <div className="flex justify-center items-center h-[70vh]">
          <LoadingSpinner />
        </div>
      ) : (
        <UseCollapse items={DashBoardDataItem} />
      )}
    </div>
  );
}

export default BookingDeashBoard;
