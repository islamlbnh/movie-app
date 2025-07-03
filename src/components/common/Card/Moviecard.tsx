type MoviecardProps = {
  posterPath: string;
  title: string;
  overview: string;
  rating: number;
};

const Moviecard = ({ posterPath, title, overview, rating }: MoviecardProps) => {
  return (
    <div className="movie-card text-gray-200  rounded shadow flex w-[445px] h-[480px] overflow-hidden transition-transform hover:scale-105 duration-200 mx-auto">
      <img
        src={posterPath}
        alt={`${title} Poster`}
        className="movie-card__poster w-[160px] h-full object-cover rounded-l"
      />
      <div className="movie-card__details flex flex-col justify-between p-4 flex-1 bg-gradient-to-br  from-transparent to-zinc-500 mask-gradient-to-r ">
        <div>
          <h3 className="movie-card__title text-lg font-semibold text-gray-100 mb-2 truncate">
            {title}
          </h3>
          <p className="movie-card__overview text-gray-200 text-sm line-clamp-4">
            {overview}
          </p>
        </div>
        <span className="movie-card__rating text-yellow-500 font-bold text-base self-end mt-4">
          ⭐ {rating}
        </span>
      </div>
    </div>
  );
};

export default Moviecard;
