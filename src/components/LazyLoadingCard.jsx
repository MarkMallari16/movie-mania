import React from 'react'

const LazyLoadingCard = () => {
    return (
        <div className="flex w-60 flex-col gap-4">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
        </div>

    )
}

export default LazyLoadingCard