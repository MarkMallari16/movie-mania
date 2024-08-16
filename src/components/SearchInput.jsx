import React from 'react'

const SearchInput = ({ currentQuery, onHandleQueryChange, onHandleSearchEnter, onClearQuery }) => {
    return (
        <>
            <input type="text" value={currentQuery} onChange={onHandleQueryChange} onKeyDown={onHandleSearchEnter} className='input input-ghost bg-none w-full pl-12' placeholder='Search movies here...' />
            {
                currentQuery &&

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" absolute size-6 top-3 end-4 cursor-pointer bg-base-300 rounded-lg p-1 hover:bg-base-200 transition-colors ease-in-out" onClick={onClearQuery} data-tip="clear">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>

            }
        </>
    )
}

export default SearchInput