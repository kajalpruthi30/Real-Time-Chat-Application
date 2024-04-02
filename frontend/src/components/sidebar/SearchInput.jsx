import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

function SearchInput({setSearch}) {

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className='flex justify-between py-2 px-4'>
      <input
        type='text'
        placeholder='Search...'
        className='w-full pl-8 input input-bordered rounded-full focus:outline-none'
        onChange={handleChange}
      />
      <IoSearchSharp className='absolute mt-3 ml-2 w-5 h-5 text-gray-400' />
    </form>
  );
}

export default SearchInput;
