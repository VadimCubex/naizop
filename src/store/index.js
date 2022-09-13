import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ToolsTabsReducer from "./Tools/ToolsTabs/ToolsTabsReducer";

const rootReducer = combineReducers({
  tools: combineReducers({
    tabs: ToolsTabsReducer,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
});
