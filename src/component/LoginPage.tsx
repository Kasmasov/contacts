import React, { FC } from "react";
import { Link } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import './LoginPage.css'

const LoginPage: FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    
  return (
    <div
    className="login-page"
    >
        <h3
        style={{
            marginBottom:'20px',
            color: 'grey',
        }}
        > Авторизуйтесь</h3>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Имя"
        name="username"
        rules={[{ required: true, message: 'Пожалуйста, заполните имя!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, заполните пароль!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Готово
        </Button>
      </Form.Item>

      <span> У меня нет учетной записи, хочу <Link to='registerPage'>зарегистрироваться</Link></span>

    </Form>
    </div>
  )
}

export default LoginPage