import React, { useState } from "react";
import ExpenseTracker from "./Draw";
import { useSelector } from "react-redux";
import AdminDashBoard from "./AdminDashBoard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tests from "./Tests";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
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

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {user?.result?.role === "admin" ? (
        <>
          <AdminDashBoard />
        </>
      ) : (
        <>
         
          <div className="Main">
            <div className="main-dash">
              <div className="main-top">
                <h1>Welcome </h1>
              </div>
              <div className="Middle">
                <div className="middle-left">
                  <h3>Today's Profit</h3>
                  <h1>$448</h1>
                </div>
                <div className="middle-right">
                  <h3>30 Today's Profit</h3>
                  <h1>${448 * 30}</h1>
                </div>
              </div>
              <div className="main-middle">
                {user?.result?.status === "succes" ? (
                  <>
                    <Tests />

                    {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>
                          Stand by while we review your application
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Woohoo, you are reading this text in a modal!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                ) : (
                  ""
                )}

                <div className="status-draw">
                  <div className="pi">
                    <p>
                      <span style={{ fontSize: "2rem", fontWeight: "800" }}>
                        Current Rate:{" "}
                      </span>{" "}
                      <span
                        style={{
                          height: "5rem",
                          borderRadius: "1px",
                          background: "grey",
                          width: "5rem",
                          textAlign: "center",
                        }}
                      >
                        5%
                      </span>
                      & <span
                      style={{
                        height: "17rem",
                        borderRadius: "1px",
                        background: "grey",
                        width: "5rem",
                        textAlign: "center",
                      }}
                      >$2</span>{" "}
                      <span
                        style={{
                          textAlign: "center",
                          fontSize: "1.4rem",
                          fontWeight: 100,
                        }}
                      >
                        Next boost in 30 orders
                      </span>
                    </p>
                  </div>
                </div>
                <div className="sttus-content">
                  <h4>
                    Your current rate means you will make an estimate{" "}
                    <span>$00</span> per order + tips{" "}
                  </h4>
                </div>
              </div>
              <div className="main-bottom">
                <Link to="/orders">
                  <button  className="order-button">
                    <h1 style={{marginTop:'',textAlign:'center'}}>New Order</h1>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Main;
