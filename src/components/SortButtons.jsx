import React from 'react'

const SortButtons = ({ onSorted, currentSort }) => {
    const buttonClasses = `btn rounded-xl btn-outline font-medium`

    const getClassNames = sortType => {
        return `${buttonClasses} ${currentSort === sortType ? 'bg-blue-600 border-blue-600' : ''}`;
    }
    return (
        <ul className='flex flex-wrap gap-5'>
            <li onClick={() => onSorted('newest')} className={getClassNames('newest')}>Newest</li>
            <li onClick={() => onSorted('oldest')} className={getClassNames('oldest')}>Oldest</li>
            <li onClick={() => onSorted('highest')} className={getClassNames('highest')}>Highest</li>
            <li onClick={() => onSorted('lowest')} className={getClassNames('lowest')}>Lowest</li>
        </ul>
    )
}

export default SortButtons