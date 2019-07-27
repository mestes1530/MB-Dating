import React, { useState, useEffect, useGlobal } from 'reactn';
import axios from "axios";

const User = () => {
    const [token, setToken] = useGlobal('token');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    
    useEffect(() => {
      const displayUser = async (e) => {
        try {
          setError(true);
          const { data } = await axios.get('http://localhost:5000/user');
        } catch(e) {
          setError(false);
        }
      }
      displayUser();
    }, [token]);
     
  
    return (
      <div>
        <h1>Username</h1>
      </div>
     )
  }

  export default User;