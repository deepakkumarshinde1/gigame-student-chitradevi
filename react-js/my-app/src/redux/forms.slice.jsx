import { createSlice } from "@reduxjs/toolkit";

const FormsSlice = createSlice({
  name: "FormsSlice",
  initialState: {
    loginDetails: {
      userName: "",
      password: "",
    },
  },
  reducers: {
    handelLoginDetails(state, action) {
      state.loginDetails[action.payload.name] = action.payload.value;
    },
  },
});

export default FormsSlice;
export const { handelLoginDetails } = FormsSlice.actions;
