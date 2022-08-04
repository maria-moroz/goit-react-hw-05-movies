import { useEffect } from 'react';
import { useState } from 'react';
import { getTrending } from 'services/api';

export default function useFetchTrendingMovies() {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const films = await getTrending();
        setTrending(films);
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    fetchTrendingFilms();
  }, []);

  return trending;
}
