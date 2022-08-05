import { Suspense } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import useFetchMovieDetails from 'hooks/useFetchMovieDetails';
import s from './MovieDetails.module.css';

export default function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const movieDetails = useFetchMovieDetails();

  const onBackButtonClick = () => {
    const back = location?.state?.from;

    if (back) {
      navigate(back, { replace: true });
      return;
    }
    navigate('/');
  };

  if (!movieDetails) {
    return;
  }

  const { id, title, vote_average, overview, genres, backdrop_path } =
    movieDetails;

  return (
    <div className="container">
      <button
        type="button"
        onClick={onBackButtonClick}
        className={s.backButton}
      >
        Go back
      </button>
      <div className={s.info}>
        <div className={s.posterContainer}>
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face${backdrop_path}`}
            alt={title}
          />
        </div>
        <div className={s.description}>
          <h1 className={s.title}>{title}</h1>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map(({ name }) => name).join(' ')}</p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul className={s.additionalLinks}>
          <li className={s.additionalItem}>
            <Link
              to="cast"
              state={{ from: location.state.from }}
              className={s.additionalLink}
            >
              Cast
            </Link>
          </li>
          <li className={s.additionalItem}>
            <Link
              to="reviews"
              state={{ from: location.state.from }}
              className={s.additionalLink}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={null}>
        <Outlet context={id} />
      </Suspense>
    </div>
  );
}
