import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

export default function MoviesList({ movies, route = '' }) {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map(({ id, title }) => (
        <li key={id} className={s.item}>
          <Link
            to={`${route}${id}`}
            state={{ from: location }}
            className={s.link}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.protoTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  route: PropTypes.string,
};
