import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { Input, Form, Button } from 'antd'
import './LoginPage.css'

const RegisterPage: FC = () => {
    // const onFinish = (values: any) => {
    //     console.log('Success:', values);
    //   };
    
    //   const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    //   };
    
  return (
    <div
    className="modal-login-page"
    >
        <h3
        style={{
            marginBottom:'20px',
            color: 'grey',
        }}
        > Зарегистрируйтесь</h3>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: 'Пожалуйста, заполните E-mail!' }]}
      >
        <Input 
        style={{
          width: '255px',
        }}/>
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, заполните пароль!' }]}
      >
        <Input.Password
        style={{
          width: '255px',
        }} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>

      <span> У меня уже есть учетная запись, хочу <Link to='/'>войти</Link></span>

    </Form>
    </div>
  )
}

export default RegisterPage
