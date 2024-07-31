import React, { useState } from 'react'

const Navbar = () => {
    const [isInputHide, setIsInputHide] = useState(true);


    return (
        <div className="navbar">
            <div className='flex-1'>
                <div className="btn btn-ghost text-3xl ">
                    <p className="text-white font-black uppercase">Movie<span className='text-blue-500'>Mania</span></p>
                </div>
            </div>

            <div className='flex gap-5 relative' onClick={() => setIsInputHide(!isInputHide)}>
                <div className={` p-3 rounded-lg absolute `}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </div>

                <input type="text" placeholder="Type here" className={`input input-bordered w-full pl-12 max-w-96`} />
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li>
                            <a>Movies</a>
                        </li>
                        <li>
                            <a>TV</a>
                        </li>
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar