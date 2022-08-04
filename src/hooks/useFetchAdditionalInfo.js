import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieCast, getMovieReviews } from 'services/api';

export default function useFetchAdditionalInfo(type, id) {
  const [additionalInfo, setAdditionalInfo] = useState(null);

  useEffect(() => {
    const fetchAdditionalInfo = async () => {
      try {
        switch (type) {
          case 'cast': {
            const cast = await getMovieCast(id);
            setAdditionalInfo(cast);
            break;
          }
          case 'reviews': {
            const reviews = await getMovieReviews(id);
            setAdditionalInfo(reviews);
            break;
          }
          default:
            throw new Error(`Type ${type} does not exist`);
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    fetchAdditionalInfo();
  }, [id, type]);

  return additionalInfo;
}

useFetchAdditionalInfo.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
