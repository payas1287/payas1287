import { createSlice } from "@reduxjs/toolkit"



const authSlice = createSlice ({
  name:"auth",
  initialState:{
    token:"",
    username:"",
    loading:"",
    error: "",
  },
  reducers: {
    fetchStart: (state) =>
 {
  state.loading = true
 }, 
 loginSucces: (state, {payload}) => {
state.token = payload.token
state.username = payload.user.username
 },
 fetchFail: (state) => {
  state.loading = false
  state.error = true
 },
 
},
})

export const {fetchStart, fetchFail, loginSucces} = authSlice.actions

export default authSlice.reducer