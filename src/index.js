// library/ package imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Amplify } from 'aws-amplify';

// stylesheet imports
import './styles/index.css';

// file imports
import AWS_AMPLIFY_CONFIG from './aws-exports';
import App from './App';

// initialisations
Amplify.configure(AWS_AMPLIFY_CONFIG);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
