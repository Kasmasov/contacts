import { TCard } from './../../types/types';
import { TContacts } from "../../types/types"
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: TContacts = [
    { id: 1, firstName: 'Valerii', lastName: 'Kasmasov' },
    { id: 2, firstName: 'Vadim', lastName: 'Zhukov' },
]

export const contacts = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action: PayloadAction<TCard>) {

        }

    }
})

export default contacts.reducer;