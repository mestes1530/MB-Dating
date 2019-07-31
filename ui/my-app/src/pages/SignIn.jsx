import React, { useState, useGlobal } from 'reactn';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";

import Login from '../components/Login';
import SignUp from '../components/SignUp';


const SignIn = () => {
    return (
        <div>
            <h3>Login</h3>
            <Login />
            <hr></hr>
            <h3>Sign Up</h3>
            <SignUp />
        </div>
    )
}

export default SignIn;