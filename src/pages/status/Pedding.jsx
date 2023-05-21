import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodos, rejectUser, updateTodo } from "../../redux/features/todosSlice";
import moment from "moment";
const Pedding = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
 
const [todo, setTodo] = useState({
    task: "",
    isComplete: false,
  });
  const [todoss, setTodos] = useState({
    task: "",
    status: false,
  });
  useEffect(() => {
  async function fetchData() {
  try {
  const res = await axios.get(`http://localhost:5000/stats/pending`);

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
  


  const todosState = useSelector((state) => state.todosState);
  const { todos } = todosState;

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      dispatch(updateTodo(todo));
    } 
    setTodo({
      task: "",
      isComplete: false,
    });
  };
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  
  const handleSubmits = (e) => {
    e.preventDefault();

    if (todo._id) {
      dispatch(rejectUser(todo));
    } 
    setTodos({
      task: "",
      status: false,
    });
  };
  return (
    <div className="pending">
      <Table striped bordered hover size="lg" style={{width:'100%'}}>
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
                  <td>{user.status==false && 'Pending'}</td>
                  <div className="pending-btns">
                  <button className="btn-admin" style={{ paddingTop: ".5rem" }}>Activate User</button>{" "}
 <button className="btn-admin" style={{ paddingTop: ".5rem" }}>Reject User</button>{" "}
   <button className="btn-admin" style={{ paddingTop: ".5rem" }}>send notification</button>{" "}
                  </div>
                 
                 

                 
                 
              
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
