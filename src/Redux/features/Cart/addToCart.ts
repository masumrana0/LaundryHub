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
    addToOrCart: (state, action: PayloadAction<ILaundryProduct[]>) => {
      state.laundryProducts = action.payload;
    },
    removeToCart: (state, action: PayloadAction<ILaundryProduct>) => {
      const doesExist = state.laundryProducts.find(
        (product) => product?._id === action.payload?._id
      );

      if (doesExist) {
        const removeProduct = state.laundryProducts.filter(
          (product) => product?._id !== action.payload?._id
        );
        state.laundryProducts = removeProduct;
      }
    },
  },
});

export const { addToOrCart, removeToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
