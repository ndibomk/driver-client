import React, { useEffect, useState } from "react";
import ExpenseTracker from "./Draw";
import { useSelector } from "react-redux";
import AdminDashBoard from "./AdminDashBoard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tests from "./Tests";
import { toast } from "react-toastify";
// import {image} from '../assets/image.jpg'
import { Link } from "react-router-dom";
import axios from "axios";
import runOneSignal from './test/OneSignal';
import MyComponent from "../Modal";
import Home from './Home'
import Review from "./test/Review";
// import App from "./review/RevMain";
import Appp from "./review/MainCom";
import Not from "../Not";
import App from "./quiz/App";
import { Table } from "react-bootstrap";
import {  Outlet } from "react-router-dom";
import Pedding from "./status/Pedding";
// import { useSelector } from "react-redux";

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
  })
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

  const [isActive, setIsActive] = useState(false);
  // const { user } = useSelector((state) => ({ ...state.auth }));

  function handleClick() {
    setIsActive(!isActive);
  }
  const [todo, setTodo] = useState({
    task: "",
    isComplete: false,
  });
  const [todos, setTodos] = useState({
    // task: "",
    isComplete: false,
  });
  const [userss, setUserss] = useState([]);
  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://erytyu.onrender.com/stats/succes`);
        res.data.sort(compare);
        const result = res.data.filter((_, index) => index < 30);
        setUserss(res.data);
        console.log("user", users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);



// useEffect(()=>{
if(user?.result?.role === "admin"){
  navigate('/admin')
}
  
      if(user?.result?.role ==="admin") {
        return (
        
          <div className="admin">
          <div className="trapezoid"></div>
    
          <div className="table-content">
            <div className="admin-btns">
              <Link to="/analytics">
                <button className="admin-analytics">Analytics</button>
              </Link>
              <Link to="/active-orders">
                <button style={{ width: "10rem" }} className="admin-analytic">
                  Active Orders
                </button>
              </Link>
            </div>
    
            <div className="table-controls">
              <div className="set">
                <div style={{ paddingLeft: "2px" }} className="admin-table">
                  <Link style={{ textDecoration: "none" }} to="/admin">
                    <h4>Active Users</h4>
                  </Link>
                 
    
                  <div className="line-admin"></div>
                  <Link style={{ textDecoration: "none" }} to="pending">
                    <h4>Pending Users</h4>
                  </Link>
    
                  <div className="line-admin"></div>
                  <Link style={{ textDecoration: "none" }} to="rejected">
                    <h4>Inactive Users</h4>
                  </Link>
                  {/* <div className="line-admin"></div> */}
                </div>
                <div className="btn-admin1">
                  <p style={{ paddingTop: ".5rem" }}>Save Changes</p>{" "}
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
        
        )
      }if(user?.result?.role === "driver"){
        return (
          <div className="Main">
            {/* <Not/> */}
            <div className="main-dash">
              <div className="main-top" >
                {/* <App/> */}
                {/* <App/> */}
                <h3 style={{marginBottom:'2rem',marginLeft:'.3rem', marginTop:''}}>
                  Welcome 
                  {/* {user?.result?.status === false && */}
                   { user?.result?.isComplete === true && (
                      <> {user?.result?.name}</>
                    )}{" "}
                </h3>
              </div>

              <div style={{marginLeft:'.7rem',marginRight:'.5rem'}} className="Middle">
                <div className="middle-left">
                  <h3>Today's Profit</h3>
                  <h1> ${(((5)/100)*35).toFixed(1)}</h1>
                </div>
                <div className="middle-right">
                  <h3>30 Today's Profit</h3>
                  <h1>${(((5)/100)*35 *30).toFixed(1)}</h1>
                </div>
              </div>
              <div className="main-middle">
                {user?.result?.isComplete === false &&
                  user?.result?.status === false && (
                    <>
                      <Tests />

                      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
                      <div style={{ paddingTop: "3rem" }}>
                        <Modal
                          style={{ paddingTop: "9rem" }}
                          show={show}
                          onHide={handleClose}
                          backdrop="static"
                          keyboard={false}
                        >
                          <Modal.Header>
                            <Modal.Title>
                              Stand by while we review your application
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <h6>
                              Woohoo, you are reading this text in a modal!
                            </h6>
                            <h6>
                              We will be in touch with you soon regarding the
                              status of your application{" "}
                            </h6>
                            <h6>
                              If approved you will be invited to participate an
                              interview drive.
                            </h6>
                          </Modal.Body>
                          {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button> */}
                          {/* </Modal.Footer> */}
                        </Modal>
                      </div>
                    </>
                  )}
                {user?.result?.status === true &&
                user?.result?.isComplete === false ? (
                  <>
                    <div
                      class="modal"
                      data-bs-backdrop="static"
                      style={{ paddingTop: "3rem" }}
                    >
                      <Modal
                        style={{
                          // height: "5rem",
                          paddingTop: "9rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header></Modal.Header>
                        <Modal.Body>
                          <h4> Account Deactivated</h4>
                          <h6>
                            Your application has been denied your accont has
                            been deactivated
                          </h6>
                          <div></div>
                        </Modal.Body>
                        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button> */}
                        {/* </Modal.Footer> */}
                      </Modal>
                    </div>
                  </>
                ) : (
                  ""
                )}

                {user?.result?.isComplete === true &&
                user?.result?.status === false ? (
                  <div style={{ paddingTop: "3rem" }}>
                    <MyComponent />
                  </div>
                ) : (
                  ""
                )}

                <div className="status-draw"  >
                  <div className="exp">
                    <img
                      className=""
                      style={{ width: "" }}
                      src="https://res.cloudinary.com/pitz/image/upload/v1685089411/d378c943-1b8e-408f-838a-28e6d1259a85_vjlphz.jpg"
                      alt=""
                    />
                    <h2>Current Rate:</h2>
                    <h5>{(((users.length)/100)*35).toFixed(1)}% & ${(((users.length)/100)*35 *30).toFixed(1)} </h5>
                    <h3>Top 30%</h3>
                  </div>

                  <div className="pi">
                    <h5
                      style={{
                        textAlign: "center",
                        fontSize: "1.4rem",
                        fontWeight: 100,
                        marginTop: "2rem",
                      }}
                    >
                      Next boost in 30 orders
                    </h5>
                    <h4
                      style={{
                        textAlign: "center",
                        fontSize: "1.4rem",
                        fontWeight: 100,
                        marginTop: "1rem",
                      }}
                    >
                      Your current rate means you will make an estimate{" "}
                      <span>$00</span> per order + tips{" "}
                    </h4>
                  </div>
                </div>
                <div className="sttus-content"></div>
              </div>

              <div className="main-bottom">
                {/* {user?.result?.status === false && */}
                  {user?.result?.isComplete === true && (
                    <Link to="/orders">
                      <button className="order-button">
                        <h1 style={{ marginTop: "", textAlign: "center" }}>
                          New Order
                        </h1>
                      </button>
                    </Link>
                  )}
              </div>
            </div>
          </div>
        )
  
    
                  }else{
                   return(
                    <div>
                      <Home/>
                    </div>
                   )
                  }
};

export default Main;
