import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ContextProvider } from "./Context"
import App from './App';
import reportWebVitals from './reportWebVitals';

// Wrap the app component with the tools needed to make everything work.
ReactDOM.render(
  <ContextProvider>
    <Router>
       <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
 