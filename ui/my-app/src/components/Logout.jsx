import React, { useState, useGlobal } from 'reactn';
import { Redirect } from "react-router-dom";
import axios from "axios";
import { homedir } from 'os';

const Logout = () => {
    const [token, setToken] = useGlobal('token');
    const [loggedOut, setLoggedOut] = useState(false);

    const logOut = () => {
      setToken(null)
      setLoggedOut(true)
    }

    return (
      <div>
        {loggedOut && <Redirect to="/SignIn" />}
        <button onClick={logOut}>Logout</button>
      </div>
    );
}

export default Logout;