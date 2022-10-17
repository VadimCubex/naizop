import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { setIsOpenRaffle, ChangeRemainsDate } from "./RaffleReducer";

export const useRaffleActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      setIsOpenRaffle,
      ChangeRemainsDate,
    },
    dispatch
  );
};
