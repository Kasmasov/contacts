import React, { FC, useCallback } from 'react'
import { Button } from 'antd'
import { modalSlice } from '../store/reducers/modalSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { contactsSlice } from '../store/reducers/contactSlice'
import { produce } from 'immer'


export const ModalDeleteContact: FC = () => {
    const dispatch = useAppDispatch();
    const { displayModal, changeMainScreenOpacity } = modalSlice.actions;
    const { deleteContact, getBorderBottom } = contactsSlice.actions;
    const { contacts,activeContactId} = useAppSelector(state => state.contactsSlice);

    const handleCancelDelete = useCallback((): void => {
        dispatch(displayModal(false));
        dispatch(changeMainScreenOpacity('1'))
    },[dispatch,
       displayModal,
       changeMainScreenOpacity])

    const handleDeleteContact = useCallback((): void =>{
        const newContacts = produce(contacts, draftState => draftState.filter(contact => contact.idForFrontEnd !== activeContactId));
        dispatch(deleteContact(newContacts));
        dispatch(displayModal(false));
        dispatch(changeMainScreenOpacity('1'));
        dispatch(getBorderBottom(''));
    },[dispatch,
       deleteContact,
       contacts,
       activeContactId,
       displayModal,
       changeMainScreenOpacity,
       getBorderBottom
    ])


    return(
        <div className='modal-delete-contact'>
            <h4
            style={{
                marginBottom:'10px'
            }}
            >Вы действитльно хотите удалить карточку</h4>
            <h2
            style={{
                marginBottom:'20px'
            }}
            >{contacts.filter(({idForFrontEnd}) => idForFrontEnd === activeContactId)[0]?.name}</h2>
           <div> <Button
            size='small'
            onClick={handleCancelDelete}
            >
                Отменть
            </Button>
            <Button
            type='primary'
            size='small'
            style={{
                marginLeft:'15px'
            }}
            onClick={handleDeleteContact}
            >
                Удалить
            </Button>
            </div>
        </div>
    )
}