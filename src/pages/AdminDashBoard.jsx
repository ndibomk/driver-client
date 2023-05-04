import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Pedding from "./status/Pedding";
import axios from "axios";

const AdminDashBoard = () => {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

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
        const res = await axios.get(`http://localhost:5000/stats/succes`);
        res.data.sort(compare);
        const result = res.data.filter((_, index) => index < 30);
        setUsers(res.data);
        console.log('user',users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  
  return (
    <div className="admin">
        <div className="table-content">
      <div className="table-control">
        
        <div className="admin-table">
          <div className={`my-button isActive ? 'active' : 'inactive'`}>
          <Link to='succes'>
          <h4>Active User</h4>
            </Link>  
          </div>

          <div className="line-admin"></div>
          <Link to='pending'>
          <h4>Pending User</h4>
          </Link>
          
          <div className="line-admin"></div>
          <Link to='rejected'>
          <h4>Inactive User</h4>

          </Link>
          <div className="line-admin"></div>
          <div className="btn-admin">
   <p style={{ paddingTop: ".5rem" }}>Save Changes</p>{" "}
 </div>
        </div>
        
        <Outlet/>
        </div>
       
        

      
 
 </div>
    </div>
  );
};

export default AdminDashBoard;
