import React from 'react'
import ProfilePicture from '../assets/profile.jpg'
import MovieSmallCard from '../components/MovieSmallCard'
const Profile = ({ recentWatchMovies }) => {
  return (
    <div className='mx-8 lg:mx-20 mt-10 lg:mt-28 bg-base-200 p-10 rounded-lg'>
      <div className='flex flex-col lg:flex-row items-center gap-8'>
        <img src={ProfilePicture} alt="profile" className='w-52 rounded-full' />
        <div>
          <h1 className='font-bold text-2xl'>Mark Christian Mallari</h1>
          <p className='mt-2 max-w-2xl'>
            Hello! I'm Mark Christian Mallari, an avid movie enthusiast. I enjoy exploring various genres and discussing films with fellow movie buffs. Whether it's a thrilling action-packed adventure or a thought-provoking drama, I'm always up for a good watch. Feel free to browse my recent movie picks below!
          </p>
        </div>
      </div>

      <div className='mt-10'>
        <h2 className='font-semibold text-xl'>Favorite Genres</h2>
        <ul className='mt-2 list-disc list-inside'>
          <li>Thriller</li>
          <li>Science Fiction</li>
          <li>Action</li>
          <li>Comedy</li>
        </ul>
      </div>

      <div className='mt-4'>
        <h2 className='font-semibold text-xl'>Recent Watched Movie</h2>
        <ul className='mt-5 list-disc list-inside flex justify-center flex-wrap lg:justify-start gap-5'>
          {recentWatchMovies.map(movie => (
            <MovieSmallCard id={movie.id}  poster={movie.poster_path} title={movie.title}/>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Profile