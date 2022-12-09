import React from 'react'
import { useState } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slice/todoSlice';




const AddTodo = () => {
    const[todoInput,setTodoInput] = useState("")
    const dispatch =useDispatch()

    function handleSubmit(e){
      e.preventDefault();
      if(todoInput ==''){
        console.log('empty');
      }
      else{
        dispatch(addTodo(todoInput))
        setTodoInput("")
      }
    }
    
  return (
    <div className=' mx-auto pt-10 small:w-full medium:w-1/2'>
      <form onSubmit={handleSubmit} className='mx-auto  flex justify-center w-3/4'>
     <input className='p-2 w-3/4 rounded-l-md' type="text" value={todoInput} onChange={(e)=>{setTodoInput(e.target.value)}} role="todoInput" /> 
     <button className='w-1/4 text-center text-white bg-gray-900 p-2 rounded-r-md' type='submit' role="Add">Add</button>
      </form>
    </div>
  )
}

export default AddTodo