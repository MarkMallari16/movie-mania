export const getTeaserUrl = (videoData) => {
    const teaser = videoData?.results?.find(video => video.type === "Teaser" && video.site === "YouTube");
    return teaser ? `https://www.youtube.com/watch?v=${teaser.key}` : null;
}
export const getTrailerUrl = (videoData) => {
    const trailer = videoData?.results?.find(video => video.type === "Trailer" && video.site === "YouTube");
    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
};
export const getVideos = (videoData) => {
    return videoData?.results
        ?.filter(video => video.site === "YouTube" && video.type === 'Teaser' || video.type === "Trailer")
        ?.slice(0, 8)
}
export const getBackdropUrl = (backdropUrl) => {
     return `https://image.tmdb.org/t/p/original${backdropUrl}`
}