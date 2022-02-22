import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

export default configureStore({
  resucer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
