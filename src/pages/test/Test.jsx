import { useDispatch, useSelector } from "react-redux";
import { todosAdd, updateTodo } from "../../redux/features/todosSlice";
// import "../App.css";

const AddTodo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);

  const handleSubmit = (e) => {
    e.preventDefault();

    
      const newTodo = {
        ...todo,
        date: new Date(),
      };

      dispatch(todosAdd(newTodo));
    

    setTodo({
      task: "",
      isComplete: false,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={todo.task}
          onChange={(e) => setTodo({ ...todo, task: e.target.value })}
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
         
            "Add Task"
         
        </button>
       
      </form>
    </>
  );
};

export default AddTodo;
