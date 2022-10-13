import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button, Input } from 'antd'
import './ContactForm.css'
import { useAppDispatch, useAppSelector } from '../hooks/redux';

export const ContactCard: FC = () => {

  const { activeContactId, contacts } = useAppSelector(state => state.contactsSlice)
  const isActiveContact = contacts.filter(contact => contact.id === activeContactId);


  const {TextArea} = Input;

  // const [name, setName] = useState<string>('');
  const name = useAppSelector(state => state.contactsSlice.activeContact.name);
  const [borderName, setBorderedName] = useState<boolean>(false);
  // const [company, setCompany] = useState<string>('');
  const companyName = useAppSelector( state => state.contactsSlice.activeContact.company.name);
  const [borderCompany, setBorderCompany] = useState<boolean>(false);
  // const [phone, setPhone] = useState<string>('');
  const phone = useAppSelector( state => state.contactsSlice.activeContact.phone);
  const [borderPhone, setBorderPhone] = useState<boolean>(false);
  // const [email, setEmail] = useState<string>('');
  const email = useAppSelector( state => state.contactsSlice.activeContact.email);
  const [borderEmail, setBorderEmail] = useState<boolean>(false);
  // const [street, setStreet] = useState<string>('');
  const street = useAppSelector(state => state.contactsSlice.activeContact.address.street);
  const [borderStreet, setBorderStreet] = useState<boolean>(false);
  // const [city, setCity] = useState<string>('');
  const city = useAppSelector(state => state.contactsSlice.activeContact.address.city);
  const [borderCity, setBorderCity] = useState<boolean>(false);
  // const [suite, setSuite] = useState<string>('');
  const suite = useAppSelector(state => state.contactsSlice.activeContact.address.suite);
  const [borderSuite, setBorderSuite] = useState<boolean>(false);
  // const [zipcode, setZipCode] = useState<string>('');
  const zipcode = useAppSelector(state => state.contactsSlice.activeContact.address.zipcode);
  const [borderZipcode, setBorderZipcode] = useState<boolean>(false);
  // const [note, setNote] = useState<string>('');
  const note = useAppSelector(state => state.contactsSlice.activeContact.note);
  const [borderNote, setBorderNote] = useState<boolean>(false);
  const [displayUnit, setDisplayUnit] = useState<'none' | 'flex'>('none');
  const [borderBottom, setBorderBottom] = useState<'' | '1px solid rgb(236,236,236)'>('');
  const [editable, setEditable] = useState<boolean>(true);
  const [editContactCard, setEditContactCard] = useState<boolean>(false);


  const handleChangeFirstName = useCallback((value:string): void => {
    // setName(value);
  },[]);
  const handleChangeCompany = useCallback((value:string): void => {
    // setCompany(value);
  },[])
  const handleChangePhone = useCallback((value:string): void => {
    // setPhone(value);
  },[])
  const handleChangeEmail = useCallback((value:string): void => {
    // setEmail(value);
  },[])
  const handleChangeStreet = useCallback((value:string): void => {
    // setStreet(value);
  },[])
  const handleChangeCity = useCallback((value:string): void => {
    // setCity(value);
  },[])
  const handleChangeSuite = useCallback((value:string): void => {
    // setSuite(value);
  },[])
  const handleChangeZipcode = useCallback((value: string): void => {
    // setZipCode(value);
  }, [])
  const handleChangeNote = useCallback((value:string): void => {
    // setNote(value);
  },[])
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
      // setName(isActiveContact[0].name);
      // setCompany(isActiveContact[0].company.name);
      // setPhone(isActiveContact[0].phone);
      // setEmail(isActiveContact[0].email);
      // setStreet(isActiveContact[0].address.street);
      // setCity(isActiveContact[0].address.city);
      // setSuite(isActiveContact[0].address.suite);
      // setZipCode(isActiveContact[0].address.zipcode);
      setDisplayUnit('flex');
      setBorderBottom('1px solid rgb(236,236,236)');
    }
  },[
    //  setName,
  //    setCompany,
  //    setPhone,
  //    setEmail,
  //    setStreet,
  //    setCity,
  //    setSuite,
     setDisplayUnit,
     setBorderBottom,
     isActiveContact])

    const handleChangeContactButton = useCallback(() => {
     setEditable(prev => !prev);
     if(isActiveContact.length > 0){setEditContactCard(prev => !prev)};
    },[setEditContactCard,
       setEditable,
       isActiveContact])


  return (
    <div className='container-contact-card'>
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
            onChange={(({target}) => {handleChangeCompany(target.value)})}
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
       <Button 
         size='small'
       >
         +
        </Button>
       <Button 
         size='small'
         onClick={handleChangeContactButton}
         >
         {editContactCard ? 'Готово':'Изменить'}
        </Button>
       </div>
    </div>
  )
}; 