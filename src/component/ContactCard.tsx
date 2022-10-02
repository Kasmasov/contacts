import React, { FC, useCallback, useState } from 'react';
import { Button, Input } from 'antd'
import './ContactForm.css'
import { RecordWithTtl } from 'dns';

export const ContactCard: FC = () => {

  const {TextArea} = Input;

  const [bordered, setBordered] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('')
  const [street, setStreet] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [zipcode, setZipCode] = useState<string>('')
  const [note, setNote] = useState<string>('')


  const handleChangeFirstName = useCallback((value:string): void => {
    setFirstName(value)
  },[setFirstName]);
  const handleChangeLastName = useCallback((value:string):void => {
    setLastName(value)
  },[setLastName]);
  const handleChangeCompany = useCallback((value:string): void => {
    setCompany(value)
  },[setCompany])
  const handleChangePhone = useCallback((value:string): void => {
    setPhone(value)
  },[setPhone])
  const handleChangeEmail = useCallback((value:string): void => {
    setEmail(value)
  },[setEmail])
  const handleChangeStreet = useCallback((value:string): void => {
    setStreet(value)
  },[setStreet])
  const handleChangeCity = useCallback((value:string): void => {
    setCity(value)
  },[setCity])
  const handleChangeCountry = useCallback((value:string): void => {
    setCountry(value)
  },[setCountry])
  const handleChangeZipcode = useCallback((value: string): void => {
    setZipCode(value)
  }, [setZipCode])
  const handleChangeNote = useCallback((value:string): void => {
    setNote(value)
  },[setNote])
  const isBordered = useCallback((target: EventTarget): void => {
    console.log(target)
  },[])
  const notBordered = useCallback((): void => {
    setBordered(false)
  },[])


  return (
    <div className='container-contact-card'>
       <div className='top-contact-card pl-8'>
          <Input
          type='text'
          value={firstName}
          placeholder ='Имя'
          bordered={bordered}
          style={{
            fontSize:'18px',
            fontWeight:'normal'
          }}
          onChange={(({target}) => {handleChangeFirstName(target.value)})}
          onClick={(({target}) => isBordered(target))}
          onBlur={notBordered}
          
          />
          <Input
            type='text'
            value={lastName}
            bordered={bordered}
            placeholder='Фамилия'
            style={{
              fontSize:'18px',
              fontWeight:'normal'
            }}
           onChange={(({target}) => {handleChangeLastName (target.value)})}
          /> 
          <Input
            type='text'
            value={company}
            bordered={bordered}
            placeholder='Компания'
            style={{
              fontSize:'12px'
            }}
            onChange={(({target}) => {handleChangeCompany(target.value)})}
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
             bordered={bordered}
             style={{
               fontSize:'12px',
               marginLeft:'1rem'
              }}
              onChange={(({target}) => {handleChangePhone(target.value)})}
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
             bordered={bordered}
             style={{
              fontSize:'12px',
              marginLeft:'1rem'
             }}
             onChange={(({target}) => handleChangeEmail(target.value))}
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
               bordered={bordered}
               placeholder='улица'
               style={{
                marginLeft:'1rem'
               }}
               value={street}
               onChange={(({target}) => handleChangeStreet(target.value))}
              />
              <Input
               type='text'
               bordered={bordered}
               placeholder='город'
               style={{
                marginLeft:'1rem'
               }}
               value={city}
               onChange={(({target}) => handleChangeCity(target.value))}
               />
               <Input
                type='text'
                bordered={bordered}
                placeholder='страна'
                style={{
                  marginLeft:'1rem'
                }}
                value={country}
                onChange={(({target}) => handleChangeCountry(target.value))}
               />
               <Input
                type='text'
                placeholder='индекс'
                bordered={bordered}
                style={{
                  marginLeft:'1rem'
                }}
                value={zipcode}
                onChange={(({target}) => handleChangeZipcode(target.value))}
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
               bordered={bordered}
               rows={4}
               style={{
                marginLeft:'.5rem'
               }}
               value={note}
               onChange={(({target}) => handleChangeNote(target.value))}
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