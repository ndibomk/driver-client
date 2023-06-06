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
    <>
       <h3 style={{color:'white' ,textAlign:'center',marginTop:'1rem'}}>Driver Profile</h3>
    <div className='single-user'>
   
        <div className="user-content">
     <div className="user-data">
      <div className='item-user'><p>Name :</p> <p>{products.name}</p> </div>
        <div className='item-user'><p>Email : </p> <p>{products.email}</p></div>
        <div className='item-user'><p>Phone  : </p> <p>{products.tell}</p></div>
        <div className='item-user'>  <p>Zip code  :</p> <p>{products.tell}</p> </div>
       
        <div className="password-rest">
    {/* <button style={{width:'12rem'}} className="btn">Reset password </button> */}
    <Link to={`/orders/${products._id}`}>
    <button style={{width:'12rem'}} className="btn">
       Orders 
    </button>
    </Link>
    
</div>
     </div>

</div>
    </div>
    </>
  )
}

export default SingleUser