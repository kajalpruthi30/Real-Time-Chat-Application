import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';

function MessageInput() {

	const[message, setMessage] = useState("");
	const{loading, sendMessage} = useSendMessage();

	const handleSubmit = async(e) => {
		e.preventDefault()
		if(!message) return;
		await sendMessage(message);
		setMessage("")
	}

	return (

		<div className='bg-slate-100'>
			<form className='px-20 my-3' onSubmit={handleSubmit}>
				<div className='w-full relative'>
					<input
						type='text'
						className='border-none text-md rounded-lg block w-full p-2.5 py-4 bg-white focus:outline-none'
						placeholder='Send a message...'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-lg'>
						{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
					</button>
				</div>
			</form>
		</div>
	);
};
export default MessageInput;