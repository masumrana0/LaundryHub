import { ISelectService } from "@/Interface/booking";
import { ILaundryProduct } from "@/Interface/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  map(arg0: (laundryProduct: any) => import("react").JSX.Element): import("react").ReactNode;
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
  },
});

export const { addToOrCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
