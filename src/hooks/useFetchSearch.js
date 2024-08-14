import React, { useEffect, useState } from 'react'

const useFetchSearch = () => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        if (query) {
            const API_KEY = "24ce4eec248652f741c228a1d8a1a21c";
            const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
            const fetchSearchResults = async () => {
                try {
                    const response = await fetch(URL);
                    const searchData = await response.json();

                    setSearchResults(searchData.results);

                } catch (error) {
                    console.error("Error fetching search results: ", error)
                }
            }
            fetchSearchResults();
        } else {
            setSearchResults([])
        }
    }, [query])

    return { query, setQuery, searchResults };

}

export default useFetchSearch