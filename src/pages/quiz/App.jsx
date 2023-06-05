import { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";

// import "./App.css";

const App = () => {
  const [todo, setTodo] = useState({
    quiz:'',
    isComplete: false,
  });

  return (
    <div style={{color:'white'}} className="App">
      <h2>Todo App</h2>
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodos setTodo={setTodo} />
    </div>
  );
};

export default App;
