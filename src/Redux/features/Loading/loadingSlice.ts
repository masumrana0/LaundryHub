import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Turtle } from "lucide-react";

interface IisLoading {
  isLoading: boolean;
}

const initialState: IisLoading = {
  isLoading: true,
};

const LoadingStateSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = LoadingStateSlice.actions;

export const LoadingReducer = LoadingStateSlice.reducer;
