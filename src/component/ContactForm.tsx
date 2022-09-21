import React, { FC } from 'react';
import { ContactCard } from './ContactCard';
import { ContactList } from './ContactList';
import './ContactForm.css'



export const ContactForm: FC = () => {
  return (
    <div className='main-container-contact-card'>
        <ContactList />
        <ContactCard />
    </div>
  )
};