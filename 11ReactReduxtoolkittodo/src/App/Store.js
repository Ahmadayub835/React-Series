import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/Todoslice'

export const store = configureStore({
    reducer : todoReducer
})
//This store gives us all the value that we want

