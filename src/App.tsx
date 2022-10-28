import React from 'react';
import { Provider } from "react-redux"
import { Route, Routes } from 'react-router-dom'
import { ContactForm } from './component/ContactForm'
import LoginPage from './component/LoginPage';
import RegisterPage from './component/RegisterPage';
import { setupStore } from './store/store'

function App() {
  const store = setupStore();
  

  return (
    <div >
      <Provider store={store}>
       <Routes>
         <Route path="/" element={<LoginPage /> }/>
         <Route path="/registerPage" element={< RegisterPage/>}/>
         <Route path="/contactForm" element={<ContactForm/>}/>
       </Routes>
       </Provider>
    </div>
  );
}

export default App;
