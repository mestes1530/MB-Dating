import React, { useState, useGlobal } from 'reactn';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";

import Login from '../components/Login';
import SignUp from '../components/SignUp';


const SignIn = () => {
    return (
        <div>
            <Login />
            <Link to="/Create">Sign Up</Link>
        </div>
    )
}

export default SignIn;