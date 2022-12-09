import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { search, updateFilterStatus } from '../../../redux/slice/todoSlice'


const Filter = () => {
  const dispatch = useDispatch()
  const filterStatus = useSelector((state)=>state.filterStatus)
  const searchFilter = useSelector ((state)=>state.search)
  
  
function handleChange(e){
  dispatch(updateFilterStatus(e.target.value))
}

  return (
    <div className='flex justify-center'>
        <div className='mr-2 small:w-1/2 ml-2 medium:w-full'>
            <input className='p-1 w-full' type="text" placeholder='Search...' value={searchFilter} onChange={(e)=>{dispatch(search(e.target.value))}}  />
        </div>
        <div className='mr-3 small:w-1/4 medium:w-1/2'>
         <select  name="" id="" value={filterStatus} onChange={handleChange}>
          <option value="all">All</option>
          <option value="true">Done</option>
          <option value="false">Not Done</option>
         </select>
        </div>
    </div>
  )
}

export default Filter