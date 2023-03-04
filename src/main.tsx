import './main.css';
import './styles/theme.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {
  initializeSupportLanguageRecords,
  initializeDatabase,
  repository,
} from './lib/db';

/**
 * @TODO temp code
 */
initializeDatabase()
  .then((_) => initializeSupportLanguageRecords())
  .then((_) => repository.getByKey('support_language', 'json'))
  .then((data) => console.log(data))
  .catch((reason) => console.error(reason));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
