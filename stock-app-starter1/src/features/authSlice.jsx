import { createSLice } from "@reduxjs/toolkit";

const authSlice = createSLice({
  name: "auth",
  initialState: {
    token: "",
    usernmae: "",
    loading: "",
    error: "",
  },
  reducers: {
    fetchSrtart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.username = payload.user.username;
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, loginSuccess, fetchFail } = authSlice.actions;
export default authSlice.reducer;
