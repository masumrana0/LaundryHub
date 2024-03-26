import { IBooking } from "@/Interface/booking";

interface IBookingProps {
  booking: IBooking;
}
const DashboardLabel = ({ booking }: IBookingProps) => {
  const isApproved = booking?.isApproved;
  const isDelivered = booking?.isDelivered;
  return (
    <div className="flex justify-between">
      <div>
        <p>
          <span className="font-bold text-[10px] sm:text-md md:text-[14px]">
            TotalCost:
          </span>{" "}
          <span className="lg:text-md md:text-md sm:text-sm  text-[10px] font-extrabold text-gray-700">
            &#2547;
            <span className="font-semibold text-md">
              {" "}
              {booking?.grandPrice}
            </span>
          </span>
        </p>
      </div>
      <div>
        {isApproved ? (
          isDelivered ? (
            <h2 className="font-bold text-[10px] md:text-[12px]">Delivered</h2>
          ) : (
            <h2 className="font-bold text-[10px] md:text-[12px]">
              Proccessing...
            </h2>
          )
        ) : (
          <div className="flex  items-center gap-6 ">
            <h2 className="font-bold text-[10px] md:text-[12px]">Pending...</h2>
            <button
              className={`border px-2 sm:px-5 md:px-5 lg:px-6 py-2 rounded-xl text-white   sm:font-semibold transition-colors duration-300 bg-red-500 hover:bg-red-900`}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardLabel;
