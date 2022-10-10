import React from 'react';
import { Provider } from "react-redux"
import { Route, Routes } from 'react-router-dom'
import { ContactForm } from './component/ContactForm'
import { setupStore } from './store/store'

function App() {
  const store = setupStore();
  

  return (
    <div >
      <Provider store={store}>
       <Routes>
         <Route path="/" element={<ContactForm /> }/>
       </Routes>
       </Provider>
    </div>
  );
}

export default App;
