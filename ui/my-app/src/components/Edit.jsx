import React, { useState, useGlobal, useEffect } from 'reactn';
import { Redirect } from "react-router-dom";
import axios from "axios";

const Edit = () => {
    const [token, setToken] = useGlobal('token');
    const [profile, setProfile] = useGlobal('profile');
    const [doneEditing, setDoneEditing] = useState(false);
    const [username, setUsername] = useState(profile.user.username || '');
    const [age, setAge] = useState(profile.user.age || '');
    const [gender, setGender] = useState(profile.user.gender || '');
    const [email, setEmail] = useState(profile.user.email || '');
    const [personality, setPersonality] = useState(profile.user.personality || '');
    const [error, setError] = useState(false);

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            const { data } = await axios.patch('http://localhost:5000/user/profile', {
                username,
                age,
                gender,
                email,
                personality
            }, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }
            );

            console.log(data);
            setProfile(data);
            setDoneEditing(true);
        } catch(e) {
            setError(true);
        }
    }

    if(profile) {
        return (
            <div>
                <h1>Edit Profile</h1>
                {error && <div>Failed to edit!</div>}
                <form onSubmit={handleEdit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <input type='number' value={age} placeholder='age' onChange={(e) => setAge(e.target.value)}></input>
                    <input type='text' value={gender} placeholder='gender' onChange={(e) => setGender(e.target.value)}></input>
                    <input type='text' value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='text' value={personality} placeholder='personality' onChange={(e) => setPersonality(e.target.value)}></input>
                    <button>Save Changes</button>
                </form>
            </div>
        );
    } else {
        return (
            <div>No profile found!</div>
        )
    }
}

export default Edit;

