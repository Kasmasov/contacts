import React, { FC } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../store/reducers/userSlice';
import {FormForLoginAndRegistration} from '../FormForLoginAndRegistration'
import './LoginPage.css'
import { stringLength } from '@firebase/util';

const RegisterPage: FC = () => {

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword (auth, email, password)
      .then(console.log)
      .catch(console.error)
  };
  const dispatch = useAppDispatch()
   
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

        <FormForLoginAndRegistration
          handleClickForRegistrationAndLogin = {handleRegister}
        />

      <span> У меня уже есть учетная запись, хочу <Link to='/'>войти</Link></span>

    </div>
  )
}

export default RegisterPage
