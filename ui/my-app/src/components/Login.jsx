import React, { useState, useGlobal } from 'reactn';
import axios from "axios";

const Login = () => {
    const [token, setToken] = useGlobal('token');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        setError(false);
        const { data } = await axios.post('http://localhost:5000/auth/login', {
          username,
          password
        });
        setToken(data.token);
      } catch(e) {
        setError(true);
      }
    }
  
    return (
      <div>
        <h1>Login component</h1>
        {error && <div>Failed to login!</div>}
        <form onSubmit={handleLogin}>
          <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
          <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }

  export default Login;