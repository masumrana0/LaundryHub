import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./features/login/loginSlice";
import { baseApi } from "./api/baseApi";
import orderRuducer from "./features/order/orderSlice";

export const store = configureStore({
  reducer: {
    loginState: loginReducer,
    order: orderRuducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
