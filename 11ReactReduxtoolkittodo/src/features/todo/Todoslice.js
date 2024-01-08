import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos :  [{id : 1, text : 'Hello world'}]
}

export const todoSlice = createSlice({
    name : 'todo',  //this name is the official name in the create slice it cannot be changed
    initialState, //this is the initial state above metioned.
    reducers : {
        addTodo : (state , action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
        }, //state and actions are by default.
        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }, //Reducers consist of properties and functions.
        updateTodo : (state, action) =>{
            const updatedTodo = action.payload
            state.todos = state.todos.map((todo) =>{
                todo.id === updatedTodo.id ? updatedTodo : todo
            })
        },
    }
})

//In this we had to import all the reducers.
export const {addTodo , removeTodo , updateTodo}  = todoSlice.actions
//we had to export this reducer because we had to use it on our main store.
export default  todoSlice.reducer
