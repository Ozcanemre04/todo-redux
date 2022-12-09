import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllDoneTodo } from '../../redux/slice/todoSlice'

import TodoItem from './TodoItem/TodoItem'


const TodoList = () => {
  const dispatch = useDispatch()
  const todo = useSelector((state)=>state.todoList)
  const filterStatus = useSelector((state)=>state.filterStatus)
  const searchFilter = useSelector ((state)=>state.search)

  const filteredTodo = todo?.filter((item)=>{
    if(filterStatus ==='all'){
      return true
    }
    else{
      const parsedFilterStatus = JSON.parse(filterStatus)
      return item.done === parsedFilterStatus
    }
  })
 
  const filterByText = filteredTodo?.filter((item)=>{
      if(searchFilter ===''){
        return filteredTodo
      }
     else{
      const lowerCaseSearch = searchFilter.toLowerCase()
      return item.text.toLowerCase().startsWith(lowerCaseSearch)
     }
  })
  

  return (
    <section className='mx-auto small:w-full medium:w-1/2' role='item-container'>
      {filterByText?.map((item)=>(
        <TodoItem key={item.id} item={item} data-testid="list-item"/>
      ))}
      <button onClick={()=>{dispatch(deleteAllDoneTodo())}} className='flex mx-auto p-3 rounded-xl mt-6 justify-center text-white bg-gray-900 w-3/4'>Delete All Done</button>
    </section>
  )
}

export default TodoList
