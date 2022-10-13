import { TContacts } from "../../types/types"
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

type contactsState = {
    contacts: TContacts,
    isLoading: boolean,
    error: string,
    activeContactId: number,
}

const initialState: contactsState = {
    contacts: [],
    isLoading: false,
    error: '',
    activeContactId: 0,

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
        getActiveContactId(state, action: PayloadAction<number>) {
            state.activeContactId = action.payload;
        },
        getActivContactData(state, action: PayloadAction<string>) {
            const indexContact = state.contacts.findIndex(({ id }) => id === state.activeContactId)
            console.log('indexContact: ', indexContact);
        }

    }
})

export default contactsSlice.reducer;