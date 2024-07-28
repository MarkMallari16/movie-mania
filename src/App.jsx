


import './App.css'
import useFetch from './hooks/useFetch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
function App() {

  const { data: topRated, loading: loadingTopRated } = useFetch("https://api.themoviedb.org/3/movie/top_rated?api_key=24ce4eec248652f741c228a1d8a1a21c");

  const { data: popular, loading: loadingPopular } = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=24ce4eec248652f741c228a1d8a1a21c");


  const { data: upcomingMovie, loading: loadingUpcomingMovie } = useFetch("https://api.themoviedb.org/3/movie/upcoming?api_key=24ce4eec248652f741c228a1d8a1a21c");

  const { data: nowPlaying, loading: loadingNowPlaying } = useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=24ce4eec248652f741c228a1d8a1a21c");


  if (loadingPopular || loadingNowPlaying || loadingTopRated || loadingUpcomingMovie ) return <p>Loading....</p>

  return (
    <Router>
      <div className='min-h-screen bg-slate-900'>
        <div>
          <Routes>
            <Route path="/" element={<Home popular={popular}  nowPlaying={nowPlaying}  topRated={topRated} upcoming={upcomingMovie}/>} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>

        </div>
      </div>
    </Router>
  )
}

export default App
