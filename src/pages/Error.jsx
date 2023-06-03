import React from 'react'
import { setLogout } from '../redux/features/authSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Error = () => {
    const dispatch=useDispatch()
    const handleLogout = () => {
        dispatch(setLogout());
        navigate('/')
      };
  return (
    <div className='Error'>
<div className="img-eeror">

</div>

<div className="home-btn">
    <Link to='/'>
    <button onClick={(e)=>handleLogout()} className="btn">
    home
</button>
    </Link>



</div>

    </div>
  )
}

export default Error