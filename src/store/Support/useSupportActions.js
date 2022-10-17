import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { setTicket, addMessageToChat } from "./ViewTicket/ViewTicketReducer";

export const useSupportActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      setTicket,
      addMessageToChat,
    },
    dispatch
  );
};
