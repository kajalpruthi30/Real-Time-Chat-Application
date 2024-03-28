import React from 'react'
import { BsSend } from "react-icons/bs";

function MessageInput() {
	return (
		<form className='px-4 my-3'>
			<div className='w-full relative'>
				<input
					type='text'
					className='border-none text-md rounded-lg block w-full p-2.5 focus:outline-none'
					placeholder='Send a message...'
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-lg'>
					<BsSend />
				</button>
			</div>
		</form>
	);
};
export default MessageInput;