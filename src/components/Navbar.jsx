import React from 'react'
import Logo from '../assets/logo1.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Profile from '../assets/profile.jpg'
import useScroll from '../hooks/useScroll';
import SearchInput from './SearchInput';
import SearchInputDropDown from './SearchInputDropDown';
import useFetchSearch from '../hooks/useFetchSearch';
import { motion } from 'framer-motion';

export const NAV_LINKS = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
        </svg>,
        title: "Popular",
        path: "popular"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
        </svg>,
        title: "Top Rated",
        path: "toprated"
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
        </svg>,
        title: "Upcoming",
        path: "upcoming"
    },
]

const Navbar = () => {
    const { query, setQuery, searchResults } = useFetchSearch()

    const isScrolling = useScroll();
    const navigate = useNavigate();

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    }
    const clearQuery = () => {
        setQuery("")
    }

    const handleSearchEnter = (e) => {
        if (e.key === "Enter") {
            if (query && searchResults.length > 0) {
                navigate(`/search?query=${encodeURIComponent(query)}`, { state: { searchResults, query } });
                clearQuery()
            }
        }
    }

    const handleMovieClick = (movie) => {
        navigate(`/movie/${movie.id}`);
        clearQuery();
    }
    return (
        <motion.div className={`lg:fixed ${isScrolling && 'backdrop-blur-sm'} transition-all ease-in-out top-0 hidden sm:block navbar py-4 z-50`} >
            <div className='flex justify-between w-full px-10'>
                <div>
                    <Link to='/'>
                        <div>
                            <img src={Logo} alt="MovieMania" className='w-full' />
                        </div>
                    </Link>
                </div>

                <div className='relative w-full max-w-2xl'>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute inset-3 size-6">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>

                    <SearchInput currentQuery={query} onHandleQueryChange={handleQueryChange} onHandleSearchEnter={handleSearchEnter} onClearQuery={clearQuery} />

                    <SearchInputDropDown currentQuery={query} currentSearchResults={searchResults} onHandleMovieClick={handleMovieClick} />
                </div>

                <div className='flex items-center gap-5'>
                    <ul className="menu menu-horizontal flex gap-2 px-2 text-white uppercase font-medium">
                        {NAV_LINKS.map(link => (
                            <li key={link}>
                                <NavLink className={({ isActive }) => isActive ? "active" : ""} to={`/movies/${link.path}`}>
                                    {link.icon}{link.title}</NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="avatar online">
                            <div className="w-12 rounded-full object-cover">
                                <img src={Profile} alt='Profile' />
                            </div>
                        </div>


                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow">

                            <li><NavLink to="/profile">View Profile</NavLink></li>
                            <li><NavLink to="/logout">Logout</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default Navbar