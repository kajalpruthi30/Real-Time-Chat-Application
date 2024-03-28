import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
  return (
    <form className='flex justify-between py-2 px-4 '>
      <input type="text" placeholder='Search...' 
        className='w-[330px] input input-bordered rounded-full focus:outline-none' />
      <button type='submit' className='btn btn-circle text-black  hover:bg-white'>
        <IoSearchSharp className='w-6 h-6 outline-none hover:color-white'/>
      </button>
    </form>
  )
}

export default SearchInput
