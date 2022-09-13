import { TabsName } from "../../../pages/Tools/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: 0,
  activeSubTab: 0,
  activeSocial: TabsName[0],
};

const ToolsTabsSlice = createSlice({
  name: "toolsTabs",
  initialState,
  reducers: {
    ChangeTab(state, { payload }) {
      state.activeTab = payload;
      state.activeSubTab = 0;
    },
    ChangeSubTab(state, { payload }) {
      state.activeSubTab = payload;
    },
    ChangeSocial(state, { payload }) {
      state.activeSocial = payload;
      state.activeTab = TabsName.indexOf(payload);
      state.activeSubTab = 0;
    },
    RedirectToTools(state, { payload }) {
      state.activeTab = payload.tab;
      state.activeSubTab = payload.subTab;
      state.activeSocial = TabsName[payload.tab];
    },
  },
});

export const { ChangeSocial, ChangeSubTab, ChangeTab, RedirectToTools } =
  ToolsTabsSlice.actions;

export default ToolsTabsSlice.reducer;
