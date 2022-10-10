import React, { FC, useEffect } from 'react';
import { Input } from 'antd'
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { fetchContacts } from '../store/reducers/ActionCreaters';
import './ContactForm.css'

export const ContactList:FC = () => {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    const contactList = useAppSelector(state => state.contactsSlice.contacts);
    const dispatch = useAppDispatch();
  const {contacts} = useAppSelector (state => state.contactsSlice)
  console.log('contacts: ', contacts);

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
            {contactList.length > 0 
            ?
            contactList
              .map(item => <h5 key={item.id}>{`${item.name}`}</h5>)
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

