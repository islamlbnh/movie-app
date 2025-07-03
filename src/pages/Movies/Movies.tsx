import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../api/movieApi";
import Moviecard from "../../components/common/Card/Moviecard";
type Movie = {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
};

type MoviesResponse = {
  results: Movie[];
};

export default function Movies() {
  const { data, isLoading, error } = useQuery<MoviesResponse>({
    queryKey: ["movies"],
    queryFn: getPopularMovies,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="movies-container flex items-start flex-wrap gap-8 p-4 overflow-hidden">
      {data?.data?.results?.map((movie: Movie) => (
        <Moviecard
          key={movie.id}
          posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
          overview={movie.overview}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
}
