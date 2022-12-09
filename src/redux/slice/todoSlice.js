import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';

export const initialState ={
 todoList:[],
 filterStatus : 'all',
 search :''
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTask={
                id:uuidv4(),
                done:false,
                text:action.payload
            }
            state.todoList.push(newTask)
        },
        toggleTodo:(state,action)=>{
           const todo = state.todoList.find(t=>t.id === action.payload)
           todo.done = !todo.done
           
        },
        deleteTodo:(state,action)=>{
            state.todoList= state.todoList.filter(t=>t.id !== action.payload)  
        },
        deleteAllDoneTodo:(state,action)=>{
              state.todoList= state.todoList.filter(t=>t.done !==true)
        },
        edit:(state,action)=>{
           const editTodo = state.todoList.find(t=>t.id===action.payload.id)
           editTodo.text = action.payload.text
          
        },
        search:(state,action)=>{
             state.search =action.payload
            
        },
       
        updateFilterStatus:(state,action)=>{
            state.filterStatus = action.payload
        }
       
        
    }
})

export const {addTodo , toggleTodo ,deleteTodo,deleteAllDoneTodo,edit,search,updateFilterStatus} = todoSlice.actions
export default todoSlice.reducer