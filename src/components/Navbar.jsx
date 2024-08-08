import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/logo1.png'
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../assets/profile.jpg'
export const NAV_LINKS = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        ,
        title: "Home",
        path: "/"
    },
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
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const navigate = useNavigate();

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    }
    const clearQuery = () => {
        setQuery("")
    }
    const handleSearchEnter = (e) => {
        if (e.key === "Enter") {
            if (query) {
                navigate(`/search?query=${encodeURIComponent(query)}`, { state: { searchResults } });
            }
        }
    }
    useEffect(() => {
        if (query) {
            const API_KEY = "24ce4eec248652f741c228a1d8a1a21c";
            const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
            const fetchSearchResults = async () => {
                try {
                    const response = await fetch(URL);
                    const data = await response.json();

                    setSearchResults(data.results);

                    console.log(data)
                } catch (error) {
                    console.error("Error fetching search results: ", error)
                }
            }
            fetchSearchResults();
        } else {
            setSearchResults([])
        }
    }, [query])

    return (
        <div className="hidden sm:block navbar py-4 bg-base-200 lg:sticky lg:top-0 lg:z-50" >
            <div className='flex justify-between w-full px-5'>
                <div>
                    <Link to='/'>
                        <div>
                            <img src={Logo} alt="MovieMania" className='w-full' />
                        </div>
                    </Link>
                </div>

                <div className='relative w-full max-w-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute inset-3 size-6 ">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                    <input type="text" value={query} onChange={handleQueryChange} onKeyDown={handleSearchEnter} className='input input-bordered w-full pl-12' placeholder='Search movies here...' />
                    {query && <div className='tooltip-top' data-tip="Hello">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" absolute size-6 top-3 end-4 cursor-pointer" onClick={clearQuery} data-tip="clear">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </div>}

                </div>

                <div className='flex items-center gap-5'>
                    <ul className="menu menu-horizontal px-2 text-white uppercase font-medium">
                        {NAV_LINKS.map(link => (
                            <li key={link}>
                                <Link to={`/movies/${link.path}`}>
                                    {link.icon}{link.title}</Link>
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
                            <li><a href="/favorite">Favorite Movie</a></li>
                            <li><a href="/profile">View Profile</a></li>
                            <li><a href="/settings">Settings</a></li>
                            <li><a href="/logout">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar