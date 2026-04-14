import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./users.slice";
import FormsSlice from "./forms.slice";

const store = configureStore({
  reducer: {
    userSlice: UserSlice.reducer,
    formReducer: FormsSlice.reducer,
  },
});

export default store;
