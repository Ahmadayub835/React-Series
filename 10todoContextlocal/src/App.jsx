import { useState, useEffect } from "react";
import { TodoProvider } from "./Context/Contexttodo";
import "./App.css";
import Todoform from "./Components/Todoform";
import Todoitem from "./Components/Todoitem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //addTodo is a function to add a new task to the list.
    setTodos((oldtodos) => [...oldtodos, { id: Date.now(), ...todo }]);
    //It uses the previous todos state (oldtodos) and adds a new task with a unique id and properties from the todo parameter.
  };

  //updateTodo is a function to update a task in the list based on its id
  const updateTodo = (id, todo) => {
    setTodos((prevVal) =>
      prevVal.map((eachVal) => (eachVal.id === id ? todo : eachVal))
    );
  };

  //deleteTodo is a function to remove a task from the list based on its id.
  const deleteTodo = (id) => {
    //It uses the previous todos state (prevVal) and filters out the task with the matching id.
    setTodos((oldtodos) => oldtodos.filter((todo) => todo.id !== id));
  };

  //toggleTodo is a function to toggle the completion status of a task based on its id.
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevValTodo) =>
        prevValTodo.id === id
          ? /* This is our true part and the next is false part.*/
            { ...prevValTodo, completed: !prevValTodo.completed }
          : prevValTodo
      )
    );
  };

  //This useEffect runs once when the component mounts.
  useEffect(() => {
    //It retrieves tasks from local storage and sets them as the initial state (todos) if they exist.
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //This useEffect runs whenever the todos state changes.
  useEffect(() => {
    //It updates local storage with the current state of todos.
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full bg-[lightslategray] max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <Todoform />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Todoitem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
