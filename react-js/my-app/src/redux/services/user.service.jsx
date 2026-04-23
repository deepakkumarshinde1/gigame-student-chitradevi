import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/axios.config";

export const getUserList = createAsyncThunk(
  "UserSlice/getUserList",
  async () => {
    let { data } = await api.get("/users");
    return data;
  },
);
