import Laundry from "@/pages/laundry";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import latestVersion from "latest-version";
import { number } from "yup";

interface ILaundryProduct {
  _id: string;
  category: "men" | "woman" | "home";
  name: string;
  price: number;
  quntity?: number;
}

interface IinitialState {
  laundryProducts: ILaundryProduct[];
}

const initialState: IinitialState = {
  laundryProducts: [],
};

const orderSlice = createSlice({
  name: "laundryProduct",
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<ILaundryProduct>) => {
      const doesExist = state.laundryProducts.find(
        (product: ILaundryProduct) => product?._id === action.payload?._id
      );
      // console.log(doesExist);
      if (doesExist && doesExist.quntity! >= 1) {
        doesExist.quntity = doesExist.quntity! + 1;
        doesExist.price = doesExist.price + action.payload.price;
      } else {
        state.laundryProducts.push({ ...action.payload, quntity: 1 });
      }
    },

    removeOneToOrder: (state, action: PayloadAction<ILaundryProduct>) => {
      const doesExist = state.laundryProducts.find(
        (product) => product?._id === action.payload._id
      );
      if (doesExist && doesExist.quntity! > 1) {
        doesExist.quntity = doesExist.quntity! - 1;
        doesExist.price = doesExist.price - action.payload.price;
      } else {
        const removeProduct = state.laundryProducts.filter(
          (product) => product._id !== action.payload?._id
        );
        state.laundryProducts = removeProduct;
      }
    },
  },
});

export const { addToOrder, removeOneToOrder } = orderSlice.actions;

export default orderSlice.reducer;
