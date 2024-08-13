import React, { useState } from 'react'

const useSortOrder = () => {
    const [sort, setSort] = useState('newest');

    const handleSort = (sortOrder) => {
        setSort(sortOrder);
    }

    return { sort, handleSort };
}

export default useSortOrder