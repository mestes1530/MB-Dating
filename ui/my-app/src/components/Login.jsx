import React, { useState, useGlobal } from 'reactn';
import { Redirect } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [token, setToken] = useGlobal('token');
    const [profile, setProfile] = useGlobal('profile');

    
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        setError(false);
        let token = await axios.post('http://localhost:5000/auth/login', {
          username,
          password
        });
        setToken(token.data.token);

        let profile = await axios.get('http://localhost:5000/user/profile', {
          headers: {
            'Authorization': 'Bearer ' + token.data.token 
          }
        })

        setProfile(profile.data);

        setLoggedIn(true);
      } catch(e) {
        setError(true);
      }
    }
  
    return (
      <div>
        {loggedIn && <Redirect to="/" />}
        {error && <div>Failed to login!</div>}
        <form onSubmit={handleLogin}>
          <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
          <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
          <button>Login</button>
        </form>
      </div>
    );
  }

  export default Login;