import React from 'react';

import { Route, Routes } from 'react-router-dom'
import { ContactForm } from './component/ContactForm'

function App() {
  return (
    <div >
       <Routes>
         <Route path="/" element={<ContactForm /> }/>
       </Routes>
    </div>
  );
}

export default App;
