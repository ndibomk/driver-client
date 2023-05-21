import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../redux/features/todosSlice";
import moment from "moment";
import { Table } from "react-bootstrap";

const ListTodos = () => {
  const [todo, setTodo] = useState({
   
    isComplete: false,
  });
  const [todoss, setTodos] = useState({
    task: "",
    status:false,
  });
  const dispatch = useDispatch();
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
    <>
      <div className="pending">
        
       
      
        <div className="top">
          <h5>Name</h5>
          <h5>Contact</h5>
          <h5>Status</h5>
        </div>
        <div className="pending-line"></div>
        {/* <h2> You have {todos && todos.length} tasks </h2> */}
        {todosState.getTodosStatus === "pending" ? "loading" : null}
        {todos.map((todo) => (
          <div className="pending-items" key={todo._id}>
            <h6>{todo.name}</h6>
            <h6>
              {todo.email} {todo.tell}{" "}
            </h6>
            <h6>{todo.isComplete === true ? "Active" : "Pending"}</h6>

            <form onSubmit={handleSubmit} className="pending-btns">
              <button className="btn-admin" type="submit" onClick={() => setTodo({ ...todo })}>
               <h6 style={{}}>Activate user</h6> 
              </button>
              <button  onClick={() => setTodos({ ...todoss })} className="btn-admin" ><h6>Reject User</h6> </button>{" "}

              <button className="btn-admin" > <h6>Send notification</h6> </button>{" "}

              
            </form>

            <form onSubmit={handleSubmits} action="">

            </form>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListTodos;
