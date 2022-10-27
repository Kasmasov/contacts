import { TCardForFrontEnd } from './../../types/types';
import { TContacts } from "../../types/types"
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

type contactsState = {
    contacts: TContacts,
    isLoading: boolean,
    error: string,
    activeContactId: string,
    activeContact: TCardForFrontEnd,
    borderBottom: '' | '1px solid rgb(236,236,236)',
}

const initialState: contactsState = {
    contacts: [],
    isLoading: false,
    error: '',
    activeContactId: '',
    borderBottom: '',
    activeContact: {
        id: '0',
        idForFrontEnd: '',
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
        getActiveContactId(state, action: PayloadAction<string>) {
            state.activeContactId = action.payload;
        },
        getActivContactData(state) {
            const indexContact = state.contacts.findIndex(({ idForFrontEnd }) => idForFrontEnd === state.activeContactId);
            const stateContactsIndex = state.contacts[indexContact];
            state.activeContact.name = stateContactsIndex?.name;
            state.activeContact.email = stateContactsIndex?.email;
            state.activeContact.phone = stateContactsIndex?.phone;
            state.activeContact.note = stateContactsIndex?.note;
            state.activeContact.address.city = stateContactsIndex?.address.city;
            state.activeContact.address.street = stateContactsIndex?.address.street;
            state.activeContact.address.suite = stateContactsIndex?.address.suite;
            state.activeContact.address.zipcode = stateContactsIndex?.address.zipcode;
            state.activeContact.company.name = stateContactsIndex?.company.name;
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
        changeActionContactNote(state, action: PayloadAction<string>) {
            state.activeContact.note = action.payload
        },
        saveActiveContactData(state) {
            const indexContact = state.contacts.findIndex(({ idForFrontEnd }) => idForFrontEnd === state.activeContactId);
            const stateContactIndex = state.contacts[indexContact];
            stateContactIndex.name = state.activeContact.name;
            stateContactIndex.company.name = state.activeContact.company.name;
            stateContactIndex.phone = state.activeContact.phone;
            stateContactIndex.email = state.activeContact.email;
            stateContactIndex.note = state.activeContact.note;
            stateContactIndex.address.street = state.activeContact.address.street;
            stateContactIndex.address.city = state.activeContact.address.city;
            stateContactIndex.address.suite = state.activeContact.address.suite;
            stateContactIndex.address.zipcode = state.activeContact.address.zipcode;
        },
        createNewContact(state) {
            const newContact: TCardForFrontEnd = {
                id: '',
                idForFrontEnd: v4(),
                name: 'Без имени',
                company: {
                    bs: '',
                    name: '',
                    catchPhrase: ''
                },
                phone: '',
                email: '',
                note: '',
                address: {
                    street: '',
                    city: '',
                    suite: '',
                    zipcode: ''
                }
            };
            state.activeContactId = newContact.idForFrontEnd;
            state.contacts = [...state.contacts, newContact];
        },
        deleteContact(state, action: PayloadAction<TCardForFrontEnd[]>) {
            state.contacts = action.payload;
        },
        getBorderBottom(state, action: PayloadAction<'' | '1px solid rgb(236,236,236)'>) {
            state.borderBottom = action.payload
        },

    }
})

export default contactsSlice.reducer;