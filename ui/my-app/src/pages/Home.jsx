import React, { useState, useEffect, useGlobal } from 'reactn';
import axios from "axios";

import Logout from '../components/Logout';
import User from '../components/User';

const Home = () => {
    const [token, setToken] = useGlobal('token');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const renderHome = async (e) => {
        try {
          setError(false);
          const { data } = await axios.get('http://localhost:5000/user/profile/', {
            headers: {
              "Authorization": "Bearer " + token
            }
          });
          setUser(data);
        } catch (e) {
          setError(true);
        }
      }
  
      renderHome();
    }, [token]);
  
    if(user) {
      return (
        <div>
          <h1>Home Page</h1>
          <h2>{user.username}</h2>
          <h3>{user.personality}</h3>
          <hr></hr>
          <div>{user.matches.map((match) => (
            <div>{match.userOne}</div>
          ))}</div>
          <Logout />
          <User />
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }

  export default Home;