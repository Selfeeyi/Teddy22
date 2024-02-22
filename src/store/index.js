import { Tuple, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import AppReducer from "../reducer";

const store = configureStore({
  reducer: AppReducer,
  ...AppReducer,
  middleware: () => new Tuple(thunk, logger),
});
export default store;
