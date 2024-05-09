// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedInUser: "", // Set initial loggedInUser to an empty string
    users: [
      // Default user
      {
        firstName: "Hashim",
        surname: "Ali",
        username: "hashim",
        email: "hashim@example.com",
        password: "",
      },
    ],
  },
  reducers: {
    login: (state, action) => {
      // Find the user object based on the username
      const user = state.users.find((user) => user.username === action.payload);
      // Set the loggedInUser to the found user's first name
      state.loggedInUser = user ? user.firstName : ""; // Set to empty string if user not found
    },
    logout: (state) => {
      state.loggedInUser = ""; // Clear the loggedInUser when logging out
    },
    register: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
