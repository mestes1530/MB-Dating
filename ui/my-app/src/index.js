import React, { setGlobal, addCallback } from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const parseProfile = () => {
    return JSON.parse(localStorage.getItem('profile') || null) 
}

setGlobal({
    token: localStorage.getItem('token') || null,
    profile: parseProfile(),
})

addCallback((global) => {
    console.log(global)
    localStorage.setItem('token', global.token)
    localStorage.setItem('profile', JSON.stringify(global.profile))

    return null;
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
