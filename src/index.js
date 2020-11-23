import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
