import React, { FC } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../store/reducers/userSlice';
import {FormForLoginAndRegistration} from '../FormForLoginAndRegistration'
import './LoginPage.css'

const RegisterPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword (auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
            userEmail: user.email,
            id: user.uid,
            token: user.refreshToken,
        }));
        navigate('/contactFormPage');
      })
      .catch(console.error)
  };
   
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
