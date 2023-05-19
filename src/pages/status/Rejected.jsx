import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Pedding = () => {
  // const usersData = [
  //   {
  //     name: "john doe",
  //     email: "john@gmail.com",
  //     status: "rejected",
  //     tell: "7575198515",
  //   },
  // ];

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
  const res = await axios.get(`https://erytyu.onrender.com/stats/rejected`);

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
    <div className="pending" style={{height:'23rem'}}>
      <Table striped bordered hover size="sm"  style={{width:'100%'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th> User Status</th>
          </tr>
        </thead>
        {users?.map((user) => {
              return (
                <>
        <tbody>
          <tr>
            
                  <td>{user.name}</td>
                  <td>
                    {user.email} {user.tell}
                  </td>
                  <td>{user.isComplete ==='true'&& 'Rejected'}</td>
                 
                    <button className="btn-admin" style={{ paddingTop: ".5rem" }}>send notification</button>{" "}
                 
              
          </tr>
        </tbody>
        </>
              );
            })}
      </Table>
    </div>
  );
};

export default Pedding;
