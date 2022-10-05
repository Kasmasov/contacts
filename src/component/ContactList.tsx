import React, { FC } from 'react';
import { Input } from 'antd'
import { useAppSelector } from '../hooks/redux';
import './ContactForm.css'

export const ContactList:FC = () => {
    const { Search } = Input;

    const onSearch = (value: string) => console.log(value);

    const contactList = useAppSelector(state => state.contacts);


  return (
    <div className='container-contact-list'>
        <Search 
          placeholder="input search text" 
          onSearch={onSearch}
          style={{ 
            margin: '2rem 1rem 0rem 1rem',
            width: '30vw'}} 
        />
        <div
          style={{
              height: '100vh',
              margin: '2rem 1rem 0rem 1rem'}} 
              >
            {contactList.map(item => <h5 key={item.id}>{`${item.lastName} ${item.firstName}`}</h5>)}
            

        </div>
    </div>
  )
};

