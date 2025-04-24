
const MovieCard = ({ posterPath, onClick }) => {
  return (
    <div onClick={onClick} className="w-48 mr-4 cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="Movie Poster"
        className="rounded"
      />
    </div>
  );
};

export default MovieCard;
