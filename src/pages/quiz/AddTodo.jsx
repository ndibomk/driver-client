import { useDispatch, useSelector } from "react-redux";
import { todosAdd, updateReview } from "../../redux/features/quizSlice";
// import { button, Alert, CircularProgress } from "@mui/material";
// import "../App.css";

const AddTodo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      dispatch(updateReview(todo));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };

      dispatch(todosAdd(newTodo));
    }

    setTodo({
     
      quiz:"",
      isComplete: false,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={todo.quiz}
          onChange={(e) => setTodo({ ...todo, quiz: e.target.value })}
        />
        <br />
        <button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            margin: "0.9rem 0rem",
            fontFamily: "'Abel', 'sansSerif'",
          }}
        >
          {todosState.addTodoStatus === "pending" ||
          todosState.updateTodoStatus === "pending"
            ? "loading"
            : todo._id
            ? "Update Task"
            : "Add Task"}
        </button>
      </form>
    </>
  );
};

export default AddTodo;
