import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { searchMovies } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import s from './Movies.module.css';
import ErrorView from 'components/ErrorView/ErrorView';

const Status = {
  RESOLVED: 'resolved',
  ERROR: 'error',
};

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('query') ?? '';

  console.log(filter);

  const updateQueryString = e => {
    const query = e.target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const fetchMovies = async () => {
    try {
      const data = await searchMovies(filter);
      setMovies(data);
      setStatus(Status.RESOLVED);
    } catch (error) {
      console.log(error);
      setStatus(Status.ERROR);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!filter) {
      setStatus(Status.ERROR);
      return;
    }

    fetchMovies(filter);
  };

  return (
    <div className="container">
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={filter}
          onChange={updateQueryString}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      {status === Status.ERROR && <ErrorView />}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
    </div>
  );
}
