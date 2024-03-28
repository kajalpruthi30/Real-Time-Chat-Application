import React from 'react'
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";


function MessageContainer() {

 const noChatSelected = false;

  return (
    <div className='flex flex-col w-[75vw]'>

		{noChatSelected ? <NoChatSelected/> :  (
			<>
                {/* Header */}
                <div className=' p-3 flex items-center bg-headerBackground'>
					<div className='avatar'>
						<div className='w-12 rounded-full'>
							<img
									src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
									alt='user avatar'
								/>
						</div>
					</div>
                    <div className='flex flex-col flex-1'>
						<p className='text-lg ml-2 text-white'>John Doe</p>
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
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Kajal! ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
