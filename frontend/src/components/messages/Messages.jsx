import React from 'react'
import Message from './Message'

function Messages() {
  return (
    <div className='p-4 flex-1 overflow-auto bg-messagesBackground '>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages
