import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, edit, toggleTodo } from '../../../redux/slice/todoSlice'


const TodoItem = ({item}) => {
  const dispatch = useDispatch()
  const [isEditing,setIsEditing] = useState(false)
  const [editTodo,setEditTodo] = useState(item.text)
  
  function handleEdit(id,text){
    if(editTodo == ''){
      console.log('empty');
    }
    else{
      dispatch(edit({id,text}));
      setIsEditing(false)
    }
  }
  return (
    <div className='flex mx-auto mt-6 justify-between items-center bg-gray-500 p-3 rounded-md w-3/4' role='list-item'>
      <div className='flex justify-center items-center'>
    {isEditing?(
      <input type="text" value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}}/>
      ):    
      ( 
        <>
        <input className='self-center mt-1'  type="checkbox" checked={item?.done} onChange={()=>{dispatch(toggleTodo(item?.id))}} />
        <p className='text-base ml-1' id={item.done ===true?'done':''}>{item?.text}</p>
        </>
       )
    }
      </div>
      <div className='flex items-center'>
        {isEditing?(
          <>
          <button className='w-16 text-center text-white rounded-xl bg-gray-900 p-1' onClick={()=>{handleEdit(item.id,editTodo)}}>Save</button>
          <button className='w-10 text-center text-white ml-2 rounded-xl bg-gray-900 p-1 ' onClick={()=>{setIsEditing(false)}}>X</button>
          </>
        ):(
          <>
       <button className='w-16 text-center text-white rounded-xl bg-gray-900 p-1' onClick={()=>{setIsEditing(true)}}>Edit</button>
       <button className='w-10 text-center text-white ml-2 rounded-xl bg-gray-900 p-1 ' onClick={()=>{dispatch(deleteTodo(item?.id))}}>X</button>
          </>
        )
        }
      </div>
    </div>
  )
}

export default TodoItem
