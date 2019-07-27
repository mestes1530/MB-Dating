import React, {useState, useGlobal} from 'reactn';
import { Redirect } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const [signedUp, setSignedUp] = useState(false);
    const [token, setToken] = useGlobal('token');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState('');
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
          personality,
          password,
          passwordConfirm
        });
        const { data } = await axios.post('http://localhost:5000/auth/login', {
          username,
          password,
        })
        
        setToken(data.token);
        setSignedUp(true);

      } catch(e) {
        setError(true);
      }
    }

    return (
      <div>
          {signedUp && <Redirect to ='/' />}
          <h1>Rendereing Sign Up</h1>
          {error && <div>Failed to sign-up!</div>}
          <form onSubmit={handleSignUp}>
            <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
            <input type='number' placeholder='age' onChange={(e) => setAge(e.target.value)}></input>
            <input type='text' placeholder='gender' onChange={(e) => setGender(e.target.value)}></input>
            <input type='text' placeholder='personality' onChange={(e) => setPersonality(e.target.value)}></input>
            <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
            <input type='password' placeholder='confirm password' onChange={(e) => setPasswordConfirm(e.target.value)}></input>
            <button>Submit</button>
          </form>
      </div>
    );
  }

  export default SignUp;