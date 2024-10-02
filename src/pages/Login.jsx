import React from 'react'

const Login = () => {
    return (
        <div className='min-h-screen grid place-items-center'>
            <div className='bg-base-300 p-10 rounded-lg w-1/3'>
                <h1 className='text-2xl font-bold mb-4'>Movie<span className='text-blue-500'>Mania</span></h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" className='block input input-bordered w-full' />
                </div>
                <div>
                    <label htmlFor="email">Password</label>
                    <input type="text" className='block input input-bordered w-full' />
                </div>
                <div className='mt-4'>
                    <button className='btn bg-blue-500 w-full'>Login</button>
                </div>

            </div>
        </div>
    )
}

export default Login