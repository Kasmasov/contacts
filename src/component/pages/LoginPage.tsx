import React, { FC } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom'
import {FormForLoginAndRegistration} from '../FormForLoginAndRegistration';
import { useAppDispatch } from '../../hooks/redux'
import { setUser } from '../../store/reducers/userSlice'
import './LoginPage.css'

const LoginPage: FC = () => {
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword (auth, email, password)
      .then(console.log)
      .catch(console.error)
  };
  const dispatch = useAppDispatch();

  return (
    <div
    className="modal-login-page"
    >
        <h3
        style={{
            marginBottom:'20px',
            color: 'grey',
        }}
        > Авторизуйтесь</h3>
        <FormForLoginAndRegistration
          handleClickForRegistrationAndLogin = {handleLogin}

        />
      <span> У меня нет учетной записи, хочу <Link to='/registerPage'>зарегистрироваться</Link></span>
    </div>
  )
}

export default LoginPage