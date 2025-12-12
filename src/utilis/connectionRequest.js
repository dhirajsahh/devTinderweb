import { createSlice } from "@reduxjs/toolkit";

const connectionReqeust = createSlice({
  name: "connectionRequst",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      const newArray = state.filter((r) => r._id !== action.payload);
      return newArray;
    },
  },
});

export const { addRequest, removeRequest } = connectionReqeust.actions;
export default connectionReqeust.reducer;
