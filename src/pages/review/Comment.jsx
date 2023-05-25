import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { deleteTodo, getTodos } from "../../redux/features/commentSlice";

const ListTodos = ({ setTodo }) => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);
  const { todos } = todosState;
  console.log("todod", todos);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    // alert('are sure you want to delete this ')
    dispatch(deleteTodo(id));
  };

  const [products, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://erytyu.onrender.com/api/comment`);

        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2> You have {products && products.length} tasks </h2>
      {/* {todosState.getTodosStatus === "pending" ? "loading" : null} */}
      {products.map((todo) => (
        <div
          variant="outlined"
          sx={{
            padding: "0.7rem",
            marginBottom: "2rem",
          }}
          key={todo._id}
        >
          <h3>{todo.comment}</h3>

          <p>Added: {moment(todo.date).fromNow()}</p>
          <button
            variant="outlined"
            size="small"
            onClick={() => setTodo({ ...todo })}
            sx={{
              fontFamily: "'Abel', 'sansSerif'",
            }}
          >
            Update
          </button>
          <button
            variant="contained"
            color="secondary"
            size="small"
            sx={{
              marginLeft: "0.7rem",
              fontFamily: "'Abel', 'sansSerif'",
            }}
            onClick={() => handleDelete(todo._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTodos;
