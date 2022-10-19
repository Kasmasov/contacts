import React, { FC, useCallback } from 'react'
import { Button } from 'antd'
import { modalSlice } from '../store/reducers/modalSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux'


export const ModalDeleteContact: FC = () => {
    const dispatch = useAppDispatch();
    const { displayModal, changeMainScreenOpacity } = modalSlice.actions;
    const { contacts, activeContactId} = useAppSelector(state => state.contactsSlice);

    const handleCancelDelete = useCallback((): void => {
        dispatch(displayModal(false));
        dispatch(changeMainScreenOpacity('1'))
    },[dispatch,
       displayModal,
       changeMainScreenOpacity])


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
            >{contacts.filter(({id}) => id === activeContactId)[0].name}</h2>
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
            >
                Удалить
            </Button>
            </div>
        </div>
    )
}