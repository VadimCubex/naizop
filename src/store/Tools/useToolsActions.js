import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import {
  ChangeTab,
  ChangeSubTab,
  ChangeSocial,
  RedirectToTools,
} from "./ToolsTabs/ToolsTabsReducer";

export const useToolsActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ChangeTab,
      ChangeSubTab,
      ChangeSocial,
      RedirectToTools,
    },
    dispatch
  );
};
