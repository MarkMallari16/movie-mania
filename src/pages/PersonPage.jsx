import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const PersonPage = () => {
  const { id, name } = useParams();

  const { data: personData, loading: personLoading } = useFetch(`https://api.themoviedb.org/3/person/${id}`);

  if (personLoading) {
    return <div>Loading...</div>
  }

  console.log(personData)
  return (
    <div className='lg:mt-28 mx-12'>
      <div className='flex flex-wrap lg:flex-nowrap gap-8 '>

        <img src={`https://image.tmdb.org/t/p/w300${personData.profile_path}`} alt={personData.name} className='rounded-lg w-full lg:w-auto' />
        <div>
          <h1 className='text-6xl font-semibold'>{personData.name}</h1>
          <div>
            <h2 className='text-xl font-medium mt-4'>Biography</h2>
            <p className='mt-2 tracking-wide'>{personData.biography}</p>
          </div>
          <div>
            <h2 className='text-xl font-medium mt-4'>Known For</h2>
            <p className='mt-2 tracking-wide'>{personData.known_for_department}</p>
          </div>
        </div>



      </div>

    </div>
  )
}

export default PersonPage