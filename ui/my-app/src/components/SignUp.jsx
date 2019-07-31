import React, {useState, useGlobal} from 'reactn';
import { Redirect } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const [signedUp, setSignedUp] = useState(false);
    const [token, setToken] = useGlobal('token');
    const [profile, setProfile] = useGlobal('profile');

    const [username, setUsername] = useState('');
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [personality, setPersonality] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState(false);
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      try {
        setError(false);
        await axios.post('http://localhost:5000/auth/sign-up', {
          username,
          age,
          gender,
          email,
          personality,
          password,
          passwordConfirm
        });
        const token = await axios.post('http://localhost:5000/auth/login', {
          username,
          password,
        })

        let profile = await axios.get('http://localhost:5000/user/profile', {
          headers: {
            'Authorization': 'Bearer ' + token.data.token 
          }
        })

        setToken(token.data.token);
        setProfile(profile.data);
        setSignedUp(true);

      } catch(e) {
        setError(true);
      }
    }

    return (
      <div>
          {signedUp && <Redirect to ='/' />}
          {error && <div>Failed to sign-up!</div>}
          <form onSubmit={handleSignUp}>
            <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
            <input type='number' placeholder='age' onChange={(e) => setAge(e.target.value)}></input>
            <input type='text' placeholder='gender' onChange={(e) => setGender(e.target.value)}></input>
            <input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
            <input type='text' placeholder='personality' onChange={(e) => setPersonality(e.target.value)}></input>
            <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
            <input type='password' placeholder='confirm password' onChange={(e) => setPasswordConfirm(e.target.value)}></input>
            <button>Sign Up</button>
          </form>
      </div>
    );
  }

  export default SignUp;