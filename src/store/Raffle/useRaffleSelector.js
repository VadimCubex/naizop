import { useSelector } from "react-redux";

export const useRaffleSelector = () => useSelector((state) => state.raffle);
