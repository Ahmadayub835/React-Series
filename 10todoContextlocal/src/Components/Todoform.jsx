import React, { useState } from "react";
import { useTodo } from "../Context/Contexttodo";

function Todoform() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault(); //iT Checks if the todo variable is empty. If it is, the function returns early, ensuring that an empty todo is not added.
    if (!todo) return;
    {
      addTodo({ todo, completed: false }); // Calls the addTodo function from the context, passing an object with the todo and completed properties. It adds a new todo to the list.
      setTodo("");
    }
  };
  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default Todoform;
