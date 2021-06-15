import './App.css';
import React from 'react';
import App2 from './App2';
import AppContextProvider from './components/context/CartContext';

export default function App () {
    return (
      <AppContextProvider>
        <App2 />
      </AppContextProvider>
    )
  }