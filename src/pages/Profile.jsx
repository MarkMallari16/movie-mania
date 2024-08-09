import React from 'react'
import ProfilePicture from '../assets/profile.jpg'
const Profile = () => {
  return (
    <div className='mx-20 mt-28 bg-base-200 p-10 rounded-lg'>
      <div className='flex  items-center gap-5'>
        <img src={ProfilePicture} alt="profile" className='w-52 rounded-full' />
        <div>
          <h1 className='font-bold text-2xl'>Mark Christian Mallari</h1>
          <p className='mt-2 max-w-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At iusto numquam itaque rem, doloribus repudiandae quisquam fugit placeat quibusdam accusantium?</p>
        </div>
      </div>
      <div className='mt-10'>
        <h2 className='font-semibold text-xl'>Favorite Genres</h2>
        <ul className='list-disc list-inside'>
          <li>Thriller</li>
          <li>Science Fiction</li>
          <li>Action</li>
        </ul>
      </div>
      <div className='mt-10'>
        <h2 className='font-semibold text-xl'>Recent Activity</h2>
        <ul className='list-disc list-inside'>
          <li>Watched "Inception" - Rated 5 stars</li>
          <li>Reviewed "The Matrix"</li>
          <li>Added "Blade Runner 2049" to Watchlist</li>
        </ul>
      </div>
      <div className='mt-10'>
        <h2 className='font-semibold text-xl'>Profile Settings</h2>
        <button className='btn btn-secondary mt-2'>Edit Profile</button>
      </div>
    </div>
  )
}

export default Profile