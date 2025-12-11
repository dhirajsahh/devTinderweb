import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userFeed from "./userFeed";
import connectionReducer from "./userConnection";

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: userFeed,
    connections: connectionReducer,
  },
});
export default store;
