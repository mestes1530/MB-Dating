import React, { useState, useEffect, useGlobal } from 'reactn';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";

import Logout from '../components/Logout';
import User from '../components/User';
import Edit from '../components/Edit';

import Search from '../components/Search';

const Profile = () => {
    const [token, setToken] = useGlobal('token');
    const [user, setUser] = useState(null);
    const [matches, setMatches] = useState([]);
    const [error, setError] = useState(false);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
      const renderProfile = async (e) => {
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
      renderProfile();
    }, [token]);

    if(user) {
      console.log(user);
      return (
        <div className='ContentBox'>
          <h1>Profile Page</h1>
          <h2>{user.username}</h2>
          <h3>{user.personality}</h3>
          <hr></hr>
          <div>
            <table>
              <tr>
                <th>Age:</th>
                <ti>{user.age}</ti>
              </tr>
              <tr>
                <th>Gender:</th>
                <ti>{user.gender}</ti>
              </tr>
            </table>
          </div>
          <div>{matches.map((match) => (
            <div>{JSON.stringify(match)}</div>
          ))}</div>
          <Logout />
          <User />
          <Edit />
          <Link to="/Browse">Browse</Link>
        </div>
      )
    } else {
      return (
        <div>Login to start</div>
      )
    }
  }

  export default Profile;