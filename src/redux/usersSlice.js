import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Serg",
    surname: "",
    time: "",
  },
  {
    id: "2",
    name: "Vas",
    surname: "",
    time: "",
  },
  {
    id: "3",
    name: "Ivan",
    surname: "",
    time: "",
  },
  {
    id: "4",
    name: "Petro",
    surname: "",
    time: "",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    // addName: (state, action) => {
    //   state.name = action.payload;
    // },
    // addSurname: (state, action) => {
    //   state.surname = action.payload;
    // },
    // addUser: (state, action) => state.push(action.payload),
    addUser: (state, action) => [action.payload, ...state],
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export const getUsers = (state) => state.users;

export default usersSlice.reducer;
