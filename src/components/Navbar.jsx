import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLogout } from '../redux/features/authSlice';

function Header() {
  const {user}=useSelector((state)=>({...state.auth}))

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(setLogout());
    navigate('/')
  };
  return (
    <div  >
 <Navbar style={{
  display:'flex',
  gap:'2rem',
  
    // height:"70rem"
 }} bg="light" expand="lg">
      <Container>
        <div> <h1 className='logomain' >
         <Link  className='logomain'  to='/'>

          
 {/* <Link to='/'> */}
              LOGO  
         
         </Link>
                </h1>
          
        </div>
        {/* <Link to='/admin'>
        <button className="btn">Admin</button>

        </Link> */}
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {user?.result?._id ?<>
          <button className='btn' onClick={(e)=>handleLogout()}>
            Log Out
          </button>
        </>: <button className='btn'>
            Sign up
          </button>}
          
        </Navbar.Collapse>
        </div>
        
      </Container>
    </Navbar>
    </div>
  )
}

export default Header