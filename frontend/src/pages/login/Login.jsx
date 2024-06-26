import React, {useState} from 'react'
import {Link} from "react-router-dom"
import useLogin from '../../hooks/useLogin'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
	e.preventDefault();
	await login({username, password})
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto bg-white rounded-lg'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center mb-2'>
					ChatApp
				</h1>
				<p className=' text-gray-500 text-lg text-center'>Login</p>

				<form className='px-5' onSubmit={handleSubmit}>
					<div className='py-6'>
						
						<input
							type='text'
							placeholder='Enter Username'
							className='w-full h-10 outline-none px-2'
							value={username} 
							onChange={(e) => setUsername(e.target.value)}
						/>
						<div className=' border-b border-gray-300 pt-2'></div>
					</div>

					<div>
						
						<input
							type='text'
							placeholder='Enter Password'
							className='w-full h-10 outline-none px-2'
							value={password} 
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className=' border-b border-gray-300 pt-2'></div>
					</div>
					
					<div className='pt-5 pb-3'>
						<button className='btn btn-block btn-sm mt-2 h-10 bg-submitButton text-md text-white hover:bg-submitButton'
						 disabled={loading}>
							{loading ? <span className='loading loading-spinner bg-submitButton'></span> : "Sign In"}
						</button>
					</div>

					<div className='text-center'>
						<Link to='/signup' className='text-sm hover:underline hover:text-submitButton mt-2 inline-block text-center'>
							Don't have an account? Signup
						</Link>
					</div>

				</form>
			</div>
		</div>
	);
}

export default Login
