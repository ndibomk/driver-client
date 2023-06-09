import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import ReviewForm from '../test/Reviess'
import Reviews from "../test/Reviews";
import {toast} from 'react-toastify'
import { useDispatch } from "react-redux";
const UserOrders = () => {
  function compare(a, b) {
    if (a?._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }
  const dispatch =useDispatch()
  const { id } = useParams();
  const [user, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://erytyu.onrender.com/products/userTours/${id}`
        );
res.data.sort(compare)
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://erytyu.onrender.com/users/${id}`);
        res.data.sort(compare)
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
const [form,setForm]=useState([])
console.log('form', form);
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      tell:products.tell,
      name:products.name,
      customer:user.name,
      address:user.address,
      phone:user.phone,
      
    }));
  }, []);
// const handleSubmit=(e)=>{
  // e.preventDefault()
  // dispatch(invoiceAdd({ ...form, toast }));
// 
  // console.log('form',form)
// }
  return (
    <div style={{ background: "rgb(241, 238, 238)" }}>
      <h2 style={{ background: "", textAlign: "center" }}>Pending Orders</h2>

      <div
        className="all-user-orders-det"
        style={{ background: "rgb(241, 238, 238)" }}
      >
        {user.map((user) => {
          return (
            <>
              <div className="main-user-orders">
                <div className="user-orders">
                  <div className="user-details">
                    <h5>Driver Naame {user.driverName}</h5>
                    <h5> Driver Phone {user.driverTell}</h5>
                  </div>
                  {/* <Reviews gigId={products._id}/> */}
                  {/* <ReviewForm productId={products._id}/> */}
                  <div className="custtomer-detaiils">
                    <h6>Customer name {user.name}</h6>
                    <h6>Customer phone {user.phone}</h6>
                    <h6>Customer address {user.address}</h6>
                  </div>
                </div>
                <div>
                  {" "}
                  <img src={user.picture} alt="" />
                </div>
                <div className="driver-cut">
                  <p>Driver cut: $0.00</p>
                  {/* {products._id} */}
                  <p>$0.00</p>
                  <div className="feedbacks">
                    {/* <form onSubmit={handleSubmit} action=""> */}
                    <Link to={`/invoice/${user._id}`}>
                    <button className="">Send invoice</button>

                    </Link>

                    {/* </form> */}
                    <Link to={`/feedback/${user._id}`}>
                      <button className="">Feedback</button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* feedback */}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default UserOrders;
