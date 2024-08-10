import React from 'react'

const LazyLoadingCard = () => {
    return (
        <div className='flex gap-3'>
            <div className="flex w-64 flex-col gap-4">
                <div className="skeleton h-60 w-full"></div>
                <div className="skeleton h-6 w-full"></div>
            </div>
        </div>

    )
}

export default LazyLoadingCard