import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import {getRandomEmoji} from "../../utils/emojis"
function Conversations() {
  const{loading, conversations} = useGetConversations()

  return (
    <div className='py-2 flex flex-col overflow-auto'>

    {loading ? <div className='flex justify-center items-center h-full'><div className='loading loading-spinner'></div></div> : null}


    {/* Here conversations refers to the users from whom we have shared messages i.e conversate */}
      {conversations.map((conversation, idx) => (
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()} 
          lastIdx={idx === conversations.length - 1 }/>
      ))}
    </div>
  )
}

export default Conversations
