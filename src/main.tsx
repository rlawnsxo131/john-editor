import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { initializeDatabase, repository } from './lib/db';
import { darkClass, lightClass } from './styles/theme.css';

initializeDatabase();
repository.getByKey('json', 1).then((data) => {
  console.log(data);
});

console.log(lightClass, darkClass);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
