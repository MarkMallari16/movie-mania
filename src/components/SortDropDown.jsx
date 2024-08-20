import React from 'react'

const SortDropDown = ({ onSorted, currentSort }) => {
    return (
        <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn m-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                </svg>

                Sort by
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li onClick={() => onSorted('newest')} className={currentSort === 'newest' ? 'bg-base-300 rounded-lg' : ''}>
                    <p>Newest</p>
                </li>
                <li onClick={() => onSorted('oldest')} className={currentSort === 'oldest' ? 'bg-base-300 rounded-lg' : ''}>
                    <p>Oldest</p>
                </li>
                <li onClick={() => onSorted('highest')} className={currentSort === 'highest' ? 'bg-base-300 rounded-lg' : ''}>
                    <p>Highest Stars</p>
                </li>
                <li onClick={() => onSorted('lowest')} className={currentSort === 'lowest' ? 'bg-base-300 rounded-lg' : ''}>
                    <p>Lowest Stars</p>
                </li>

            </ul>
        </div>
    )
}

export default SortDropDown