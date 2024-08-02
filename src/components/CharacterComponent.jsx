import React from 'react'

const CharacterComponent = ({ characters }) => {
    return (
        <>
            {
                characters.map(char => (
                    <div key={char.id} >
                        <img src={`https://image.tmdb.org/t/p/w200${char.profile_path}`} alt={char.name} className='rounded-lg' />
                        <p className='mt-2 text-white w-52'>{char.character}</p>
                    </div>
                ))
            }
        </>
    )
}

export default CharacterComponent