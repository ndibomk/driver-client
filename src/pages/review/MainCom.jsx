import { useState } from "react";
import AddTodo from "./CommentAdd";
import ListTodos from "./Comment";




const Appp = () => {
  const [todo, setTodo] = useState({
    comment: "",
    isComplete: false,
   
  });

  return (
    <div className="Appp">
      <h2>Todo Appp</h2>
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodos setTodo={setTodo} />
    </div>
  );
};

export default Appp;
