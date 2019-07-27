import React, { useState, useEffect, useGlobal } from 'reactn';
import axios from "axios";

import Logout from '../components/Logout';
import User from '../components/User';
import Edit from '../components/Edit';

const Home = () => {
    const [token, setToken] = useGlobal('token');
    const [user, setUser] = useState(null);
    const [matches, setMatches] = useState([]);
    const [error, setError] = useState(false);
    const [editing, setEditing] = useState(false);
  
    useEffect(() => {
      const renderHome = async (e) => {
        try {
          setError(false);
          const { data } = await axios.get('http://localhost:5000/user/profile/', {
            headers: {
              "Authorization": "Bearer " + token
            }
          });
          setUser(data.user);
          setMatches(data.matches);
        } catch (e) {
          setError(true);
        }
      }
  
      renderHome();
    }, [token]);

    if(user) {
      console.log(user);
      return (
        <div>
          <h1>Home Page</h1>
          <h2>{user.username}</h2>
          <h3>{user.personality}</h3>
          <hr></hr>
          <div>
            <ul>
              <li>{user.age}</li>
              <li>{user.gender}</li>
              <li>{JSON.stringify(user.profile)}</li>
            </ul>
          </div>
          <div>{matches.map((match) => (
            <div>{JSON.stringify(match)}</div>
          ))}</div>
          <Logout />
          <User />
          <Edit />
        </div>
      )
    } else {
      return (
        <div>Login to start</div>
      )
    }
  }

  export default Home;