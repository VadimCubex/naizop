import moment from "moment";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenRaffle: false,
  startDate: moment().day(1).format("D/MM/YYYY"),
  remainsDate: JSON.stringify(
    moment.duration(
      moment().day(8).hour(7).minute(0).second(0).millisecond(0) - moment()
    )
  ),
  endDate: moment().day(8).format("D/MM/YYYY"),
  entries: 0,
};

const RaffleSlice = createSlice({
  name: "raffleSlice",
  initialState,
  reducers: {
    setIsOpenRaffle(state) {
      state.isOpenRaffle = !state.isOpenRaffle;
    },
    ChangeRemainsDate(state) {
      state.remainsDate = JSON.stringify(
        moment.duration(
          moment().day(8).hour(7).minute(0).second(0).millisecond(0) - moment()
        )
      );
    },
  },
});

export const { setIsOpenRaffle, ChangeRemainsDate } = RaffleSlice.actions;

export default RaffleSlice.reducer;
