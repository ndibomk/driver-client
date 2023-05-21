import { useState } from "react";
// import AddTodo from "./components/AddTodo";
// import ListTodos from "./components/ListTodos";

import Test from "./Test";
import Todo from "./Todo";

const App = () => {
  const [todo, setTodo] = useState({
    task: "",
    isComplete: false,
  });
  const [todos, setTodos] = useState({
    // task: "",
    isComplete: false,
  });
  return (
    <div className="App">
      <h2>Todo App</h2>
      <Test todo={todo} setTodo={setTodo} />
      <Todo todo={todo} setTodo={setTodo}/>
      {/* <AddTodo todo={todo} setTodo={setTodo} />  */}
      {/* <ListTodos setTodo={setTodo} /> */}
    </div>
  );
};

export default App;