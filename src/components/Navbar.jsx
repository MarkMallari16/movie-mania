import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar pt-2">
            <div >
                <div className="btn btn-ghost text-3xl ">
                    <p className="text-white  luckiest-guy-regular">Movie<span className='text-blue-400  luckiest-guy-regular'>Mania</span></p>
                </div>
            </div>
            <div className='ms-auto w-full max-w-sm relative'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 absolute left-4">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>

                <input type="text" placeholder="Type here" className="input input-bordered w-full pl-12" />

            </div>
            <div className='flex gap-3 text-white ms-auto'>
                <a href="" className='font-bold'>
                    TV
                </a>
                <a href="" className='font-bold'>
                    Movies
                </a>
            </div>
        </div>
    )
}

export default Navbar