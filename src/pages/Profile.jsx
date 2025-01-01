import React from 'react'
import ProfilePicture from '../assets/profile.jpg'
import MovieSmallCard from '../components/MovieSmallCard'
const Profile = ({ recentWatchMovies }) => {
  const listStyle = "bg-base-300 px-3 py-2 rounded-xl mb-2";

  return (
    <div className='mx-8 lg:mx-20 mt-10 lg:mt-28 bg-base-200 p-10 rounded-lg'>
      <div className='flex flex-col lg:flex-row items-center gap-8'>
        <img src={ProfilePicture} alt="profile" className='w-52 rounded-full' />
        <div>
          <h1 className='font-bold text-2xl'>Mark Christian Mallari</h1>
          <p className='mt-2 max-w-3xl '>
            Hello! I'm Mark Christian Mallari, an avid movie enthusiast. I enjoy exploring various genres and discussing films with fellow movie buffs. Whether it's a thrilling action-packed adventure or a thought-provoking drama, I'm always up for a good watch. Feel free to browse my recent movie picks below!
          </p>
        </div>
      </div>

      <div className='mt-10'>
        <h2 className='font-semibold text-xl'>Favorite Genres</h2>
        <ul className='mt-2 list list-inside flex flex-wrap gap-4'>
          <li className={listStyle}>Thriller</li>
          <li className={listStyle}>Science Fiction</li>
          <li className={listStyle}>Action</li>
          <li className={listStyle}>Comedy</li>
        </ul>
      </div>

      <div className='mt-4'>
        <h2 className='font-semibold text-xl'>Recent Watched Movie</h2>
        <ul className='mt-5 list-disc list-inside flex justify-center flex-wrap lg:justify-start gap-5'>
          {recentWatchMovies.map(movie => (
            <MovieSmallCard id={movie.id} poster={movie.poster_path} title={movie.title} />
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Profile