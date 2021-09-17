import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataProvider } from './context/context';
import { ModalProvider } from './context/modalContext';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


