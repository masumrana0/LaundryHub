import { configureStore } from "@reduxjs/toolkit";

import { baseApi } from "./api/baseApi";
import orderRuducer from "./features/order/orderSlice";
import { AuthReducer } from "./features/auth/authSlice";
import { cartReducer } from "./features/Cart/addToCart";
import { profileReducer } from "./features/profile/profileSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    order: orderRuducer,
    profile: profileReducer,
    cart: cartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
