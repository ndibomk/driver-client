import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { HashLink as Link } from 'react-router-hash-link'
import { useForm,ValidationError } from '@formspree/react'
import {
  deleteTodo,
  getTodos1,
  rejectUser,
  updateTodo,
} from "../../redux/features/todosSlice";
import moment from "moment";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ListTodos = () => {
  const [todo, setTodo] = useState({
    status: false,
    isComplete: false,
  });

  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);
  const { todos } = todosState;

  useEffect(() => {
    dispatch(getTodos1());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    window.alert("are sure  you want to temporarily deactivate  this user");

    if (todo._id) {
      dispatch(updateTodo(todo));
      navigate("/admin/rejected");
    }
    setTodo({
      isComplete: false,
      status: false,
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTodos1());
  }, [dispatch]);

  const handleDelete1 = (id) => {
    dispatch(deleteTodo(id));
    navigate('/admin')
  };
  const handleSubmit1 = (e) => {
    // e.preventDefault();
    window.alert("are sure  you want to activate this user");
    if (todo._id) {
      dispatch(rejectUser(todo));
      navigate("/admin/rejected");
    
    }
    setTodo({
      isComplete: false,
      status: false,
    });
  };

  return (
    <>
      <div className="pending">
        <div className="top">
          <h5>Name</h5>
          <h5>Contact</h5>
          <h5>Status</h5>
        </div>
        <div className="pending-line"></div>
        {/* <h2> You have {todos && todos.lengh} tasks </h2> */}
        {todosState.getTodosStatus === "pending" ? "loading" : null}
        {todos.map((todo) => (
          <div className="pending-items" key={todo._id}>
                      <Link style={{textDecoration:'none'}} to={`/user/${todo._id}`} >

          <h6>{todo.name}</h6>
          </Link> 
          <Link style={{textDecoration:'none'}} to={`/user/${todo._id}`} >

            <h6>
              {todo.email} {todo.tell}{" "}
            </h6>
            </Link>
            <h6>{todo.isComplete === true ? "Active" : "Pending"}</h6>
            

            <form onSubmit={handleSubmit1} className="pending-btns">
              {todosState.getTodosStatus === "pending" ? "loading" : null}
              
            </form>
            <form
              style={{ marginRight: ".6rem" }}
              onSubmit={handleSubmit}
              className="pending-btns"
            >
              <button
                className="btn-admin"
                type="submit"
                onClick={() => setTodo({ ...todo })}
              >
                <h6 style={{}}>Deactivate user</h6>
              </button>
              
              
              
              
              
              {/* <button  onClick={() => setTodos({ ...todoss })} className="btn-admin" ><h6>Reject User</h6> </button>{" "} */}
              <button
                className="btn-admin"
                type="submit"
                onClick={() => handleDelete(todo._id)}
              >
                <h6 style={{}}>Remove a user</h6>
              </button>
            </form>
            <Link to={`/forget/${todo._id}`}>

            
            <button className="btn-admin">
  {" "}
  <h6>Send notification</h6>{" "}
</button>{" "}
</Link>

            {/* <form onSubmit={handleSubmits} action="">
              <button
                className="btn-admin"
                type="submit"
                onClick={() => setTodo({ ...todo })}
              >
                <h6 style={{}}>Reject user</h6>
              </button>
            </form> */}
            <div className="line-sep"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListTodos;
