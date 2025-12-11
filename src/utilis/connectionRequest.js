import { createSlice } from "@reduxjs/toolkit";

const connectionReqeust = createSlice({
  name: "connectionRequst",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
  },
});

export const { addRequest } = connectionReqeust.actions;
export default connectionReqeust.reducer;
