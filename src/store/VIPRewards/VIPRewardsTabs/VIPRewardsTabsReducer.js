import { createSlice } from "@reduxjs/toolkit";
import { Ranks } from "../../../constants/constants";

const initialState = {
  activeTab: 0,
  activeRank: Ranks.New,
  unlocked: ["New"],
};

const VIPRewardsSlice = createSlice({
  name: "VIPRewards",
  initialState,
  reducers: {
    ChangeRanksTab(state, { payload }) {
      state.activeTab = payload;
      state.activeRank = Object.values(Ranks)[payload];
    },
  },
});

export const { ChangeRanksTab } = VIPRewardsSlice.actions;

export default VIPRewardsSlice.reducer;
