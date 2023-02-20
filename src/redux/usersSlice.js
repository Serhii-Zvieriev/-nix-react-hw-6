import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "",
    surname: "",
  },
  {
    id: "2",
    name: "",
    surname: "",
  },
  {
    id: "3",
    name: "",
    surname: "",
  },
  {
    id: "4",
    name: "",
    surname: "",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.value += 1;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { increment, decrement, incrementByAmount } = usersSlice.actions;

export const getUsers = (state) => state.users;

export default usersSlice.reducer;
