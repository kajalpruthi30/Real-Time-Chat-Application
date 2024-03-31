import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation"
import useGetConversations from "../../hooks/useGetConversations"
import toast from 'react-hot-toast';

function SearchInput() {

  const [search, setSearch] = useState("")
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    } else{
      toast.error("No such user found!")
    }

  }


  return (
    <form className='flex justify-between py-2 px-4' onSubmit={handleSubmit}>
      <input type="text" placeholder='Search...' 
        className='w-[330px] input input-bordered rounded-full focus:outline-none'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <button type='submit' className='btn btn-circle text-black  hover:bg-white'>
        <IoSearchSharp className='w-6 h-6 outline-none hover:color-white'/>
      </button>
    </form>
  )
}

export default SearchInput
