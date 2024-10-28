import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';

ReactDOM.render(
  <StudentProvider>
    <Router>
      <App />
    </Router>
  </StudentProvider>,
  document.getElementById('root')
);
