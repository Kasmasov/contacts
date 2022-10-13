import React, { FC, useCallback } from 'react';
import { Input } from 'antd'
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { contactsSlice } from '../store/reducers/contactSlice';
import './ContactForm.css'


export const ContactList:FC = () => {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    const {contacts} = useAppSelector (state => state.contactsSlice)
    const {getActiveContactId, getActivContactData} = contactsSlice.actions
    const dispath = useAppDispatch();

  const handleGetContactID = useCallback((id: number)=>{
    dispath(getActiveContactId(id))
    dispath(getActivContactData())
  },[dispath, getActiveContactId, getActivContactData])
  
      
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
            {contacts.length > 0 
            ?
            contacts
              // .sort((contactA, contactB)=> contactA.name > contactB.name ? 1 : -1)
              .map(item => 
              <h5 
                key={item.id}
                onClick={()=>{handleGetContactID(item.id)}}
              >
                {`${item.name}`}
              </h5>)
            : 
            <h4
              style={{
                color:'grey',
                textAlign:'center'
              }}
            > список пока пуст</h4>}

        </div>
    </div>
  )
};

