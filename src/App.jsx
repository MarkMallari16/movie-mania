


import './App.css'
import useFetch from './hooks/useFetch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar';
function App() {

  const { data: topRated, loading: loadingTopRated } = useFetch("https://api.themoviedb.org/3/movie/top_rated");

  const { data: popular, loading: loadingPopular } = useFetch("https://api.themoviedb.org/3/movie/popular");


  const { data: upcomingMovie, loading: loadingUpcomingMovie } = useFetch("https://api.themoviedb.org/3/movie/upcoming");

  const { data: nowPlaying, loading: loadingNowPlaying } = useFetch("https://api.themoviedb.org/3/movie/now_playing");




  if (loadingPopular || loadingNowPlaying || loadingTopRated || loadingUpcomingMovie)
    return <div className='min-h-screen grid place-items-center bg-slate-900'>
      <span className="loading loading-dots loading-lg text-white"></span>
    </div>

  return (
    <Router>
      
      <div className='min-h-screen bg-slate-900'>
        <div>
          <Routes>
            <Route path="/" element={<Home popular={popular} nowPlaying={nowPlaying} topRated={topRated} upcoming={upcomingMovie} />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
