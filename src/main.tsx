import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { initializeDatabase, repository } from './lib/db';

initializeDatabase();
repository.getByKey('json', 1).then((data) => {
  console.log(data);
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
