import { TCard } from './../../types/types';
import { TContacts } from "../../types/types"
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

type contactsState = {
    contacts: TContacts,
    isLoading: boolean,
    error: string,
    activeContactId: number,
    activeContact: TCard,
}

const initialState: contactsState = {
    contacts: [],
    isLoading: false,
    error: '',
    activeContactId: 0,
    activeContact: {
        id: 0,
        name: '',
        phone: '',
        email: '',
        company: {
            bs: '',
            name: '',
            catchPhrase: ''
        },
        address: {
            street: '',
            city: '',
            zipcode: '',
            suite: ''
        }
    }

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
        getActivContactData(state) {
            const indexContact = state.contacts.findIndex(({ id }) => id === state.activeContactId);
            const stateContactsIndex = state.contacts[indexContact];
            state.activeContact.name = stateContactsIndex.name;
            state.activeContact.email = stateContactsIndex.email;
            state.activeContact.phone = stateContactsIndex.phone;
            state.activeContact.note = stateContactsIndex.note;
            state.activeContact.address.city = stateContactsIndex.address.city;
            state.activeContact.address.street = stateContactsIndex.address.street;
            state.activeContact.address.suite = stateContactsIndex.address.suite;
            state.activeContact.address.zipcode = stateContactsIndex.address.zipcode;
            state.activeContact.company.name = stateContactsIndex.company.name;
        },
        changeActiveContactName(state, action: PayloadAction<string>) {
            state.activeContact.name = action.payload;
        },
        changeActiveContactCompanyName(state, action: PayloadAction<string>) {
            state.activeContact.company.name = action.payload;
        },
        changeActiveContactPhone(state, action: PayloadAction<string>) {
            state.activeContact.phone = action.payload;
        },
        changeActiveContactEmail(state, action: PayloadAction<string>) {
            state.activeContact.email = action.payload;
        },
        changeActiveContactStreet(state, action: PayloadAction<string>) {
            state.activeContact.address.street = action.payload;
        },
        changeActiveContactCity(state, action: PayloadAction<string>) {
            state.activeContact.address.city = action.payload;
        },
        changeActiveContactSuite(state, action: PayloadAction<string>) {
            state.activeContact.address.suite = action.payload;
        },
        changeActiveContactZipcode(state, action: PayloadAction<string>) {
            state.activeContact.address.zipcode = action.payload;
        },
        changeActionContactNode(state, action: PayloadAction<string>) {
            state.activeContact.note = action.payload
        }

    }
})

export default contactsSlice.reducer;