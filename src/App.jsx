


import './App.css'
import useFetch from './hooks/useFetch'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import PopularMovies from './pages/PopularMovies';
import Navbar from './components/Navbar';
import TopRatedMovies from './pages/TopRatedMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Profile from './pages/Profile';
import SearchResultComponent from './components/SearchResultComponent';
import Terms from './pages/Terms';
import PersonPage from './pages/PersonPage';
import LoadingComponent from './components/LoadingComponent';

function App() {

  const { data: allMovies, loading: loadingAllMovies } = useFetch("https://api.themoviedb.org/3/discover/movie")

  const { data: topRated, loading: loadingTopRated } = useFetch("https://api.themoviedb.org/3/movie/top_rated");

  const { data: popular, loading: loadingPopular } = useFetch("https://api.themoviedb.org/3/movie/popular");

  const { data: upcomingMovie, loading: loadingUpcomingMovie } = useFetch("https://api.themoviedb.org/3/movie/upcoming");

  const { data: nowPlaying, loading: loadingNowPlaying } = useFetch("https://api.themoviedb.org/3/movie/now_playing");

  const isLoading = loadingAllMovies || loadingPopular || loadingNowPlaying || loadingTopRated || loadingUpcomingMovie;

  if (isLoading) {
    return <LoadingComponent/>

  }

  return (
    <Router>
      <Navbar />
      <div className='min-h-screen bg-slate-900'>
        <div>
          <Routes>
            <Route path="/" element={<Home allMovies={allMovies} popular={popular} nowPlaying={nowPlaying} topRated={topRated} upcoming={upcomingMovie} />} />
            <Route path="/movies/popular" element={<PopularMovies popular={popular} />} />
            <Route path="/movies/toprated" element={<TopRatedMovies topRated={topRated} />} />
            <Route path="/movies/upcoming" element={<UpcomingMovies upcoming={upcomingMovie} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/movie/:id" element={<MoviePage />} />

            <Route path='/search' element={<SearchResultComponent />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/person/:id' element={<PersonPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
      <BottomNav />
      <Footer />
    </Router>
  )
}

export default App
