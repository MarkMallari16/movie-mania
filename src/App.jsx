


import './App.css'
import useFetch from './hooks/useFetch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Details from './components/Details';
import PopularMovies from './components/PopularMovies';
import Navbar from './components/Navbar';
import TopRatedMovies from './components/TopRatedMovies';
import UpcomingMovies from './components/UpcomingMovies';
import Footer from './components/Footer';

function App() {
  const { data: allMovies, loading: loadingAllMovies } = useFetch("https://api.themoviedb.org/3/discover/movie")

  const { data: topRated, loading: loadingTopRated } = useFetch("https://api.themoviedb.org/3/movie/top_rated");

  const { data: popular, loading: loadingPopular } = useFetch("https://api.themoviedb.org/3/movie/popular");


  const { data: upcomingMovie, loading: loadingUpcomingMovie } = useFetch("https://api.themoviedb.org/3/movie/upcoming");

  const { data: nowPlaying, loading: loadingNowPlaying } = useFetch("https://api.themoviedb.org/3/movie/now_playing");



  if (loadingAllMovies || loadingPopular || loadingNowPlaying || loadingTopRated || loadingUpcomingMovie)
    return <div className='min-h-screen grid place-items-center bg-slate-900'>
      <span className="loading loading-dots loading-lg text-white"></span>
    </div>

  return (
    <Router>
      <Navbar />
      <div className='min-h-screen bg-slate-900'>
        <div>
          <Routes>
            <Route path="/" element={<Home allMovies={allMovies} popular={popular} nowPlaying={nowPlaying} topRated={topRated} upcoming={upcomingMovie} />} />
            <Route path="/movies/popular" element={<PopularMovies popular={popular} />} />
            <Route path="/movies/toprated" element={<TopRatedMovies topRated={topRated} />} />
            <Route path="/movies/upcoming" element={<UpcomingMovies upcoming={upcomingMovie}/>} />

            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/tv/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
