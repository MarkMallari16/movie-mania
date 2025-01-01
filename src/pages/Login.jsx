import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    return (
        <div className='min-h-screen grid place-items-center'>
            <div className='bg-base-300 p-10 rounded-lg lg:w-1/3'>
                <h1 className='text-3xl font-bold mb-6'>Movie<span className='text-blue-500'>Mania</span></h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" className='mt-1 block input input-bordered w-full' />
                </div>
                <div className='mt-4'>
                    <label htmlFor="email">Password</label>
                    <input type="text" className='mt-1 block input input-bordered w-full' />
                </div>
                <div className='mt-4'>
                    <button className='btn bg-blue-500 w-full font-bold uppercase'>Login</button>
                </div>
                <div className='mt-4 '>
                    <button className='w-full flex justify-center items-center gap-2 bg-base-100 p-3 rounded-lg'>
                        <FcGoogle className='text-xl'/>
                        Continue with Google
                    </button>
                    <button className='mt-3 w-full flex justify-center items-center gap-2 bg-base-100 p-3 rounded-lg'>
                        <FaFacebook className='text-xl'/>
                        Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login