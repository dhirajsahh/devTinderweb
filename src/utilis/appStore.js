import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userFeed from "./userFeed";

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: userFeed,
  },
});
export default store;
