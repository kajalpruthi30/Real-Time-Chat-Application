import React, {useRef, useEffect} from 'react'
import Message from './Message'
import { TiMessages } from "react-icons/ti";
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages';

function Messages() {

  const {messages, loading} = useGetMessages()
  useListenMessages()
  const lastMessageRef = useRef()

  // scroll to the bottom of the chat
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
    }, 100)
  }, [messages])


  return (
    <div className='p-4 px-20 flex-1 overflow-auto relative'>

      {/* Loading state - MessageSkeleton will be shown 3 times */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {/* If there is no Chat */}
      {!loading && messages.length === 0 && (
        <div className='flex items-center justify-center w-full h-full relative'>
          <div className='px-4 text-center sm:text-lg md:text-xl text-black-200 font-semibold flex flex-col items-center gap-2'>
            <p>Send a chat to start the conversation</p>
            <TiMessages className='text-3xl md:text-6xl text-center' />
          </div>
        </div>
      )}

      {!loading && messages.length > 0 && (
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))
      )}
    </div>
  )
}

export default Messages
