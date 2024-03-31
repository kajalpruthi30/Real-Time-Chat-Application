import React from 'react'
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation"


function MessageContainer() {

  const {selectedConversation, setSelectedConversation} = useConversation()

  return (
    <div className='flex flex-col w-[75vw]'>

		{!selectedConversation ? <NoChatSelected/> :  (
			<>
                {/* Header */}
                <div className=' p-4 flex items-center bg-headerBackground'>
					<div className='avatar'>
						<div className='w-12 rounded-full'>
							<img
									src={selectedConversation.profilePic}
									alt='user avatar'
								/>
						</div>
					</div>
                    <div className='flex flex-col flex-1'>
						<p className='text-lg ml-2 text-white'>{selectedConversation.fullName}</p>
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
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-black-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName}! ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
