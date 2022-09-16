import { useSelector } from "react-redux";

export const useProfileInfoSelector = () =>
  useSelector((state) => state.profile.info);
