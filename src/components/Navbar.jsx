import React, { useState } from 'react'
import Logo from '../assets/logo1.png'
const Navbar = () => {
    return (
        <div className="navbar pt-2">
            <div className='flex justify-between w-full mx-10'>
                <div>
                    <div className="btn btn-ghost text-3xl ">
                        <img src={Logo} alt="MovieMania" />
                    </div>
                </div>
                <div >
                    <div className={` p-3 rounded-lg absolute `}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input type="text" placeholder="Type here" className={`input input-bordered w-96 pl-12`} />
                </div>
                <div  className='flex items-center'>
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li>
                            <a>Movies</a>
                        </li>
                        <li>
                            <a>TV</a>
                        </li>
                        <li>
                            <a>Series</a>
                        </li>
                        <li>
                            <a>Popular</a>
                        </li>
                        <li>
                            <a>Top Rated</a>
                        </li>

                    </ul>

                    <div className='flex items-center gap-3 relative' >
                        <div  className='btn btn-ghost'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
                                <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>

                        </div>



                    </div>
                </div>


            </div>

        </div>
    )
}

export default Navbar