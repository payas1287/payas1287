import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  categories: [],
  loading: [],
  error: [],
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.brands = payload;
    },
    // action:{type:"", payload:""}

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getBrandsSuccess, fetchFail } = brandsSlice.actions;

export default brandsSlice.reducer;
