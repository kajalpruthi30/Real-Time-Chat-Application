import React from 'react'
import useConversation from "../../zustand/useConversation"
import { useSocketContext } from '../../context/SocketContext';

function Conversation({conversation, emoji, lastIdx, lastMessage}) {

  const {selectedConversation, setSelectedConversation} = useConversation()

  const isSelected = selectedConversation?._id === conversation._id;
  
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  const conversationClicked = (conversation) => {
    setSelectedConversation(conversation)
    // localStorage.setItem("selected-conversation", JSON.stringify(conversation))
  }


  return (     
    <>
        <div className={`flex gap-2 items-centerrounded py-4 px-3 m-0 cursor-pointer hover:bg-gray-100 ${isSelected ? "bg-gray-100" : ""}`}
         onClick={() => conversationClicked(conversation)}>

          <div className={`avatar ${isOnline ? 'online' : ""}`}>
            <div className='w-12 rounded-full'>
              <img
                  src={conversation.profilePic}
                  alt='user avatar'
                  />
                      </div>
                  </div>
      
                  <div className='flex flex-col flex-1'>
                      <div className='flex gap-3 justify-between'>
                          <div>
                            <p className='font-bold'>{conversation.fullName}</p>
                            <p>{lastMessage}</p>
                          </div>
                          <span className='text-xl'>{emoji}</span>
                      </div>
                  </div>
          </div>
    
        {/* <div className='divider my-0 py-0 h-1' /> */}
        {/* <div className='border-b mx-4'></div> */}
        {!lastIdx && <div className="divider m-0 h-0"></div>}
    </>
  )
}

export default Conversation
