import React, {useEffect} from 'react'
import {BiLogOut} from "react-icons/bi"
import useLogout from '../../hooks/useLogout'
import useConversation from "../../zustand/useConversation"


function LogoutButton() {

  const {loading, logout} = useLogout();
  const {selectedConversation, setSelectedConversation} = useConversation()

  useEffect(() => {
    setSelectedConversation(null);
  }, []); 

  return (
    <div className='mt-auto ml-1'>
      {
        !loading ? (
          <BiLogOut className='w-6 h-6 cursor-pointer' onClick={logout} />
        ) : (
          <span className='loading loading-spinner'></span>
        )
      }
    </div>
  )
}

export default LogoutButton
