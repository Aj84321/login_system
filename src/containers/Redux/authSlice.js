import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: {
    id: null,
    name: '',
    email: '',
    age: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age
      };
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {
        id:"",
        name: "",
        email: "",
        age:"",
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
