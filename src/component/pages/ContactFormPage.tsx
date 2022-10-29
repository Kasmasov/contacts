import React, { FC, useEffect } from 'react';
import { ContactCard } from '../ContactCard';
import { ContactList } from '../ContactList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchContacts } from '../../store/reducers/ActionCreaters';
import '../pages/ContactFormPage.css'
import { ModalDeleteContact } from '../ModaldDeleteContact';


export const ContactForm: FC= () => {

  const dispatch = useAppDispatch();
  const { activeModalDeleteContact } = useAppSelector(state => state.modalSlice)
  const { activeContactId } = useAppSelector(state => state.contactsSlice)

  useEffect(() => {
    dispatch(fetchContacts())
  },[])

  return (
    <div className='main-container-contact-card '>
        <ContactList />
        <ContactCard />
       {activeModalDeleteContact &&
       activeContactId !== '' &&
       <ModalDeleteContact/>}
    </div>
  )
};