import React, { FC, useEffect } from 'react';
import { ContactCard } from '../ContactCard';
import { ContactList } from '../ContactList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchContacts } from '../../store/reducers/ActionCreaters';
import { ModalDeleteContact } from '../ModaldDeleteContact';
import '../pages/ContactFormPage.css'


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