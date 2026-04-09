import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./users.slice";

const store = configureStore({
  reducer: {
    userSlice: UserSlice.reducer,
  },
});

export default store;
