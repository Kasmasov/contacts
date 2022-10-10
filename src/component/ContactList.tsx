import React, { FC, useEffect } from 'react';
import { Input } from 'antd'
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { fetchContacts } from '../store/reducers/ActionCreaters';
import './ContactForm.css'

export const ContactList:FC = () => {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    const dispatch = useAppDispatch();
    const {contacts} = useAppSelector (state => state.contactsSlice)

  useEffect(() => {
    dispatch(fetchContacts())
  },[])
      
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
              .map(item => 
              <h5 
                key={item.id}
                onClick={({target})=>{console.log(target)}}
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

