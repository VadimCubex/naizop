import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { ChangeRanksTab } from "./VIPRewardsTabs/VIPRewardsTabsReducer";

export const useVIPRewardsActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ChangeRanksTab,
    },
    dispatch
  );
};
