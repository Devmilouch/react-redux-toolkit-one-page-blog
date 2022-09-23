import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id:nanoid(), name: "Roberto Pelouga"},
    {id:nanoid(), name: "Toto Lamoula"},
    {id:nanoid(), name: "Mama Milla"}
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
});

export const selectAllUsers = state => state.users

export default usersSlice.reducer;