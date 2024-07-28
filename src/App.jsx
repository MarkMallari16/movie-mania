


import './App.css'
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';
import useFetch from './hooks/useFetch'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
function App() {
  const { data: popular, loading } = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=24ce4eec248652f741c228a1d8a1a21c");

  if (loading) return <p>Loading....</p>

  return (
    <Router>
      <div className='min-h-screen bg-slate-900'>
        
        <div>
          <Routes>
            <Route path="/" element={<Home popular={popular} />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>

        </div>
      </div>
    </Router>
  )
}

export default App
