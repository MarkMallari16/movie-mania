import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
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
        }
        fetchData();
    },[])
    return { data, loading };
}

export default useFetch