import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    , document.getElementById('root'));

    const container = document.createElement('div');
const root = createRoot(App);
root.render(<App tab="home" />);