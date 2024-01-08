import { ISelectService } from "@/Interface/booking";
import { ILaundryProduct } from "@/Interface/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  laundryProducts: ILaundryProduct[];
}

const initialState: IinitialState = {
  laundryProducts: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToOrCard: (state, action: PayloadAction<ILaundryProduct>) => {
      const doesExist = state.laundryProducts.find(
        (product: ILaundryProduct) => product?._id === action.payload?._id
      );

      if (doesExist && doesExist.quntity! >= 1) {
        doesExist.quntity = doesExist.quntity! + 1;
        doesExist.price = doesExist.price + action.payload.price;
      } else {
        state.laundryProducts.push({ ...action.payload, quntity: 1 });
      }
    },
  },
});

export const { addToOrCard } = cartSlice.actions;

export default cartSlice.reducer;
