import { TContacts } from "../../types/types"
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

type contactsState = {
    contacts: TContacts,
    isLoading: boolean,
    error: string
}

const initialState: contactsState = {
    contacts: [],
    isLoading: false,
    error: ''
}

export const contactsSlice = createSlice({
    name: 'contactsSlice',
    initialState,
    reducers: {
        contactsFetching(state) {
            state.isLoading = true;

        },
        contactsFetchingSuccess(state, action: PayloadAction<TContacts>) {
            state.isLoading = false;
            state.error = '';
            state.contacts = action.payload;

        },
        contactsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }


    }
})

export default contactsSlice.reducer;