import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import messageReducer from "./Message/message";

const store = configureStore({
  reducer: {
    message: messageReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
