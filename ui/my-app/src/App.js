import React, { useState, useEffect, useGlobal } from 'reactn';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import axios from "axios";

import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Create from './pages/Create';
import Logout from './components/Logout';
import Browse from './pages/Browse';
import Login from './components/Login';

function App() {
  const [token, setToken] = useGlobal('token');

  return (
    <Router>
      <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
          <Navbar.Brand href="/">MB Dating</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/Profile">Profile</Nav.Link>
              <Nav.Link href="/Browse">Browse</Nav.Link>
              <Nav.Link href="/"> Home</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
            {(token) ? (
              <div>
                <Logout/>
              </div>
            ) : (
              <div>
                <Login/>
              </div>
            )}              
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/Profile" component={Profile}/>
      <Route path="/SignIn" component={SignIn}/>
      <Route path="/Create" component={Create}/>
      <Route path="/Browse" component={Browse} />
    </Router>
  );
}

export default App;
