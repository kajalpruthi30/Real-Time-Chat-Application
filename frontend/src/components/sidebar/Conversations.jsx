import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import {getRandomEmoji} from "../../utils/emojis"
import useGetLastMessages from "../../hooks/useGetLastMessages"

function Conversations({search}) {
  const{loading, conversations} = useGetConversations()
  const{lastMessages} = useGetLastMessages()

  // Filter conversations based on search input
  const filteredConversations = conversations.filter((conversation) =>
    conversation.fullName.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className='py-2 flex flex-col overflow-auto'>

    {loading ? <div className='flex justify-center items-center h-full'><div className='loading loading-spinner'></div></div> : null}


      {filteredConversations.map((conversation, idx) => {
        const lastMessage = lastMessages.find(msg => msg !== null && msg.receiverId === conversation._id)

        return(
          <Conversation 
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()} 
            lastIdx={idx === conversations.length - 1 }
            lastMessage={lastMessage ? lastMessage.message : ''}/>
          )
      })}
    </div>
  )
}

export default Conversations
