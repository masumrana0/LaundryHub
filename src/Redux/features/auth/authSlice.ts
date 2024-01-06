import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ILoginState {
  authState: boolean;
  isEmailVerified: boolean;
}

const initialState: ILoginState = {
  authState: false,
  isEmailVerified: false,
};

const AuthStateSlice = createSlice({
  name: "AuthState",
  initialState,
  reducers: {
    setAuthState: (state) => {
      state.authState = !state.authState;
    },
    setIsEmailVerified: (state, action: PayloadAction<boolean>) => {
      state.isEmailVerified = action.payload;
    },
  },
});

export const { setAuthState, setIsEmailVerified } = AuthStateSlice.actions;

export const AuthReducer = AuthStateSlice.reducer;
