import { authKey } from "@/constants/storageKey";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "@/utilities/local-storage";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

interface ILoginState {
  authState: boolean;
  isEmailVerified: boolean;
  isLoggedIn: boolean;
}

const initialState: ILoginState = {
  authState: false,
  isEmailVerified: false,
  isLoggedIn: !!getFromLocalStorage(authKey) || false,
};

const AuthStateSlice = createSlice({
  name: "AuthState",
  initialState,
  reducers: {
    setAuthState: (state) => {
      state.authState = !state.authState;
    },
    logOut: (state) => {
      if (state.isLoggedIn) {
        removeFromLocalStorage(authKey);
        state.isLoggedIn = false;
      }
    },
    setIsLoggedIn: (state, actions: PayloadAction<boolean>) => {
      state.isLoggedIn = actions.payload;
    },
  },
});

export const { setAuthState, logOut, setIsLoggedIn } = AuthStateSlice.actions;

export const AuthReducer = AuthStateSlice.reducer;

// Selector to get the login status
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
