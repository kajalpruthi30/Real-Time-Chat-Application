import React from 'react'
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar"; 

function Home() {
    return (
		<div className='flex rounded-lg overflow-hidden bg-white w-full h-screen'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
}

export default Home
