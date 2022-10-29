import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

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

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

    }

})