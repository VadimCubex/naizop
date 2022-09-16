import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProfileInfoReducer from "./Profile/ProfileInfo/ProfileInfoReducer";
import ToolsTabsReducer from "./Tools/ToolsTabs/ToolsTabsReducer";

const rootReducer = combineReducers({
  tools: combineReducers({
    tabs: ToolsTabsReducer,
  }),
  profile: combineReducers({
    info: ProfileInfoReducer,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
});
