import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-base-content">
            <div >
                <a className="btn btn-ghost text-3xl text-blue-500 anton-regular">MovieMania</a>
            </div>
            <div className='flex gap-3 text-white'>
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