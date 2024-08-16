import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import BackButton from '../components/BackButton';

const PersonPage = () => {
  const [isShowFullText, setIsShowFullText] = useState(false);

  const { id } = useParams();

  const { data: personData, loading: personLoading } = useFetch(`https://api.themoviedb.org/3/person/${id}`);

  if (personLoading) {
    return <div>Loading...</div>
  }
  const truncatedBiographyText = personData.biography.slice(0, 300);
  const shouldShowFullText = personData.biography.length > truncatedBiographyText.length;

  const handleToggleText = () => {
    setIsShowFullText(!isShowFullText);
  }
  return (
    <div className='lg:mt-28 mx-12'>
      <BackButton className='mb-5' />
      <div className='flex flex-wrap lg:flex-nowrap gap-8 '>

        <img src={`https://image.tmdb.org/t/p/w500${personData.profile_path}`} alt={personData.name} className='rounded-lg w-full lg:w-auto lg:h-96' />
        <div>
          <h1 className='text-6xl font-semibold'>{personData.name}</h1>
          <div>
            {
              personData.biography && (
                <>
                  <h2 className='text-xl font-medium mt-4'>Biography</h2>
                  <p className='mt-2 tracking-wide '>
                    {isShowFullText ? personData.biography : truncatedBiographyText}
                  </p>
                </>
              )
            }
            {shouldShowFullText && (
              <span
                onClick={handleToggleText}
                className=' cursor-pointer text-secondary font-medium'
              >
                {isShowFullText ? 'See Less' : 'See More'}
              </span>
            )}
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