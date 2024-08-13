import React from 'react'

const LazyLoadingComponent = ({ className }) => {
    return (
        <div className={`skeleton ${className}`}></div>
    )
}

export default LazyLoadingComponent