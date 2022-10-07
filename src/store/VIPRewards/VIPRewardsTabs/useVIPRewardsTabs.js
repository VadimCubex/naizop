import { useSelector } from "react-redux";

export const useVIPRewardsSelector = () =>
  useSelector((state) => state.vipRewards.tabs);
