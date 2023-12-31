import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Could not find root element');
}

createRoot(root).render(
    <App/>
);