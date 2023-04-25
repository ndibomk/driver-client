import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div >
 <Navbar style={{
    height:"70px"
 }} bg="light" expand="lg">
      <Container>
        <div> <h1 className='logomain' >
         <Link  className='logomain'  to='/'>

          
 {/* <Link to='/'> */}
              LOGO  
         
         </Link>
                </h1>
          
        </div>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <button className='btn'>
            Sign up
          </button>
        </Navbar.Collapse>
        </div>
        
      </Container>
    </Navbar>
    </div>
  )
}

export default Header