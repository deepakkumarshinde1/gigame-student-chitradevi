import { createSlice } from "@reduxjs/toolkit";
import { getUserList } from "./services/user.service";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    otp: Math.round(Math.random() * 1000),
    loading: false,
    users: [],
    error: null,
  },
  reducers: {
    genOtp(state, action) {
      // action.payload => a
      let newOTP = Math.round(Math.random() * 1000);
      state.otp = newOTP;
    },
    resetOtp() {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      });
  },
});

export default UserSlice;
export let { genOtp, resetOtp } = UserSlice.actions;
