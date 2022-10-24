import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button, Input } from 'antd'
import './ContactForm.css'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { contactsSlice } from '../store/reducers/contactSlice';
import { modalSlice } from '../store/reducers/modalSlice';

export const ContactCard: FC = () => {

  const { activeContactId, contacts } = useAppSelector(state => state.contactsSlice)
  const isActiveContact = contacts.filter(contact => contact.id === activeContactId);
  const {changeActiveContactName, 
    changeActiveContactCompanyName,
    changeActiveContactPhone,
    changeActiveContactEmail,
    changeActiveContactStreet,
    changeActiveContactCity,
    changeActiveContactSuite,
    changeActiveContactZipcode,
    changeActionContactNote,
    saveActiveContactData,
    getActivContactData,
    createNewContact,
    getBorderBottom
  } = contactsSlice.actions;
  const { displayModal } = modalSlice.actions;
  const { activeModalDeleteContact, mainScreenOpacity } = useAppSelector(state => state.modalSlice);
  const { changeMainScreenOpacity } = modalSlice.actions;
  const dispatch = useAppDispatch();

  const {TextArea} = Input;

  const name = useAppSelector(state => state.contactsSlice.activeContact.name);
  const companyName = useAppSelector( state => state.contactsSlice.activeContact.company.name);
  const phone = useAppSelector( state => state.contactsSlice.activeContact.phone);
  const email = useAppSelector( state => state.contactsSlice.activeContact.email);
  const street = useAppSelector(state => state.contactsSlice.activeContact.address.street);
  const city = useAppSelector(state => state.contactsSlice.activeContact.address.city);
  const suite = useAppSelector(state => state.contactsSlice.activeContact.address.suite);
  const zipcode = useAppSelector(state => state.contactsSlice.activeContact.address.zipcode);
  const note = useAppSelector(state => state.contactsSlice.activeContact.note);
  const borderBottom = useAppSelector(state => state.contactsSlice.borderBottom)

  const [borderName, setBorderedName] = useState<boolean>(false);
  const [borderCompany, setBorderCompany] = useState<boolean>(false);
  const [borderPhone, setBorderPhone] = useState<boolean>(false);
  const [borderEmail, setBorderEmail] = useState<boolean>(false);
  const [borderStreet, setBorderStreet] = useState<boolean>(false);
  const [borderCity, setBorderCity] = useState<boolean>(false);
  const [borderSuite, setBorderSuite] = useState<boolean>(false);
  const [borderZipcode, setBorderZipcode] = useState<boolean>(false);
  const [borderNote, setBorderNote] = useState<boolean>(false);
  const [displayUnit, setDisplayUnit] = useState<'none' | 'flex'>('none');
  const [editable, setEditable] = useState<boolean>(true);
  const [editContactCard, setEditContactCard] = useState<boolean>(false);

  const handleChangeFirstName = useCallback((value:string): void => {
    dispatch(changeActiveContactName(value))
  },[dispatch, changeActiveContactName]);
  const handleChangeCompanyName = useCallback((value:string): void => {
    dispatch(changeActiveContactCompanyName(value))
  },[dispatch, changeActiveContactCompanyName])
  const handleChangePhone = useCallback((value:string): void => {
    dispatch(changeActiveContactPhone(value))
    },[dispatch, changeActiveContactPhone])
  const handleChangeEmail = useCallback((value:string): void => {
    dispatch(changeActiveContactEmail(value))
  },[dispatch, changeActiveContactEmail])
  const handleChangeStreet = useCallback((value:string): void => {
    dispatch(changeActiveContactStreet(value))
  },[dispatch, changeActiveContactStreet])
  const handleChangeCity = useCallback((value:string): void => {
    dispatch(changeActiveContactCity(value))
  },[dispatch, changeActiveContactCity])
  const handleChangeSuite = useCallback((value:string): void => {
    dispatch(changeActiveContactSuite(value))
  },[dispatch, changeActiveContactSuite])
  const handleChangeZipcode = useCallback((value: string): void => {
    dispatch(changeActiveContactZipcode(value))
  }, [dispatch, changeActiveContactZipcode])
  const handleChangeNote = useCallback((value:string): void => {
    dispatch(changeActionContactNote(value))
  },[dispatch, changeActionContactNote])

  const addBorderName = useCallback((): void => {
    if (!editable){setBorderedName(true)};
  },[editable, setBorderedName])
  const deleteBorderName = useCallback((): void => {
    setBorderedName(false);
  },[setBorderedName])
  const addBorderCompany = useCallback((): void => {
    if(!editable){setBorderCompany(true)};
  },[editable, setBorderCompany])
  const deleteBorderCompany = useCallback((): void => {
    setBorderCompany(false);
  },[setBorderCompany])
  const addBorderPhone = useCallback((): void => {
    if(!editable){setBorderPhone(true)};
  },[editable, setBorderPhone])
  const deleteBorderPhone = useCallback(():void => {
    setBorderPhone(false);
  },[setBorderPhone])
  const addBorderEmail = useCallback((): void => {
    if(!editable){setBorderEmail(true)};
  },[editable, setBorderEmail])
  const deleteBorderEmail = useCallback((): void => {
    setBorderEmail(false);
  },[setBorderEmail])
  const addBorderStreet = useCallback((): void => {
    if(!editable){setBorderStreet(true)};
  },[editable, setBorderStreet])
  const deleteBorderStreet = useCallback((): void => {
    setBorderStreet(false);
  },[setBorderStreet])
  const addBorderCity = useCallback((): void => {
    if(!editable){setBorderCity(true)};
  },[editable, setBorderCity])
  const deleteBorderCity = useCallback((): void => {
    setBorderCity(false);
  },[setBorderCity])
  const addBorderSuite = useCallback((): void => {
    if(!editable){setBorderSuite(true)};
  },[editable, setBorderSuite])
  const deleteBorderSuite = useCallback((): void => {
    setBorderSuite(false);
  },[setBorderSuite])
  const addBorderZipcode = useCallback((): void => {
    if(!editable){setBorderZipcode(true)};
  },[editable, setBorderZipcode])
  const deleteBorderZipcode = useCallback((): void => {
    setBorderZipcode(false);
  },[setBorderZipcode])
  const addBorderNote = useCallback((): void => {
   if(!editable){setBorderNote(true)};
  },[editable, setBorderNote])
  const deleteBorderNote = useCallback((): void => {
    setBorderNote(false);
  },[setBorderNote])

  useEffect(() => {
    if (isActiveContact.length !== 0){
      setDisplayUnit('flex');
      dispatch(getBorderBottom('1px solid rgb(236,236,236)'));
    }
    if (isActiveContact.length === 0){
      setDisplayUnit('none')
    }
  },[dispatch,
     setDisplayUnit,
     getBorderBottom,
     isActiveContact,
    ])

    const handleChangeContactButton = useCallback(() => {
     setEditable(prev => !prev);
     if(isActiveContact.length > 0){setEditContactCard(prev => !prev)};
     if(editContactCard){dispatch(saveActiveContactData())}
    },[setEditContactCard,
       setEditable,
       dispatch,
       isActiveContact,
       editContactCard,
       saveActiveContactData])

    const handleCreateNewContact = useCallback((): void => {
      dispatch(createNewContact());
      dispatch(getActivContactData());
      setEditable(false);
      setEditContactCard(true);
      dispatch(displayModal(false))
    },[dispatch,
       createNewContact,
       getActivContactData,
       setEditable,
       setEditContactCard,
       displayModal])

    const handleDeleteContact = useCallback ((): void => {
      dispatch(displayModal(true));
      dispatch(changeMainScreenOpacity('0.25'))
    },[dispatch,
      displayModal,
      changeMainScreenOpacity])


  return (
    <div className='container-contact-card'
    style={{
      opacity:`${mainScreenOpacity}`
    }}
    >
      <div className='top-contact-card pl-8'>
          <Input
          type='text'
          value={name}
          placeholder ='Имя'
          bordered={borderName}
          readOnly={editable}
          style={{
            display: displayUnit,
            fontSize: '18px',
            fontWeight: 'normal'
          }}
          onChange={(({target}) => {handleChangeFirstName(target.value)})}
          onClick={addBorderName}
          onBlur={deleteBorderName}
          />
          
          <Input
            type='text'
            value={companyName}
            bordered={borderCompany}
            placeholder='Компания'
            readOnly={editable}
            style={{
              fontSize:'12px',
              display: displayUnit,
            }}
            onChange={(({target}) => {handleChangeCompanyName(target.value)})}
            onClick={addBorderCompany}
            onBlur={deleteBorderCompany}
          />
      </div>
        <div className='main-contact-card'>
          {isActiveContact.length === 0 &&
            <h4 style={{
              color: 'grey',
              textAlign:'center',
            }}
            >
              выберите контакт из списка слева или создайте новый
            </h4>
          }
          <div 
           className='pl-4 pt-4 df'
           style={{
            borderBottom:borderBottom,
            display:displayUnit,
           }}
          >
           <h4
            className='m0 lh2 grey'
           >
             телефон
           </h4>
          <Input
             type='text'
             value={phone}
             bordered={borderPhone}
             readOnly={editable}
             style={{
               fontSize:'12px',
               marginLeft:'1rem',
               display: displayUnit,
              }}
              onChange={(({target}) => {handleChangePhone(target.value)})}
              onClick={addBorderPhone}
              onBlur={deleteBorderPhone}
          />
          </div>
          <div
           className='pl-4 df'
           style={{
            borderBottom: borderBottom
           }}
          >
            <h4
             className='lh2 grey m0'
             style={{
              marginLeft:'1.2rem',
              display: displayUnit,
             }}
            >
             почта
            </h4>
            <Input
             type='text'
             value={email}
             bordered={borderEmail}
             readOnly={editable}
             style={{
              fontSize:'12px',
              marginLeft:'1rem',
              display: displayUnit,
             }}
             onChange={(({target}) => handleChangeEmail(target.value))}
             onClick={addBorderEmail}
             onBlur={deleteBorderEmail}
            />
          </div>
          <div
           className='pl-4 df'
           style={{
            borderBottom: borderBottom
           }}
          >
            <h4
             className='grey m0 lh2'
             style={{
              marginLeft:'1.1rem',
              display: displayUnit,
             }}
            >
              адрес
            </h4>
            <div>
              <Input
               type='text'
               bordered={borderStreet}
               placeholder='улица'
               readOnly={editable}
               style={{
                marginLeft:'1rem',
                display: displayUnit,
               }}
               value={street}
               onChange={(({target}) => handleChangeStreet(target.value))}
               onClick={addBorderStreet}
               onBlur={deleteBorderStreet}
              />
              <Input
               type='text'
               bordered={borderCity}
               placeholder='город'
               readOnly={editable}
               style={{
                marginLeft:'1rem',
                display: displayUnit,
               }}
               value={city}
               onChange={(({target}) => handleChangeCity(target.value))}
               onClick={addBorderCity}
               onBlur={deleteBorderCity}
               />
               <Input
                type='text'
                bordered={borderSuite}
                placeholder='апартаменты'
                readOnly={editable}
                style={{
                  marginLeft:'1rem',
                  display: displayUnit,
                }}
                value={suite}
                onChange={(({target}) => handleChangeSuite(target.value))}
                onClick={addBorderSuite}
                onBlur={deleteBorderSuite}
               />
               <Input
                type='text'
                placeholder='индекс'
                bordered={borderZipcode}
                readOnly={editable}
                style={{
                  marginLeft:'1rem',
                  display: displayUnit,
                }}
                value={zipcode}
                onChange={(({target}) => handleChangeZipcode(target.value))}
                onClick={addBorderZipcode}
                onBlur={deleteBorderZipcode}
               />
            </div>
          </div>
          <div
             className='pl-4 df'
             style={{
              borderBottom: borderBottom
             }}
            >
              <h4
              className='grey lh2 m0'
              style={{
                marginLeft:'.7rem',
                display: displayUnit,
              }}
              >
                заметка
              </h4>
              <TextArea
               bordered={borderNote}
               rows={4}
               readOnly={editable}
               style={{
                marginLeft:'.5rem',
                display: displayUnit,
               }}
               value={note}
               onChange={(({target}) => handleChangeNote(target.value))}
               onClick={addBorderNote}
               onBlur={deleteBorderNote}
              />
            </div>
       </div>
        <div className='bottom-contact-card'>
       <div>
       <Button 
         size='small'
         onClick = {handleCreateNewContact}
         disabled={activeModalDeleteContact ? true : false}
       >
         +
        </Button>
        <Button
        size='small'
        style={{
          marginLeft:'10px'
        }}
        onClick={handleDeleteContact}
        disabled={isActiveContact.length === 0 ? true : false}
        >
          -
        </Button>
        </div>
       <Button 
         size='small'
         onClick={handleChangeContactButton}
         disabled={activeModalDeleteContact || isActiveContact.length === 0 ? true : false} 
         >
         {editContactCard ? 'Готово':'Изменить'}
        </Button>
       </div>
    </div>
  )
}; 