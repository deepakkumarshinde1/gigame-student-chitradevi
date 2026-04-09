import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    otp: Math.round(Math.random() * 1000),
  },
  reducers: {
    genOtp(state, action) {
      let newOTP = Math.round(Math.random() * 1000);
      state.otp = newOTP;
    },
    resetOtp() {},
  },
});

export default UserSlice;
export let { genOtp, resetOtp } = UserSlice.actions;
