import React from 'react'
import GenderCheckbox from './GenderCheckbox';
import {Link} from "react-router-dom"


function Signup() {
  return (
	<div className='flex flex-col items-center justify-center min-w-96 mx-auto bg-white rounded-lg'>
	<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
		<h1 className='text-3xl font-semibold text-center mb-2'>
			ChatApp
		</h1>
		<p className=' text-gray-500 text-lg text-center'>Register</p>

		<form className='px-5'>
			<div className='py-6'>	
				<input
					type='text'
					placeholder='Enter Fullname'
					className='w-full h-10 outline-none px-2' 
				/>
				<div className=' border-b border-gray-300 pt-2'></div>
			</div>

			<div>	
				<input
					type='text'
					placeholder='Enter Username'
					className='w-full h-10 outline-none px-2' 
				/>
				<div className=' border-b border-gray-300 pt-2'></div>
			</div>

			<div className='py-6'>
				<input
					type='text'
					placeholder='Enter Password'
					className='w-full h-10 outline-none px-2' 
				/>
				<div className=' border-b border-gray-300 pt-2'></div>
			</div>


			<div>
				<input
					type='text'
					placeholder='Confirm Password'
					className='w-full h-10 outline-none px-2' 
				/>
				<div className=' border-b border-gray-300 pt-2'></div>
			</div>

			<div className='py-4'>
				<GenderCheckbox/>
			</div>
			
			<div className='pb-3'>
				<button className='btn btn-block btn-sm mt-2 h-10 bg-submitButton text-md text-white hover:bg-submitButton'>
					Sign Up
				</button>
			</div>

			<div className='text-center'>
				<Link to='/login' className='text-sm hover:underline hover:text-submitButton mt-2 inline-block text-center'>
					Already have an account? Login
				</Link>
			</div>

		</form>
	</div>
</div>
	);
}

export default Signup
