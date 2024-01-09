import { ISelectService } from "@/Interface/booking";
import { ILaundryProduct } from "@/Interface/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  profileSectionNo: number;
}

const initialState: IinitialState = {
  profileSectionNo: 1,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeProfileUiSection: (state, action: PayloadAction<number>) => {
      state.profileSectionNo = action.payload;
    },
  },
});

export const { changeProfileUiSection } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
