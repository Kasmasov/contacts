import React, { FC, useEffect } from 'react';
import { ContactCard } from './ContactCard';
import { ContactList } from './ContactList';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchContacts } from '../store/reducers/ActionCreaters';
import './ContactForm.css'


export const ContactForm: FC= () => {

  const dispatch = useAppDispatch();
  const {contacts} = useAppSelector (state => state.contactsSlice)

  useEffect(() => {
    dispatch(fetchContacts())
  },[])

  return (
    <div className='main-container-contact-card'>
        <ContactList />
        <ContactCard />
    </div>
  )
};