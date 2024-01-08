//This is the example of UseDispatch():-
import React from "react"
import { useState } from "react"
import {addTodo} from '../features/todo/Todoslice'
import { useDispatch } from "react-redux"

function Addtodo () {

  const [input, setInput] = useState('')

  const dispatch  = useDispatch() //This dipatch is used to send value from store.

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input)) //In dispatch function we had to call reducer
    setInput('') //This is used to clean the form that the user had filled. setInput clears the value that is written.
  }

  return (
    <form className="space-x-3 mt-12" onSubmit={addTodoHandler}>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Add Todo
      </button>
      </form>
  )

}

export default Addtodo