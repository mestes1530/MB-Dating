import React, {useState} from 'reactn';
import axios from "axios";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [personality, setPersonality] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState(false);
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      try {
        setError(false);
        const { data } = await axios.post('http://localhost:5000/auth/sign-up', {
          username,
          personality,
          password,
          passwordConfirm
        });
        // setUsername('');
        // setPersonality('');
        // setPassword('');
        // setPasswordConfirm('');
      } catch(e) {
        setError(true);
      }
    }
  
    return (
      <div>
          <h1>Rendereing Sign Up</h1>
          {error && <div>Failed to sign-up!</div>}
          <form onSubmit={handleSignUp}>
            <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
            <input type='text' placeholder='personality' onChange={(e) => setPersonality(e.target.value)}></input>
            <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
            <input type='password' placeholder='confirm password' onChange={(e) => setPasswordConfirm(e.target.value)}></input>
            <button>Submit</button>
          </form>
      </div>
    );
  }

  export default SignUp;