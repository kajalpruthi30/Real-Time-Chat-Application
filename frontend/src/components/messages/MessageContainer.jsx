import React, {useEffect} from 'react'
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation"
import bgImg from "../../assets/message-container.jpg"


function MessageContainer() {

  const {selectedConversation, setSelectedConversation} = useConversation()

  return (
    <div className='flex flex-col w-[75vw] relative'>

    <div className="absolute w-full h-full" style={{backgroundImage: `url(${bgImg})`, opacity: '0.5'}} ></div>
      
            {!selectedConversation ? <NoChatSelected/> :  (
                <>
                    {/* Header */}
                    <div className=' px-3 py-2 flex items-center bg-white relative'>
                        <div className='avatar'>
                            <div className='w-12 rounded-full'>
                                <img
                                        src={selectedConversation.profilePic}
                                        alt='user avatar'
                                    />
                            </div>
                        </div>
                        <div className='flex flex-col flex-1'>
                            <p className='text-lg ml-3 font-bold'>{selectedConversation.fullName}</p>
                        </div>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}
            </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {

	const {authUser} = useAuthContext();

	return (
		<div className='flex items-center justify-center w-full h-full relative'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName}! ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};