import { createSlice } from "@reduxjs/toolkit";
import { ImagesVariants } from "../../../constants/VariantsOfComponents";

const initialState = {
  img: ImagesVariants.profile,
  name: "Brian",
  surname: "Robinson",
  username: "charlypricehelou",
  balance: 75,
  percent: 75,
  rate: "$1.00/100 points",
  rank: "New",
  points: 0,
  nextRank: "Bronze",
  totalCount: 101,
};

const ProfileInfoSlice = createSlice({
  name: "profileInfo",
  initialState,
  reducers: {},
});

export default ProfileInfoSlice.reducer;
