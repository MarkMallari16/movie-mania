import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import BackButton from '../components/BackButton';
import { formattedAge, formattedDate } from '../utils/dateFormatUtils';
import LoadingComponent from '../components/LoadingComponent';
import { motion } from 'framer-motion';

const PersonPage = () => {
  const [isShowFullText, setIsShowFullText] = useState(false);

  const { id } = useParams();

  const { data: personData, loading: personLoading } = useFetch(`https://api.themoviedb.org/3/person/${id}`);

  if (personLoading) {
    return <LoadingComponent />
  }

  const truncatedBiographyText = personData.biography.slice(0, 300);
  const shouldShowFullText = personData.biography.length > truncatedBiographyText.length;

  const handleToggleText = () => {
    setIsShowFullText(!isShowFullText);
  }
  const personBirthDate = formattedDate(personData.birthday);
  const personAge = formattedAge(personData.birthday);

  const iconToShow = isShowFullText ?
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
    </svg>
    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
    </svg>

  const rotatedChevron = {
    unrotated: { rotate: 0 },
    rotated: { rotate: isShowFullText ? -180 : 0 }
  }
  return (
    <div className='lg:mt-28 mx-12'>
      <BackButton className='mb-5' />
      <div className='flex flex-wrap lg:flex-nowrap gap-16 '>

        <img src={`https://image.tmdb.org/t/p/w500${personData.profile_path}`} alt={personData.name} className='rounded-lg w-full lg:w-auto lg:h-96' />
        <div>
          <h1 className='text-6xl font-semibold'>{personData.name}</h1>
          <div>
            <div>
              <p className='mt-2 tracking-wide'>Known for {personData.known_for_department}</p>
            </div>
            <div className='mt-2 flex items-center gap-1'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" />
                </svg>
              </span>
              <p> Born in {personBirthDate} {personAge}</p>
            </div>
            {
              personData.biography && (
                <>
                  <h2 className='text-xl font-medium mt-4'>Biography</h2>
                  <p className='mt-2 tracking-wide '>
                    {isShowFullText ? personData.biography : `${truncatedBiographyText}...`}
                  </p>
                  <p className='w-30'>
                    {shouldShowFullText && (
                      <span
                        onClick={handleToggleText}
                        className='flex gap-1 cursor-pointer text-secondary font-medium'
                      >
                        {isShowFullText ? 'See Less' : 'See More'}
                        <motion.svg
                          initial="unrotated"
                          animate={isShowFullText ? "rotated" : "unrotated"}
                          variants={rotatedChevron}
                          transition={{ease: 'easeInOut'}}
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                          <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                        </motion.svg>

                      </span>
                    )}
                  </p>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonPage