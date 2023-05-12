import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './context/UserContext';
import MessageContextProvider from './context/MessageContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserContextProvider>
      <MessageContextProvider>
        <App />
      </MessageContextProvider>
    </UserContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

