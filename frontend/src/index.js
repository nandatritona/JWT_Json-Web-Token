import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bulma/css/bulma.css";
import axios from 'axios';
axios.defaults.withCredentials = true; // agar tidak berulang2 mengirim credential

ReactDOM.render(
    <React.StrictMode>
        <App />,
    </React.StrictMode>,
    document.getElementById("root")
);
