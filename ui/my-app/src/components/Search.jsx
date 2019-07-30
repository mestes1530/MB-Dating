import React, { useState, useEffect, useGlobal } from 'reactn';
import axios from "axios";

import { Button } from 'react-bootstrap';

const Search = () => {
    const [token, setToken] = useGlobal('token');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const [personality, setPersonality] = useState('');


    const handleChange = async (e) => {
        setPersonality(e.target.value)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            const { data } = await axios.get('http://localhost:5000/user');
            //console.log(JSON.stringify(data));
        } catch (e) {
            setError(true);
        }
    }

    return (
        <div>
            <h1>Search Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Pick a personality type:
                    <select onChange={handleChange}>
                        <option value='ENTJ'>ENTJ</option>
                        <option value='ENTP'>ENTP</option>
                        <option value='ENFJ'>ENFJ</option>
                        <option value='ENFP'>ENFP</option>
                        <option value='ESTJ'>ESTJ</option>
                        <option value='ESTP'>ESTP</option>
                        <option value='ESFJ'>ESFJ</option>
                        <option value='ESFP'>ESFP</option>
                        <option value='INTJ'>INTJ</option>
                        <option value='INTP'>INTP</option>
                        <option value='INFJ'>INFJ</option>
                        <option value='INFP'>INFP</option>
                        <option value='ISTJ'>ISTJ</option>
                        <option value='ISTP'>ISTP</option>
                        <option value='ISFJ'>ISFJ</option>
                        <option value='ISFP'>ISFP</option>
                    </select>
                </label>
                <Button variant="info">Submit</Button>
            </form>
            <p>{personality}</p>
            <hr></hr>
            <div className="FlexBox">
                <div className="FlexItem"></div>
            </div>
        </div>
    );
}

export default Search;