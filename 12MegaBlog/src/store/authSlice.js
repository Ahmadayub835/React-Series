import { createSlice } from "@reduxjs/toolkit";
//this is the initialstate that we define and later we have to chnage them.
const initialState = {
  status: false,
  userData: null
};
//this authSlice is for to createslice of redux function.
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true
      state.userData = action.payload.userData  //this userData is variable name not a function.
    },

    logout: (state) => {
      state.status = false
      state.userData = null
    },
  },
});

export const { login, logout } = AuthSlice.actions;
//these actions are the (reducers) they are used as like as reducers we use them to export the functions
export default AuthSlice.reducer;
//we have to export the reducer.
