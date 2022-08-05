import { useOutletContext } from 'react-router-dom';

import useFetchAdditionalInfo from 'hooks/useFetchAdditionalInfo';
import s from './Reviews.module.css';

export default function Reviews() {
  const movieId = useOutletContext();
  const reviews = useFetchAdditionalInfo('reviews', movieId);

  if (!reviews) {
    return;
  }

  return (
    <ul className={s.list}>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p className={s.author}>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
