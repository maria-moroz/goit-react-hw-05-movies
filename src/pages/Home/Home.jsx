import useFetchTrendingMovies from 'hooks/useFetchTrendingMovies';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const trending = useFetchTrendingMovies();

  if (!trending) {
    return;
  }

  return (
    <div className="container">
      {trending && <MoviesList movies={trending} route={'movies/'} />}
    </div>
  );
}
