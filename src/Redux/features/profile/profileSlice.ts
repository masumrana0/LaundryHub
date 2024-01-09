import { ISelectService } from "@/Interface/booking";
import { ILaundryProduct } from "@/Interface/types";
import { IUser } from "@/Interface/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  profile: IUser | null;
  profileSectionNo: number;
}

const initialState: IinitialState = {
  profile: null,
  profileSectionNo: 1,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeProfileUiSection: (state, action: PayloadAction<number>) => {
      state.profileSectionNo = action.payload;
    },

    setProfile: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload;
    },
  },
});

export const { changeProfileUiSection, setProfile } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
