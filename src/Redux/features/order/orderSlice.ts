import Laundry from "@/pages/laundry";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ILaundryProduct {
  category: "men" | "woman" | "home";
  name: string;
  price: number;
}

const initialState = {
  laundryProduct: [],
};

const orderSlice = createSlice({
  name: "laundryProduct",
  initialState,
  reducers: {
    addToOrder: (state, payload: PayloadAction<ILaundryProduct>) => {
      state.laundryProduct.push(payload);
    },
  },
});

const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;
