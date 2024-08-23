import React from 'react'

const SortButtons = ({ onSorted, currentSort }) => {
    return (
        <ul className='flex gap-5'>
            <li onClick={() => onSorted('newest')} className={`btn rounded-3xl btn-outline  font-normal ${currentSort === 'newest' && 'btn btn-secondary'}`}>Newest</li>
            <li onClick={() => onSorted('oldest')} className={`btn  rounded-3xl btn-outline font-normal ${currentSort === 'oldest' && 'btn-secondary'}`}>Oldest</li>
            <li onClick={() => onSorted('highest')} className={`btn rounded-3xl btn-outline font-normal ${currentSort === 'highest' && 'btn-secondary'}`}>Highest</li>
            <li onClick={() => onSorted('lowest')} className={`btn  rounded-3xl btn-outline font-normal ${currentSort === 'lowest' && 'btn-secondary'}`}>Lowest</li>
        </ul>
    )
}

export default SortButtons