import { IBooking } from "@/Interface/booking";

const isApproved = false;
const isDelivered = false;

const DashboardLabel = () => {
  //   console.log(booking);
  return (
    <div className="flex justify-between">
      <div>
        <p>
          <span className="font-bold text-lg">TotalCost:</span>{" "}
          <span className="text-xl font-extrabold text-green-400">
            &#2547;
            <span className="font-semibold text-md"> 3002</span>
          </span>
        </p>
      </div>
      <div>
        {isApproved ? (
          isDelivered ? (
            <h2 className="font-bold">Delivered</h2>
          ) : (
            <h2 className="font-bold">Proccessing...</h2>
          )
        ) : (
          <div className="flex  items-center gap-6 ">
            <h2 className="font-bold">Pending...</h2>
            <button
              className={`border px-10 py-2 rounded-xl text-white font-bold transition-colors duration-300 bg-red-500 hover:bg-red-900`}
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
