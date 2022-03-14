import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);
