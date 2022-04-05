import React from 'react';
import {render} from 'react-dom';
import {}

import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    , document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);