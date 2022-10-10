import { contactsSlice } from './contactSlice';
import { TContacts } from './../../types/types';
import { TAppDispatch } from '../store';
import axios from 'axios';

export const fetchContacts = () => async (dispatch: TAppDispatch) => {
    try {
        dispatch(contactsSlice.actions.contactsFetching());
        const response = await axios.get<TContacts>('https://jsonplaceholder.typicode.com/users');
        dispatch(contactsSlice.actions.contactsFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(contactsSlice.actions.contactsFetchingError(e.message))
    }
}