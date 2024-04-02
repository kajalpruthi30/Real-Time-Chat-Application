import React from 'react'
import {useAuthContext} from "../../context/AuthContext"
import useConversation from '../../zustand/useConversation'
import {extractTime} from "../../utils/extractTime"

function Message({message}) {

  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()

  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic
  const bubbleBgColor = fromMe ? 'bg-green-500' : "bg-slate-300"
  const textColor = fromMe ? 'text-white' : 'text-black'
  const shakeClass = message.shouldShake ? "shake" : ""

  const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='Tailwind CSS chat bubble component' src={profilePic}/>
            </div>
        </div>
        <div className={`chat-bubble ${textColor} ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
        <div className='chat-footer opacity-70 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message
