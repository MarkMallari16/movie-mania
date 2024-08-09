import React, { useCallback } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchData = (useCallback(async () => {
        if (!url) return;
        setLoading(true);
        try {
            const response = await fetch(`${url}?api_key=24ce4eec248652f741c228a1d8a1a21c`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Failed to fetch", error);
        } finally {
            setLoading(false)
        }
    }, [url]))

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return { data, loading, refetch: fetchData };
}

export default useFetch