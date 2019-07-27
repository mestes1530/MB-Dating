import React, { useState, useEffect, useGlobal } from 'reactn';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axios from "axios";
import './App.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Create from './pages/Create';
import Logout from './components/Logout';

function App() {
  const [token, setToken] = useGlobal('token');

  return (
    <Router>
      <div className="App">
        {(token) ? (
          <div>
            <Link to="/">Home</Link>
            <Logout />
          </div>
        ) : (
          <div>
            <Link to="/SignIn">SignIn</Link>
          </div>
        )}
      </div>
      <Route path="/" exact component={Home}/>
      <Route path="/SignIn" component={SignIn}/>
      <Route path="/Create" component={Create}/>
    </Router>
  );
}

export default App;
