import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import ReviewForm from '../test/Reviess'
import Reviews from '../test/Reviews'

const UserOrders = () => {
  const {id}=useParams()
  const [user,setUsers]=useState([])
  useEffect(()=>{
    async function fetchData(){
    try {
      
      const res= await axios.get(`https://erytyu.onrender.com/products/userTours/${id}`)
     
      setUsers(res.data)
      console.log('data',res.data);
     } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])

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
    <div style={{background:'rgb(241, 238, 238)'}}>
    <h2 style={{background:'',textAlign:'center'}}>Pending Orders</h2>
    
    <div className='all-user-orders-det' style={{background:'rgb(241, 238, 238)'}}>
      
      {user.map((user)=>{
        return(
          <>
         <div className="main-user-orders">
          

           
          <div className="user-orders">
            <div className="user-details">
<h5>Driver Name {products.name}</h5>
<h5> Driver Phone{products.tell}</h5>
            </div>
            {/* <Reviews gigId={products._id}/> */}
            {/* <ReviewForm productId={products._id}/> */}
            <div className="custtomer-detaiils">
            <h6>Customer name {user.name}</h6>
            <h6>Customer phone {user.phone}</h6>
            <h6>Customer address {user.address}</h6>
            </div>
          </div>
          

          <div className="driver-cut">
            <p>Driver cut: $0.00</p>
            <p>$0.00</p>
            <div className="feedbacks">
            <button className="">Sendd invoice</button>
            <Link to={`/feedback/${products._id}`}>
            <button className="">Feedback</button>

            </Link>
            </div>
           

          </div>
          
         </div>
         
         {/* feedback */}
          </>
        )
      })}
    </div>
    </div>
  )
}

export default UserOrders