import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const PersonPage = () => {
  const { id } = useParams();

  const { data: personData, loading: personLoading } = useFetch(`https://api.themoviedb.org/3/person/${id}`);

  if (personLoading){
    return <div>Loading...</div>
  }
  return (
    <div className='lg:mt-28 mx-12'>
      {personData.name}
    </div>
  )
}

export default PersonPage