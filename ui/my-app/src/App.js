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
              <Nav.Link href="/">Personalities</Nav.Link>
              <NavDropdown title="Compatibility" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://www.bustle.com/p/these-are-the-3-most-compatible-myers-briggs-types-for-you-based-on-your-myers-briggs-8455807">Bustle</NavDropdown.Item>
                <NavDropdown.Item href="https://www.personalityrelationships.net/">Relationships</NavDropdown.Item>
                <NavDropdown.Item href="https://www.truity.com/test/which-personality-type-your-love-match">Truity</NavDropdown.Item>
                <NavDropdown.Item href="https://www.massmatch.com/MBTI-2.php">MassMatch</NavDropdown.Item>
                <NavDropdown.Item href="https://www.dreamsaroundtheworld.com/wp-content/uploads/2017/01/Myers_Briggs_Type_Compatibility_Chart.pdf">Chart</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.16personalities.com/personality-types">16 Personalities</NavDropdown.Item>
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
