import React, {FC, useState} from 'react';
import { Input, Form, Button } from 'antd';
import { TLoginAndRegistrationProps } from '../types/types'

export const FormForLoginAndRegistration:FC <TLoginAndRegistrationProps> = ({handleClickForRegistrationAndLogin}) => {
    const[ email, setEmail ] = useState<string>('');
    const[ password, setPassword ] = useState<string>('');
  return (
    <div>
      <Form
         name="basic"
         labelCol={{ span: 8 }}
         wrapperCol={{ span: 16 }}
         initialValues={{ remember: true }}
         autoComplete="off"
      >
      <Form.Item
         label="E-mail"
         name="email"
         rules={[{ required: true, message: 'Пожалуйста, заполните E-mail!' }]}
         >
      <Input 
         value={email}
         onChange ={(({target}) => {setEmail(target.value)})}
         style={{
           width: '255px',
         }}
      />
      </Form.Item>

      <Form.Item
         label="Пароль"
         name="password"
         rules={[{ required: true, message: 'Пожалуйста, заполните пароль!' }]}
      >
        <Input.Password 
         value={password}
         onChange ={({target}) => {(setPassword(target.value))}}
         style={{
           width: '255px',
         }}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button 
         type="primary" 
         htmlType="submit"
         onClick ={() => handleClickForRegistrationAndLogin(email, password)}
        >
           Войти
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}


