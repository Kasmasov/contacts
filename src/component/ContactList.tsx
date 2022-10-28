import React, { FC, useCallback, useState } from 'react';
import { Input } from 'antd'
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { contactsSlice } from '../store/reducers/contactSlice';
import './ContactForm.css'
import { modalSlice } from '../store/reducers/modalSlice';


export const ContactList:FC = () => {

    const [serchingText, setSerchingText] = useState<string>('')

    const {contacts, isLoading, error} = useAppSelector (state => state.contactsSlice)
    const selectedContactsUsingSearch = serchingText === '' ? contacts : contacts.filter(item => item.name.trim().toLowerCase().includes(serchingText));
    const { activeModalDeleteContact, mainScreenOpacity} = useAppSelector(state => state.modalSlice)
    const { getActiveContactId,
            getActivContactData,
          } = contactsSlice.actions;
    const { displayModal } = modalSlice.actions;
    const dispath = useAppDispatch();
    
    const handleChangeSerching = (value: string): void =>{
      setSerchingText(value.trim().toLowerCase());
    };
    const handleGetContactID = useCallback((id: string)=>{
     if (!activeModalDeleteContact) {
       dispath(getActiveContactId(id));
       dispath(getActivContactData());
       dispath(displayModal(false)); 
      }
    },[dispath,
       getActiveContactId,
       getActivContactData,
       displayModal,
       activeModalDeleteContact,
      ]);
  
      
  return (
    <div className='container-contact-list'
      style={{
        opacity:`${mainScreenOpacity}`
      }}
    >
        <Input 
          placeholder="введите текст для поиска" 
          onChange={(({target}) => handleChangeSerching(target.value))}
          style={{ 
            margin: '2rem 1rem 0rem 1rem',
            width: '30vw'}} 
        />
        <div
          style={{
              height: '100vh',
              margin: '2rem 1rem 0rem 1rem',
              overflow: 'scroll'}} 
        >
            {contacts.length > 0 
            ?
            selectedContactsUsingSearch
              // .sort((contactA, contactB)=> contactA.name > contactB.name ? 1 : -1)
              .map(item => 
              <h5 
                key={item.idForFrontEnd}
                style={{
                  cursor:'pointer'
                }}
                onClick={()=>{handleGetContactID(item.idForFrontEnd)}}
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
            {isLoading && <h4
          style={{
            color:'grey',
            textAlign: 'center'
          }}
          > ...идет загрузка</h4>}
          {error && <h4
          style={{
            color: 'grey',
            textAlign:'center'
          }}
          >{error}</h4>}

        </div>
    </div>
  )
};

