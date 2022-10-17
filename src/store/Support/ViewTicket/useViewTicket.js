import { useSelector } from "react-redux";

export const useViewTicketSelector = () =>
  useSelector((state) => state.support.viewTicket);
