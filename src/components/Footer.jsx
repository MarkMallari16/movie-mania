import React from 'react'
import Logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="mt-32 footer p-10  border-t-2 border-slate-800">
            <aside>
                <img src={Logo} alt="MovieMania" />
                <p >
                    Copyright &copy; {new Date().getFullYear()} MovieMania.
                </p>
            </aside>
            <nav className='text-slate-300'>
                <h6 className="footer-title">Movies</h6>
                <Link to='/movies/popular' className="link link-hover">Popular</Link>
                <Link to='/movies/toprated' className="link link-hover">Top Rated</Link>
                <Link to='/movies/upcoming' className="link link-hover">Upcoming</Link>
            </nav>
            <nav className='text-slate-300'>
                <h6 className="footer-title">Legal</h6>
                <Link to='/terms' className="link link-hover">Terms of use</Link>
                <Link to='/terms' className="link link-hover">Privacy Policy</Link>
            </nav>
        </footer>
    )
}
export default Footer