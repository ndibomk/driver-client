import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import { deleteTodo, getTodos } from "../../redux/features/quizSlice";

const ListTodos = ({ setTodo }) => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);
  const { todos } = todosState;

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h2> You have {todos && todos.length} tasks </h2>
      {todosState.getTodosStatus === "pending" ? 'loading': null}
      {todos.map((todo) => (
        <div
          variant="outlined"
          sx={{
            padding: "0.7rem",
            marginBottom: "2rem",
          }}
          key={todo._id}
        >
          <h3>{todo.quiz}</h3>
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
