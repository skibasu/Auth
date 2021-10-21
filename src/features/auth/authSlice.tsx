import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { userLogIn, IUser } from "./authApi";

export interface authState {
    token: string;
    status: "idle" | "loading" | "failed";
}

const initialState: authState = {
    token: "",
    status: "idle",
};

export const logInAsync = createAsyncThunk(
    "auth/userLogIn",
    async (user: IUser) => {
        const response = await userLogIn({
            userName: "test",
            password: "test",
        });
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const selectToken = (state: RootState) => state.auth;

export const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        logOut: (state) => {
            state.token = "";
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(logInAsync.pending, (state) => {
                state.status = "loading";
            })

            .addCase(logInAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.token = action.payload.token;
            });
    },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
