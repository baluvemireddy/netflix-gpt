import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackGround = ({movieId}) => {
    //
    const trailerVideo=useSelector(store => store.movies?.trailerVideo);
    
    //feting the video and store with trailer data
   useMovieTrailer(movieId);

    return <div className="w-screen">
        <iframe className="w-screen h-screen aspect-video"
        
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; 
        autoplay; clipboard-write; 
        encrypted-media; 
        gyroscope; picture-in-picture; 
        web-share" 
       // referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
        </iframe>
    </div>
}

export default VideoBackGround;