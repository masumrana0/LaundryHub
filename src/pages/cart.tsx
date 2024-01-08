import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import type { DrawerProps } from "antd/es/drawer";
import { FaCartShopping, FaTrashCan } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const laundryProducts = useAppSelector((state) => state.cart);
  console.log(laundryProducts)

  const showDefaultDrawer = () => {
    setOpen(true);
  };

  const showLargeDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button onClick={showLargeDrawer}>
          <FaCartShopping className="text-2xl" />
        </Button>
      </Space>
      <Drawer
        title={`large Drawer`}
        placement="right"
        size="large"
        onClose={onClose}
        open={open}
      >
        {/* <div>
          {laundryProducts?.map((laundryProduct) => (
            <div
              className="border-2 rounded shadow-lg shadow-green-400    mb-2"
              key={laundryProduct._id}
            >
              <p className="text-center font-semibold text-lg text-gray-600">
                {laundryProduct.service?.title}
              </p>

              <div className="py-2 px-4 flex justify-between item-center">
                <div className="flex items-center gap-4">
                  <button
                    // onClick={() => dispatch(removeToOrder(laundryProduct))}
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
        </div> */}
      </Drawer>
    </>
  );
};

export default App;
