import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';
// other imports...

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies==null) return;
    const mainMovie=movies[0];
    
    const {original_title, overview ,id} = mainMovie;
 
    return (
    <div>
      {/* VideoBackground, VideoTitle, etc. */}
      
      <VideoTitle title={original_title} overView={overview} />
       <VideoBackGround movieId={id}/>
    </div>
  );
};

// ⚠️ MAKE SURE THIS LINE EXISTS AT THE BOTTOM:
export default MainContainer;