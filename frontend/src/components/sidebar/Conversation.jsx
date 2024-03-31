import React from 'react'
import useConversation from "../../zustand/useConversation"

function Conversation({conversation, emoji, lastIdx}) {

  const {selectedConversation, setSelectedConversation} = useConversation()

  const isSelected = selectedConversation?._id === conversation._id;

  return (     
    <>
        <div className={`flex gap-2 items-centerrounded py-5 px-3 m-0 cursor-pointer hover:bg-blueShadeHover ${isSelected ? "bg-purple-200" : ""}`}
         onClick={() => setSelectedConversation(conversation)}>
          <div className='avatar online'>
            <div className='w-12 rounded-full'>
              <img
                  src={conversation.profilePic}
                  alt='user avatar'
                  />
                      </div>
                  </div>
      
                  <div className='flex flex-col flex-1'>
                      <div className='flex gap-3 justify-between'>
                          <p className='font-bold text-white'>{conversation.fullName}</p>
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
