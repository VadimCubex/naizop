import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticket: {},
};

const ViewTicketSlice = createSlice({
  name: "profileInfo",
  initialState,
  reducers: {
    setTicket(state, { payload }) {
      state.ticket = payload;
    },
    addMessageToChat(state, { payload }) {
      state.ticket.chat.push(payload);
    },
  },
});

export const { setTicket, addMessageToChat } = ViewTicketSlice.actions;

export default ViewTicketSlice.reducer;
