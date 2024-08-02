import React, { useRef, useState } from 'react'
import Logo from '../assets/logo1.png'
const Navbar = () => {
    const modalRef = useRef(null);

    const handleOpenSearchModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }
    const handleCloseSearchModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    }




    return (
        <div className="navbar pt-4" >
            <div className='flex justify-between w-full mx-5'>
                <div>
                    <div className="btn btn-ghost text-3xl ">
                        <img src={Logo} alt="MovieMania" />
                    </div>
                </div>
                {/**<div >
                    <div className={` p-3 rounded-lg absolute `}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input type="text" placeholder="Type here" className={`input input-bordered w-96 pl-12`} />
                </div> */}
                <div className='flex items-center'>
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
                </div>

                <div className='flex items-center gap-8'>
                    <div className='text-white'>|</div>
                    <div className='text-white btn btn-ghost' onClick={handleOpenSearchModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_2" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <input type="text" className='input input-bordered w-full' placeholder='Search here...' />
                    <button className='btn btn-error' onClick={handleCloseSearchModal}>Close</button>
                </div>
            </dialog>
        </div>
    )
}

export default Navbar