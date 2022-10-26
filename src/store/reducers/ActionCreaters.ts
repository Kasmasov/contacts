import { contactsSlice } from './contactSlice';
import { TContacts } from './../../types/types';
import { TAppDispatch } from '../store';
import axios from 'axios';
import { addIDForFrontEndToContacts } from '../../utils/converter';

export const fetchContacts = () => async (dispatch: TAppDispatch) => {
    try {
        dispatch(contactsSlice.actions.contactsFetching());
        const response = await axios.get<TContacts>('https://jsonplaceholder.typicode.com/users');
        dispatch(contactsSlice.actions.contactsFetchingSuccess(response.data.map(contact => addIDForFrontEndToContacts(contact))))
    } catch (e) {
        const error = e as Error
        dispatch(contactsSlice.actions.contactsFetchingError(error.message))
    }
}