import React from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



type TMaodalState = {
    activeModalDeleteContact: boolean;
    mainScreenOpacity: '0.25' | '1';
}

const initialState: TMaodalState = {
    activeModalDeleteContact: false,
    mainScreenOpacity: '1',

}

export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        displayModal(state, action: PayloadAction<boolean>) {
            state.activeModalDeleteContact = action.payload;
        },
        changeMainScreenOpacity(state, action: PayloadAction<'0.25' | '1'>) {
            state.mainScreenOpacity = action.payload;
        }

    }
})

export default modalSlice.reducer 