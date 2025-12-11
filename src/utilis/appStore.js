import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userFeed from "./userFeed";
import connectionReducer from "./userConnection";
import requestReducer from "./connectionRequest";

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: userFeed,
    connections: connectionReducer,
    request: requestReducer,
  },
});
export default store;
