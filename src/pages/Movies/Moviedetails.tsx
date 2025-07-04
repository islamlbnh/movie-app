import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/movieApi";

export const MovieDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const movieId = id ? Number(id) : undefined;

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovieDetails(movieId!),
    enabled: !!movieId,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching movie details</p>;
  if (!data) return null;

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12"
      style={{
        background: "linear-gradient(180deg, #211212 0%, #444 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient mask at the bottom */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "120px",
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, rgba(33,18,18,0) 0%, #211212 100%)",
          zIndex: 1,
        }}
      />
      <div className="relative max-w-3xl w-full bg-[#211212] shadow-lg rounded-lg p-8 flex flex-col md:flex-row gap-8 z-10">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`}
          alt={data.data.title}
          className="w-full md:w-64 rounded-lg object-cover shadow-md"
        />
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-3xl font-bold mb-2 text-white">{data.data.title}</h2>
          <p className="italic text-gray-400">{data.data.tagline}</p>
          <p className="text-gray-200">{data.data.overview}</p>
          <div className="flex flex-wrap gap-2 my-2">
            {data.data.genres.map((g: any) => (
              <span
                key={g.id}
                className="bg-[#3a2323] text-red-200 px-2 py-1 rounded text-xs font-medium"
              >
                {g.name}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-300">
            <span className="font-semibold">Release Date:</span>
            <span>{data.data.release_date}</span>
            <span className="font-semibold">Runtime:</span>
            <span>{data.data.runtime} min</span>
            <span className="font-semibold">Status:</span>
            <span>{data.data.status}</span>
            <span className="font-semibold">Vote Average:</span>
            <span>{data.data.vote_average}</span>
            <span className="font-semibold">Vote Count:</span>
            <span>{data.data.vote_count}</span>
          </div>
          {data.data.homepage && (
            <p className="mt-4">
              <strong>Homepage:</strong>{" "}
              <a
                href={data.data.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-300 hover:underline"
              >
                {data.data.homepage}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
