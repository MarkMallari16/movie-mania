

import { Navbar } from 'react-bootstrap';
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const { data, loading } = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=24ce4eec248652f741c228a1d8a1a21c");

  if (loading) return <p>Loading....</p>

  return (
    <div className='bg-slate-900'>
      <Navbar />
      {data && data.results.map((d) => (
        <div key={d.id} className='flex'>
          <div >
            <img src={`https://image.tmdb.org/t/p/w200${d.poster_path}`} alt={d.title} />
            <h2>{d.title}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
