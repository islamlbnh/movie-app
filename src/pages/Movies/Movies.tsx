import { getPopularMovies } from "../../api/movieApi";
import Moviecard from "../../components/common/Card/Moviecard";
import { useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
type Movie = {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
};

type MoviesResponse = {
  results: Movie[];
  total_pages: number;
  page: number;
};

export default function Movies() {
  const {
  data,
  isLoading,
  error,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useInfiniteQuery<MoviesResponse>({
  queryKey: ['movies'],
  queryFn: async ({ pageParam = 1 }) => {
    const response = await getPopularMovies(pageParam as number);
    return response.data;
  },
  initialPageParam: 1,
  getNextPageParam: (lastPage) => {
    const currentPage = lastPage.page;
    const totalPages = lastPage.total_pages;
    return currentPage < totalPages ? currentPage + 1 : undefined;
  },
});


const observer = useRef<IntersectionObserver | null>(null);

const lastMovieRef = useCallback(
  (node: HTMLDivElement | null) => {
    if (isLoading || isFetchingNextPage) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (node) observer.current.observe(node);
  },
  [isLoading, isFetchingNextPage, hasNextPage, fetchNextPage]
);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong. Please try again later.</div>;
  if (error instanceof Error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="movies-list flex flex-wrap justify-center gap-4 p-4 items-center">
      {data?.pages?.flatMap(page => page.results).map((movie: Movie, idx: number, arr: Movie[]) => {
        if (idx === arr.length - 1) {
          return (
            <div ref={lastMovieRef} key={movie.id}>
              <Moviecard
                posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
                overview={movie.overview}
                rating={movie.vote_average}
              />
            </div>
          );
        }
        return (
          <Moviecard
            key={movie.id}
            posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            overview={movie.overview}
            rating={movie.vote_average}
          />
        );
      })}
      {isFetchingNextPage && <div className="spinner">Loading more...</div>}
    </div>
  );
}
