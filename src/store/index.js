import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProfileInfoReducer from "./Profile/ProfileInfo/ProfileInfoReducer";
import ViewTicketReducer from "./Support/ViewTicket/ViewTicketReducer";
import ToolsTabsReducer from "./Tools/ToolsTabs/ToolsTabsReducer";
import VIPRewardsTabsReducer from "./VIPRewards/VIPRewardsTabs/VIPRewardsTabsReducer";

const rootReducer = combineReducers({
  tools: combineReducers({
    tabs: ToolsTabsReducer,
  }),
  profile: combineReducers({
    info: ProfileInfoReducer,
  }),
  vipRewards: combineReducers({
    tabs: VIPRewardsTabsReducer,
  }),
  support: combineReducers({
    viewTicket: ViewTicketReducer,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
});
