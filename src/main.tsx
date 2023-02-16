import './main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { initializeDatabase, repository } from './lib/db';

/**
 * @TODO temp code
 */
initializeDatabase()
  .then((_) => repository.getByKey('json', 1))
  .then((data) => {
    console.log(data);
  });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
