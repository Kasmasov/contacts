import { TContacts } from "../../types/types"
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

type contactsState = {
    contacts: TContacts,
    isLoading: boolean,
    error: string,
    activeContactId: number | undefined,
}

const initialState: contactsState = {
    contacts: [],
    isLoading: false,
    error: '',
    activeContactId: undefined,

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
        },
        getActiveContactId(state, action: PayloadAction<number | undefined>) {
            state.activeContactId = action.payload;
        },

    }
})

export default contactsSlice.reducer;