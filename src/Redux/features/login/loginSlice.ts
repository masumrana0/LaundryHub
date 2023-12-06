import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IloginState {
  loginState: boolean;
}

const initialState: IloginState = {
  loginState: false,
};

const loginStateSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    loginStateCore: (state) => {
      state.loginState = !state.loginState;
    },
  },
});

export const { loginStateCore } = loginStateSlice.actions;

export const loginReducer = loginStateSlice.reducer;
