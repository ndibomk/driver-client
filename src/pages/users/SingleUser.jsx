import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const SingleUser = () => {
    const {id}=useParams()
    const [user,setUsers]=useState([])
  const [products,setProduct]=useState([])

  useEffect(()=>{
    async function fetchData(){
    try {
      
      const res= await axios.get(`https://erytyu.onrender.com/users/${id}`)
     
      setProduct(res.data)
      
     } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])
      

  return (
    <div className='single-user'>
        <div className="user-content">
     <div className="user-data">
        <p>Name : {products.name}</p>
        <p>Email : {products.email}</p>
        <p>Phone  : {products.tell}</p>
        <p>Zip code  : {products.tell}</p>
        <div className="password-rest">
    <button style={{width:'12rem'}} className="btn">Reset password </button>
    <Link to={`/orders/${products._id}`}>
    <button style={{width:'12rem'}} className="btn">
       Orders 
    </button>
    </Link>
    
</div>
     </div>

</div>
    </div>
  )
}

export default SingleUser