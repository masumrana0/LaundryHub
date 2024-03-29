import { ILaundryProduct } from "@/Interface/types";
import { addToOrCart } from "@/Redux/features/Cart/addToCart";
import {
  addGrandPrice,
  removeToOrder,
  setBookingState,
} from "@/Redux/features/order/orderSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

const OrderSection = () => {
  const dispatch = useAppDispatch();

  const [deliveryCost, setDeliveryCost] = useState<number>(0);
  const { laundryProducts } = useAppSelector((state) => state.order);
  const bookingState = useAppSelector((state) => state.order.bookingState);

  const subTotal = laundryProducts.reduce(
    (accumulator, laundryProduct) => accumulator + laundryProduct.price,
    0
  );

  const grandTotal = subTotal + deliveryCost;

  // for service chages  Calculation
  useEffect(() => {
    // Run this logic whenever laundryProducts length changes
    if (laundryProducts.length === 1) {
      setDeliveryCost(40);
    } else if (laundryProducts.length === 3) {
      setDeliveryCost(60); // Reset delivery cost if not equal to 1
    } else if (3 < laundryProducts.length) {
      setDeliveryCost(100);
    } else if (laundryProducts.length === 0) {
      dispatch(setBookingState(false));
    }
    dispatch(addGrandPrice(grandTotal));
  }, [laundryProducts]);

  return (
    <div>
      <div className="text-center border-b-2 mb-1  bg-green-400 py-3 text-white ">
        <h2 className="font-bold   text-3xl">Your Order</h2>
        <p className="mb-2 text-lg">Total Item: {laundryProducts.length}</p>
      </div>

      <div
        className={`  overflow-y-auto   h-[300px] lg:h-[400px]   transition-height duration-300 ease-in-out   border  `}
      >
        <div>
          {laundryProducts?.map((laundryProduct: ILaundryProduct) => (
            <div
              className="border-2 rounded    px-2 py-2    mb-2"
              key={laundryProduct._id}
            >
              <p className="text-center font-semibold text-lg text-gray-600">
                {laundryProduct?.services?.title}
              </p>

              <div className="py-2 px-4 flex justify-between item-center">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => dispatch(removeToOrder(laundryProduct))}
                  >
                    {" "}
                    <FaTrashCan className="text-2xl hover:text-red-500  " />
                  </button>
                  <h2 className="font-semibold lg:text-xl ">
                    {laundryProduct.name}
                  </h2>
                </div>
                <p>
                  <span className="text-xl font-extrabold  text-green-400">
                    &#2547;
                    <span className="font-semibold text-md">
                      {" "}
                      {laundryProduct?.price}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-10">
        <div>
          <div className="flex justify-between items-center mb-5 ">
            <h3 className="font-bold">Sub Total</h3>
            <span className="text-lg font-extrabold text-green-400">
              &#2547;
              <span className="font-semibold text-md"> {subTotal}</span>
            </span>
          </div>

          <div className="flex justify-between items-center mb-5 ">
            <h3 className="font-bold">Delivery Charge</h3>
            <span className="text-lg font-extrabold text-green-400">
              &#2547;
              <span className="font-semibold text-md"> {deliveryCost}</span>
            </span>
          </div>

          <div className="flex justify-between  items-center">
            <h3 className="font-bold">Grand Total</h3>{" "}
            <span className="text-lg font-extrabold text-green-400">
              &#2547;
              <span className="font-semibold text-md"> {grandTotal}</span>
            </span>
          </div>

          <div className="flex justify-center gap-4 ">
            <div className={`mt-5 ${bookingState ? "hidden" : " "}  `}>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  dispatch(setBookingState(true));
                }}
                disabled={laundryProducts.length === 0}
                className={`border  px-8 py-2 rounded-xl     e  font-bold transition-colors duration-300 ${
                  laundryProducts.length === 0
                    ? " bg-gray-500 text-gray-400 "
                    : "bg-green-500 hover:bg-green-900 text-white"
                }`}
              >
                Next
              </button>
            </div>
            <div className={`mt-5 `}>
              <button
                onClick={() => dispatch(addToOrCart(laundryProducts))}
                disabled={laundryProducts.length === 0}
                className={`border px-2  md:px-8 py-2 rounded-xl   font-semibold md:font-bold transition-colors duration-300 ${
                  laundryProducts.length === 0
                    ? " bg-gray-500 text-gray-400"
                    : "bg-green-500 hover:bg-green-900 text-white"
                }`}
              >
                addToCart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
