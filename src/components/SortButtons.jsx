import React from 'react'

const SortButtons = ({ onSorted, currentSort }) => {
    const buttonClasses = `btn rounded-3xl btn-outline font-medium`

    const getClassNames = sortType => {
        return `${buttonClasses} ${currentSort === sortType ? 'btn-active btn-secondary' : ''}`;
    }
    
    return (
        <ul className='flex gap-5'>
            <li onClick={() => onSorted('newest')} className={getClassNames('newest')}>Newest</li>
            <li onClick={() => onSorted('oldest')} className={getClassNames('oldest')}>Oldest</li>
            <li onClick={() => onSorted('highest')} className={getClassNames('highest')}>Highest</li>
            <li onClick={() => onSorted('lowest')} className={getClassNames('lowest')}>Lowest</li>
        </ul>
    )
}

export default SortButtons