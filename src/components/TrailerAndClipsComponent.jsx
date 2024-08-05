import React from 'react'
import ReactPlayer from 'react-player'

const TrailerAndClipsComponent = ({ videos }) => {
    console.log(videos)
    return (
        <div className='carousel carousel-center flex justify-center gap-8  rounded-box mt-10 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
            {videos.map(video => (
                <div
                    key={video.id}
                    style={{
                        width: '60vw',
                        height: '40vh',
                        borderRadius: '10px',
                        overflow: 'hidden'
                    }}
                    className='carousel-item'
                >
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${video.key}`}
                        muted
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
            ))}

        </div>
    )
}

export default TrailerAndClipsComponent