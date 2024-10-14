import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    username: "",
    loadind: "",
    error: "",
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.username = payload.user.username;
      state.loading = false;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.username = payload.data.username;
      state.token = payload.token;
    },
    logoutSucces: (state) => {
      state.loading = false;
      state.username = "";
      state.token = "";
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSucces,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer
