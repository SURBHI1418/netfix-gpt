import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>

      {
        /*
        Main Container
          -VideoBackground
          -VideoTitle
        Secondary Container
          -MovieList * n
          -Carts * n
        */
      }
    </div>
  );
};

export default Browser;
