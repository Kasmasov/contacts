import React, { FC } from 'react';
import { Button } from 'antd'

export const ContactCard: FC = () => {
  return (
    <div className='container-contact-card'>
       <div className='top-contact-card'>
         <h3 className='p-8'>Алесей Иванов</h3>
         <h5 className='p-8'>ООО "Рога и копыта"</h5>
       </div>
       <div className='main-contact-card'>
        main part of card
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