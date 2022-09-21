import React, { FC } from 'react';
import { Input } from 'antd'
import './ContactForm.css'

export const ContactList:FC = () => {
    const { Search } = Input;

    const onSearch = (value: string) => console.log(value);
    
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
            <h5>Иванов Иван</h5>
            <h5>Петоров Петя</h5>
            <h5>Сидовров Иван</h5>

        </div>
    </div>
  )
};

