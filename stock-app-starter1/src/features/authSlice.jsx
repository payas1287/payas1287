import { createSlice } from "@reduxjs/toolkit"



const authSlice = createSlice ({
  name:"auth",
  initialState:{
    token:"",
    username:"",
    loading:"",
    error: "",
  },
  reducers: {},
})

export const {} = authSlice.actions

export default authSlice.reducer