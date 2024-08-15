import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const PersonPage = () => {
  const { id } = useParams();

  const { data: personData, loading: personLoading } = useFetch(`https://api.themoviedb.org/3/person/${id}`);

  console.log(personData)
  return (
    <div className='lg:mt-28 mx-12'>
      sample text
    </div>
  )
}

export default PersonPage