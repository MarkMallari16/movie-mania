import React, { lazy, Suspense } from 'react'
import LazyLoadingVideo from './LazyLoadingVideo';
const ReactPlayer = lazy(() => import("react-player"));
const TrailerAndClipsComponent = ({ videos }) => {

    return (
        <div className='carousel carousel-center flex justify-center gap-8  rounded-box mt-10'>
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
                    <Suspense fallback={<LazyLoadingVideo />}>
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${video.key}`}
                            muted
                            controls
                            width="100%"
                            height="100%"
                        />
                    </Suspense>
                </div>
            ))}

        </div>
    )
}

export default TrailerAndClipsComponent