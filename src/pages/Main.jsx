import React, { useEffect, useState } from "react";
import ExpenseTracker from "./Draw";
import { useSelector } from "react-redux";
import AdminDashBoard from "./AdminDashBoard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tests from "./Tests";
import { toast } from "react-toastify";
// import {image} from '../assets/image.jpg'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import runOneSignal from "./test/OneSignal";
import MyComponent from "../Modal";
import Review from "./test/Review";
// import App from "./review/RevMain";
import Appp from "./review/MainCom";
import Not from "../Not";
import App from "./quiz/App";
import Driver from "./Driverdas";
const Main = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  console.log(user);
  const [expenses, setExpenses] = useState([
    { description: "Groceries", amount: 60 },
    { description: "Gas", amount: 70 },
    { description: "Dinner", amount: 20 },
    { description: "fare", amount: 38 },
  ]);
  const budget = 300;
  useEffect(() => {
    runOneSignal();
  });
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, setUsers] = useState([]);
  const id = user?.result?._id;
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://erytyu.onrender.com/products/userTours/${id}`
        );

        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
const navigate=useNavigate()
  // if(user?.result?.role === "admin") {
    // navigate('/admin')
  // } if(user?.result?.role === "driver") {
  //  return <Driver/>
  // }else{
    // navigate('/')
  // }

  return(
    <>
    {/* {user?.result?.role } */}
    <Driver/>
    </>
  )
};

export default Main;
