import React, { useState, useEffect, useGlobal } from 'reactn';

import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Edit from '../components/Edit';
import { Button, Badge } from 'react-bootstrap';


const Profile = () => {
    const [token, setToken] = useGlobal('token');
    const [profile, setProfile] = useGlobal('profile');
    const [editing, setEditing] = useState(false);

    if(token && profile) {
      return (
        <div className='ContentBox'>
          <h1>{profile.user.username}</h1>
          <hr></hr>
          <div>
            <center>
            <table>
              <tr>
                <th>MB Type:</th>
                <td>{profile.user.personality}</td>
              </tr>
              <tr>
                <th>Age:</th>
                <td>{profile.user.age}</td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>{profile.user.gender}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{profile.user.email}</td>
              </tr>
            </table>
            </center>
            <br></br>
          </div>
          <div>{profile.matches.map((match) => (
            <div>{JSON.stringify(match)}</div>
          ))}</div>
          <Button variant="info" onClick={() => setEditing(!editing)}>Edit Profile</Button>
          {(editing) ? (
            <div>
              <Edit />
            </div>
          ) : (
            <div></div>
          )}
          <br></br>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Login</h3>
          <Login />
          <hr></hr>
          <h3>Sign Up</h3>
          <SignUp />
          <hr></hr>
          <div>
            <h3><a href="https://www.16personalities.com/free-personality-test">
              <Badge variant="info">Take the Myers Briggs personality test</Badge>
            </a></h3>
          </div>
        </div>
      )
    }
  }

  export default Profile;