import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Pedding from "./status/Pedding";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminDashBoard = () => {
  const [isActive, setIsActive] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));

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
  const [users, setUsers] = useState([]);
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
        setUsers(res.data);
        console.log("user", users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="admin">
      <div className="trapezoid"></div>

      <div className="table-content">
        <Link to="/analytics">
          <button className="admin-analytics">Analytics</button>
        </Link>

        <div className="table-control">
          <div className="set">
            <div style={{ paddingLeft: "2px" }} className="admin-table">
              <div className={`my-button isActive ? 'active' : 'inactive'`}>
                <Link style={{ textDecoration: "none" }} to="/admin">
                  <h4>Active Users</h4>
                </Link>
              </div>

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
  );
};

export default AdminDashBoard;
