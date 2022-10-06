import { createSlice } from "@reduxjs/toolkit";
import { ImagesVariants } from "../../../constants/VariantsOfComponents";

const initialState = {
  img: ImagesVariants.profile,
  name: "Brian",
  surname: "Robinson",
  usename: "charlypricehelou",
  balance: 75,
  percent: 75,
  rate: "$1.00/100 points",
  rank: "New",
  points: 0,
  nextRank: "Bronze",
};

const ProfileInfoSlice = createSlice({
  name: "profileInfo",
  initialState,
  reducers: {},
});

export const { ChangeSocial, ChangeSubTab, ChangeTab, RedirectToTools } =
  ProfileInfoSlice.actions;

export default ProfileInfoSlice.reducer;
