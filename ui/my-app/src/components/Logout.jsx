import React, { useState, useGlobal } from 'reactn';
import axios from "axios";

const Logout = () => {
    const [token, setToken] = useGlobal('token');
  
    return (
      <div>
        <h1>Logout</h1>
        <button onClick={() => setToken(null)}>Logout</button>
      </div>
    );
}

export default Logout;