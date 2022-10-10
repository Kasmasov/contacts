import React, { FC, useCallback, useState } from 'react';
import { Button, Input } from 'antd'
import './ContactForm.css'

export const ContactCard: FC = () => {

  const {TextArea} = Input;

  const [name, setName] = useState<string>('');
  const [borderName, setBorderedName] = useState<boolean>(false);
  const [company, setCompany] = useState<string>('');
  const [borderCompany, setBorderCompany] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');
  const [borderPhone, setBorderPhone] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [borderEmail, setBorderEmail] = useState<boolean>(false);
  const [street, setStreet] = useState<string>('');
  const [borderStreet, setBorderStreet] = useState<boolean>(false);
  const [city, setCity] = useState<string>('');
  const [borderCity, setBorderCity] = useState<boolean>(false);
  const [country, setCountry] = useState<string>('');
  const [borderCountry, setBorderCountry] = useState<boolean>(false)
  const [zipcode, setZipCode] = useState<string>('');
  const [borderZipcode, setBorderZipcode] = useState<boolean>(false)
  const [note, setNote] = useState<string>('');
  const [borderNote, setBorderNote] = useState<boolean>(false)


  const handleChangeFirstName = useCallback((value:string): void => {
    setName(value);
  },[setName]);
  const handleChangeCompany = useCallback((value:string): void => {
    setCompany(value);
  },[setCompany])
  const handleChangePhone = useCallback((value:string): void => {
    setPhone(value);
  },[setPhone])
  const handleChangeEmail = useCallback((value:string): void => {
    setEmail(value);
  },[setEmail])
  const handleChangeStreet = useCallback((value:string): void => {
    setStreet(value);
  },[setStreet])
  const handleChangeCity = useCallback((value:string): void => {
    setCity(value);
  },[setCity])
  const handleChangeCountry = useCallback((value:string): void => {
    setCountry(value);
  },[setCountry])
  const handleChangeZipcode = useCallback((value: string): void => {
    setZipCode(value);
  }, [setZipCode])
  const handleChangeNote = useCallback((value:string): void => {
    setNote(value);
  },[setNote])
  const addBorderName = useCallback((): void => {
    setBorderedName(true);
  },[setBorderedName])
  const deleteBorderName = useCallback((): void => {
    setBorderedName(false);
  },[setBorderedName])
  const addBorderCompany = useCallback((): void => {
    setBorderCompany(true);
  },[setBorderCompany])
  const deleteBorderCompany = useCallback((): void => {
    setBorderCompany(false);
  },[setBorderCompany])
  const addBorderPhone = useCallback((): void => {
    setBorderPhone(true);
  },[setBorderPhone])
  const deleteBorderPhone = useCallback(():void => {
    setBorderPhone(false);
  },[setBorderPhone])
  const addBorderEmail = useCallback((): void => {
    setBorderEmail(true);
  },[setBorderEmail])
  const deleteBorderEmail = useCallback((): void => {
    setBorderEmail(false);
  },[setBorderEmail])
  const addBorderStreet = useCallback((): void => {
    setBorderStreet(true);
  },[setBorderStreet])
  const deleteBorderStreet = useCallback((): void => {
    setBorderStreet(false);
  },[setBorderStreet])
  const addBorderCity = useCallback((): void => {
    setBorderCity(true);
  },[setBorderCity])
  const deleteBorderCity = useCallback((): void => {
    setBorderCity(false);
  },[setBorderCity])
  const addBorderCountry = useCallback((): void => {
    setBorderCountry(true);
  },[setBorderCountry])
  const deleteBorderCountry = useCallback((): void => {
    setBorderCountry(false);
  },[setBorderCountry])
  const addBorderZipcode = useCallback((): void => {
    setBorderZipcode(true);
  },[setBorderZipcode])
  const deleteBorderZipcode = useCallback((): void => {
    setBorderZipcode(false);
  },[setBorderZipcode])
  const addBorderNote = useCallback((): void => {
    setBorderNote(true);
  },[setBorderNote])
  const deleteBorderNote = useCallback((): void => {
    setBorderNote(false);
  },[setBorderNote])


  return (
    <div className='container-contact-card'>
       <div className='top-contact-card pl-8'>
          <Input
          type='text'
          value={name}
          placeholder ='Имя'
          bordered={borderName}
          style={{
            fontSize: '18px',
            fontWeight: 'normal'
          }}
          onChange={(({target}) => {handleChangeFirstName(target.value)})}
          onClick={addBorderName}
          onBlur={deleteBorderName}
          />
          
          <Input
            type='text'
            value={company}
            bordered={borderCompany}
            placeholder='Компания'
            style={{
              fontSize:'12px'
            }}
            onChange={(({target}) => {handleChangeCompany(target.value)})}
            onClick={addBorderCompany}
            onBlur={deleteBorderCompany}
          />
        </div>
        <div className='main-contact-card'>
          <div 
           className='pl-4 pt-4 df'
           style={{
            borderBottom:'1px solid rgb(236,236,236)'
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
             style={{
               fontSize:'12px',
               marginLeft:'1rem'
              }}
              onChange={(({target}) => {handleChangePhone(target.value)})}
              onClick={addBorderPhone}
              onBlur={deleteBorderPhone}
          />
          </div>
          <div
           className='pl-4 df'
           style={{
            borderBottom:'1px solid rgb(236,236,236)'
           }}
          >
            <h4
             className='lh2 grey m0'
             style={{
              marginLeft:'1.2rem'
             }}
            >
             почта
            </h4>
            <Input
             type='text'
             value={email}
             bordered={borderEmail}
             style={{
              fontSize:'12px',
              marginLeft:'1rem'
             }}
             onChange={(({target}) => handleChangeEmail(target.value))}
             onClick={addBorderEmail}
             onBlur={deleteBorderEmail}
            />
          </div>
          <div
           className='pl-4 df'
           style={{
            borderBottom:'1px solid rgb(236,236,236)'
           }}
          >
            <h4
             className='grey m0 lh2'
             style={{
              marginLeft:'1.1rem'
             }}
            >
              адрес
            </h4>
            <div>
              <Input
               type='text'
               bordered={borderStreet}
               placeholder='улица'
               style={{
                marginLeft:'1rem'
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
               style={{
                marginLeft:'1rem'
               }}
               value={city}
               onChange={(({target}) => handleChangeCity(target.value))}
               onClick={addBorderCity}
               onBlur={deleteBorderCity}
               />
               <Input
                type='text'
                bordered={borderCountry}
                placeholder='страна'
                style={{
                  marginLeft:'1rem'
                }}
                value={country}
                onChange={(({target}) => handleChangeCountry(target.value))}
                onClick={addBorderCountry}
                onBlur={deleteBorderCountry}
               />
               <Input
                type='text'
                placeholder='индекс'
                bordered={borderZipcode}
                style={{
                  marginLeft:'1rem'
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
              borderBottom:'1px solid rgb(236,236,236)'
             }}
            >
              <h4
              className='grey lh2 m0'
              style={{
                marginLeft:'.7rem'
              }}
              >
                заметка
              </h4>
              <TextArea
               bordered={borderNote}
               rows={4}
               style={{
                marginLeft:'.5rem'
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
         >
         Изменить
        </Button>
       </div>
    </div>
  )
}; 