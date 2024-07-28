


import './App.css'
import Navbar from './components/Navbar';
import useFetch from './hooks/useFetch'

function App() {
  const { data, loading } = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=24ce4eec248652f741c228a1d8a1a21c");

  if (loading) return <p>Loading....</p>
 console.log(data)
  return (
    <div className='min-h-screen bg-slate-900'>
      <Navbar />

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {data && data.results.map((d, _) => (
          <div >
            <img src={`https://image.tmdb.org/t/p/w200${d.poster_path}`} alt={d.title} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
