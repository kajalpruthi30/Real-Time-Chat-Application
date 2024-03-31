import React, {useState} from 'react'
import GenderCheckbox from './GenderCheckbox';
import {Link} from "react-router-dom"
import useSignup from '../../hooks/useSignup';


function Signup() {

  const [inputs, setInputs] = useState({
	fullName: '',
	username: '',
	password: '',
	confirmPassword: '',
	gender: ''
  })	

  const handleCheckboxChange = (gender) => {
	setInputs({...inputs, gender})
  }

  const {loading, signup} = useSignup();

  const handleSubmit = async (e) => {
	e.preventDefault();
	// console.log(inputs)
	await signup(inputs)
  }

  return (
	<div className='flex flex-col items-center justify-center min-w-96 mx-auto bg-white rounded-lg'>
	<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
		<h1 className='text-3xl font-semibold text-center mb-2'>
			ChatApp
		</h1>
		<p className=' text-gray-500 text-lg text-center'>Register</p>

		<form className='px-5' onSubmit={handleSubmit}>
			<div className='py-6'>	
				<input
					type='text'
					placeholder='Enter Fullname'
					className='w-full h-10 outline-none px-2' 
					value={inputs.fullName}
					onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
				/>
				<div className=' border-b border-gray-300 pt-2'></div>
			</div>

			<div>	
				<input
					type='text'
					placeholder='Enter Username'
					className='w-full h-10 outline-none px-2'
					value={inputs.username}
					onChange={(e) => setInputs({...inputs, username: e.target.value})} 
				/>
				<div className=' border-b border-gray-300 pt-2'></div>
			</div>

			<div className='py-6'>
				<input
					type='text'
					placeholder='Enter Password'
					className='w-full h-10 outline-none px-2' 
					value={inputs.password}
					onChange={(e) => setInputs({...inputs, password: e.target.value})}
				/>
				<div className=' border-b border-gray-300 pt-2'></div>
			</div>


			<div>
				<input
					type='text'
					placeholder='Confirm Password'
					className='w-full h-10 outline-none px-2' 
					value={inputs.confirmPassword}
					onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
				/>
				<div className=' border-b border-gray-300 pt-2'></div>
			</div>

			<div className='py-4'>
				<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
			</div>
			
			<div className='pb-3'>
				<button className='btn btn-block btn-sm mt-2 h-10 bg-submitButton text-md text-white hover:bg-submitButton'
				 disabled={loading}>
					{loading ? <span className='loading loading-spinner bg-submitButton'></span> : "Sign Up"}
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
