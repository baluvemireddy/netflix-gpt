import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryConatiner";


const Browse = () => {
 
  useNowPlayingMovies();

  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* <h2 className="text-2xl font-bold">Browse Movies</h2> */}

      {/* Movie browsing functionality goes here
      
        MainContainer
          - VideoBackGround
          - Video Title
        SecondaryContainer
          - MovieList * N
            - cards * N
      */}
    </div>
  );
};

export default Browse;
