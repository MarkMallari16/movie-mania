import React from 'react'

export const sortingUtils = (movies, sort) => {
    return [...movies].sort((a, b) => {
        switch (sort) {
            case "highest":
                return b.vote_average - a.vote_average;
            case "lowest":
                return a.vote_average - b.vote_average;
            case "newest":
                return new Date(b.release_date) - new Date(a.release_date);
            case "oldest":
                return new Date(a.release_date) - new Date(b.release_date);
            default:
                return 0;
        }
    });
}
