import { useContext, createContext } from "react";

export const todoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo title",
      completed: false, //We said what is it by default , like checked or unchecked.
    }, //This is a field that we can add as like as functionality
  ], //These are all the functions that will work on our todo app.

  addTodo: (todo) => {}, //This is to make the new addtodo.
  updateTodo: (id, todo) => {}, //This is used to update and to make a new name of todo. so we used the id of the todo.
  deleteTodo: (id) => {}, //This is for delete thus,we get todo because we want to get the id of the todo.
  toggleTodo: (id) => {}, //It is the check box in the todo app.
});

export const useTodo = () => {
  return useContext(todoContext);
};

export const TodoProvider = todoContext.Provider;
