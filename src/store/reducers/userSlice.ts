import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from "@reduxjs/toolkit"

type TUserState = {
    userEmail: string | null;
    token: string | null;
    id: string | null;
}

const initialState: TUserState = {
    userEmail: null,
    token: null,
    id: null,
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<TUserState>) {
            state.userEmail = action.payload.userEmail;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.userEmail = null;
            state.token = null;
            state.id = null;

        },

    }

})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer