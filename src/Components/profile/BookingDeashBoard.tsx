import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import DashBoardDataItem from "./BookingDashBoardItem";
import UseCollapse from "../Shared/Collapse/Collapse";
import { useGetUserBookingHistoryQuery } from "@/Redux/api/bookingApi";
import { useAppDispatch } from "@/Redux/hook";
import { setUserBookingHistory } from "@/Redux/features/order/orderSlice";

const BookingDeashBoard = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetUserBookingHistoryQuery(null);
  if (data?.statusCode == 200) {
    dispatch(setUserBookingHistory(data?.data));
  }

  return (
    <div className="container">
      <UseCollapse items={DashBoardDataItem} />
    </div>
  );
};

export default BookingDeashBoard;
