import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Pedding = () => {
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
        const res = await axios.get(`http://localhost:5000/stats/rejected`);

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
    <div className="pending">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th> User Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {users?.map((user) => {
              return (
                <>
                  <td>{user.name}</td>
                  <td>{user.email} {user.tell}</td>
                  <td>{user.status}</td>
                </>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Pedding;
