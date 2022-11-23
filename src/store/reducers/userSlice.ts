import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from "@reduxjs/toolkit"

type TUserState = {
    email: string | null;
    token: string | null;
    id: string | null;
}

const initialState: TUserState = {
    email: null,
    token: null,
    id: null,
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<TUserState>) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;

        },

    }

})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer