import React, { useState, useGlobal, useEffect } from 'reactn';
import { Redirect } from "react-router-dom";
import axios from "axios";

const Edit = () => {
    const [token, setToken] = useGlobal('token');
    const [profile, setProfile] = useGlobal('profile');
    const [doneEditing, setDoneEditing] = useState(false);
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState(null);
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState('');
    const [personality, setPersonality] = useState('');
    const [error, setError] = useState(false);

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            await axios.patch('http://localhost:5000/user', {
                username,
                age,
                gender,
                personality
            }, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }
            );
            setDoneEditing(true);
        } catch(e) {
            setError(true);
        }
    }

    if(profile) {
        return (
            <div>
                {doneEditing && <Redirect to ='/' />}
                <h1>Edit Page</h1>
                {error && <div>Failed to edit!</div>}
                <form onSubmit={handleEdit}>
                    <input type='text' value={profile.user.username} onChange={(e) => setUsername(e.target.value)}></input>
                    <input type='number' value={profile.user.age} placeholder='age' onChange={(e) => setAge(e.target.value)}></input>
                    <input type='text' value={profile.user.gender} placeholder='gender' onChange={(e) => setGender(e.target.value)}></input>
                    <input type='text' value={profile.user.personality} placeholder='personality' onChange={(e) => setPersonality(e.target.value)}></input>
                    <button>Done Editing</button>
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

