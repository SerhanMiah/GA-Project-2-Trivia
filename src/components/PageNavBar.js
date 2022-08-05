import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';

import About from '../components/Home/About.js'
import { Link } from 'react-router-dom';

function PageNavBar() {
  return (
    <div as='section' className='NavBar'>
      <Navbar bg="dark" variant="dark">
       
          {/* <Navbar.Brand Link='/'>Home logo</Navbar.Brand> */}
          <Nav className="me-auto">
            
          <NavLink to="/" href="." >Home</NavLink>

          <NavLink to="/About" element={About}>About</NavLink>


          {/* <Nav.Link to='/About'>About Us</Nav.Link> */}
          

          



          </Nav>
      
      </Navbar>
    </div>
  );
}

export default PageNavBar;