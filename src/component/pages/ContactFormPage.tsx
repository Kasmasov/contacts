import React, { FC, useEffect } from 'react';
import { ContactCard } from '../ContactCard';
import { ContactList } from '../ContactList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchContacts } from '../../store/reducers/ActionCreaters';
import { ModalDeleteContact } from '../ModaldDeleteContact';
import { useAuth } from '../../hooks/use-auth'
import { Navigate } from 'react-router-dom';
import '../pages/ContactFormPage.css'


export const ContactForm: FC= () => {

  const dispatch = useAppDispatch();
  const { activeModalDeleteContact } = useAppSelector(state => state.modalSlice);
  const { activeContactId } = useAppSelector(state => state.contactsSlice);
  const { isAuth } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts())
  },[])

  return isAuth ? (
    <div className='main-container-contact-card '>
        <ContactList />
        <ContactCard />
       {activeModalDeleteContact &&
       activeContactId !== '' &&
       <ModalDeleteContact/>}
    </div>
  ):(
    <Navigate replace to='/'/>
  )
};