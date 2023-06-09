import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Main from './Main'
import AdminDashBoard from './AdminDashBoard'
const MainSep = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>({...state.auth}))
  useEffect(()=>{
    if(user?.result?.role ==="admin") {
        navigate('/main')
    }if(user?.result?.role ==="driver"){
        navigate('/dashboard')
    }else{
        navigate('/')
    }
  },[])
   return(
    <>
{user?.result?.role ==="admin" && <>
<AdminDashBoard/>
</> } 
{user?.result?.role ==="driver" && <>
<Main/>
</> } 
    </>
   )
}

export default MainSep