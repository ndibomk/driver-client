import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import moment from "moment";
import { deleteTodo, getTodos, todosAdd, updateReview } from "../../redux/features/todo";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

const ListTodos = () => {
  const [todo, setTodo] = useState({
    task: "",
    isComplete: false,
   
  });
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);
  const { todos } = todosState;


  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      dispatch(updateReview(todo));
    } 

    // setTodo({
    //   task: "",
    //   isComplete: false,
    // });
  };
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
        const res = await axios.get(`https://erytyu.onrender.com/api/review`);

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
          <h3>{todo.task == "" && <> No reviews </>}</h3>

          <h3>
            {todo.task == 1 && (
              <>
                {" "}
                <AiFillStar />{" "}
              </>
            )}
          </h3>

          <h3>
            {todo.task == 2 && (
              <>
                {" "}
                <AiFillStar /> <AiFillStar />{" "}
              </>
            )}
          </h3>
          <h3>
   {todo.task == 3 && (
     <>
       {" "}
       <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
     </>
   )}
 </h3>
 <h3>
   {todo.task == 4 && (
     <>
       {" "}
       <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
     </>
   )}
 </h3>
 <h3>
   {todo.task == 5 && (
     <>
       {" "}
       <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
     </>
   )}
 </h3>

 <form onSubmit={handleSubmit}>
 <select 
       
       onChange={(e) => setTodo({ ...todo, task: e.target.value })}>
        <option value="rating">Rate here</option>
<option type='number' value='1'>1-Owawful </option>
<option type='number' value='2'>2-bad </option>
<option type='number' value='3'>3-Average</option>
<option type='number' value='4'>4-Good </option>
<option type='number' value='5'>5-Excellent </option>
       </select>
        {/* <input
          type="number"
          placeholder="Enter a task"
          // value={todo.task}
          onChange={(e) => setTodo({ ...todo, task: e.target.value })}
        /> */}
        <br />
        <button
          type="submit"
          // onClick={() => setTodo({ ...todo })}

          variant="contained"
          size="small"
          sx={{
            margin: "0.9rem 0rem",
            fontFamily: "'Abel', 'sansSerif'",
          }}
        >
          
            Send
          
        </button>
      </form>
          {/* <button
            variant="outlined"
            size="small"
            onClick={() => setTodo({ ...todo })}
            sx={{
              fontFamily: "'Abel', 'sansSerif'",
            }}
          >
            Update
          </button> */}
          {/* <button
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
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default ListTodos;
