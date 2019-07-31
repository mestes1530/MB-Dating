import React, { useState, useEffect, useGlobal } from 'reactn';
import axios from "axios";

import { Button } from 'react-bootstrap';


const Search = () => {
    const [token, setToken] = useGlobal('token');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const [matches, setMatches] = useState([]);
    const [personality, setPersonality] = useState('ENTJ');


    const handleChange = async (e) => {
        setPersonality(e.target.value)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            const { data } = await axios.get('http://localhost:5000/match/search/' + personality, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            console.log(data)
            setMatches(data)
        } catch (e) {
            setError(true);
        }
    }

    // const findNearBy = async (e) => {
    //     e.preventDefault();
    //     try {
    //         setError(false);
    //         const { data } = await axios.get('http://localhost:5000/match/search/near/', {
    //             headers: {
    //                 Authorization: "Bearer" + token
    //             }
    //         })
    //         console.log(data);
    //         setMatches(data);
    //     } catch(e) {
    //         setError(true);
    //     }
    // }

    return (
        <div>
            <h1>Browse Profiles</h1>
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
                <Button variant="info" size="sm" type="submit">Submit</Button>
            </form>
            <hr></hr>
            {/* <form onSubmit={findNearBy}>
                <Button variant="info" size="sm" type="submit">Find Near Me</Button>
            </form> */}
            <div className="FlexBox">
                {matches.map((match) => (
                    <div className="FlexItem">
                        <table>
                            <tr>
                                <th>Username:</th>
                                <td>{match.username}</td>
                            </tr>
                            <tr>
                                <th>MB Type:</th>
                                <td>{match.personality}</td>
                            </tr>
                            <tr>
                                <th>Age:</th>
                                <td>{match.age}</td>
                            </tr>
                            <tr>
                                <th>Gender:</th>
                                <td>{match.gender}</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>{match.email}</td>
                            </tr>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;