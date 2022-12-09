import React from 'react'
import Filter from './Filter/Filter'


const Header = () => {
  return (
    <header className='w-full h-20  bg-slate-800  small:flex flex-column justify-center items-center medium:flex flex-row justify-between items-center'>
        <h1 className='ml-2 text-white text-center small:text-base mb-2 medium:text-3xl'>Todo</h1>
        <Filter/>
    </header>
  )
}

export default Header