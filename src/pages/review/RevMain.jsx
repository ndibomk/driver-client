import { useState } from "react";
import AddTodo from "./Review";
import ListTodos from "./ReviewsAdd";


const App = () => {
  const [todo, setTodo] = useState({
    task: "",
    isComplete: false,
   
  });

  return (
    <div className="App">
      <h2>Todo App</h2>
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodos todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
