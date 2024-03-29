import { ISelectService } from "@/Interface/booking";
import { ILaundryProduct } from "@/Interface/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  laundryProducts: ILaundryProduct[];
  userBookingHistory: ILaundryProduct[];
  grandPrice: number;
  service: ISelectService;
  bookingState: boolean;
}

const initialState: IinitialState = {
  laundryProducts: [],
  userBookingHistory: [],
  grandPrice: 0,
  service: {
    title: "Ironing and Pressing",
    service: "65982aa7eed34ae0a2063ebc",
  },
  bookingState: false,
};

const orderSlice = createSlice({
  name: "laundryProduct",
  initialState,
  reducers: {
    setCartToOrder: (state, action: PayloadAction<ILaundryProduct[]>) => {
      const data = [...state.laundryProducts, ...action.payload];
      state.laundryProducts = data;
    },
    addToOrder: (state, action: PayloadAction<ILaundryProduct>) => {
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

    removeToOrder: (state, action: PayloadAction<ILaundryProduct>) => {
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
    addGrandPrice: (state, action: PayloadAction<number>) => {
      state.grandPrice = action.payload;
    },
    addSelectService: (state, action: PayloadAction<ISelectService>) => {
      state.service = action.payload;
    },
    setBookingState: (state, action: PayloadAction<boolean>) => {
      state.bookingState = action.payload;
    },
    setUserBookingHistory: (
      state,
      action: PayloadAction<ILaundryProduct[]>
    ) => {
      state.userBookingHistory = action.payload;
    },
  },
});

export const {
  addToOrder,
  removeOneToOrder,
  removeToOrder,
  addGrandPrice,
  addSelectService,
  setCartToOrder,
  setBookingState,
  setUserBookingHistory,
} = orderSlice.actions;

export default orderSlice.reducer;
