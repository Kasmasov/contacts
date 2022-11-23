import React from 'react';
import { Provider } from "react-redux"
import { Route, Routes } from 'react-router-dom'
import { ContactForm } from './component/pages/ContactFormPage'
import LoginPage from './component/pages/LoginPage';
import RegisterPage from './component/pages/RegisterPage';
import { setupStore } from './store/store'
import './utils/firebase'

function App() {
  const store = setupStore();
  

  return (
    <div >
      <Provider store={store}>
       <Routes>
         <Route path="/" element={<LoginPage /> }/>
         <Route path="/registerPage" element={< RegisterPage/>}/>
         <Route path="/contactFormPage" element={<ContactForm/>}/>
       </Routes>
       </Provider>
    </div>
  );
}

export default App;
