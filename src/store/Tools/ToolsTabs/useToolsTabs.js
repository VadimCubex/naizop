import { useSelector } from "react-redux";

export const useToolsTabsSelector = () =>
  useSelector((state) => state.tools.tabs);
