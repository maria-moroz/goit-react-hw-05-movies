import { useOutletContext } from 'react-router-dom';
import useFetchAdditionalInfo from 'hooks/useFetchAdditionalInfo';
import s from './Cast.module.css';

export default function Cast() {
  const movieId = useOutletContext();

  const cast = useFetchAdditionalInfo('cast', movieId);

  if (!cast) {
    return;
  }

  return (
    <ul className={s.list}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={s.item}>
          <div className={s.imageContainer}>
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`}
              alt={name}
            />
          </div>
          <div className={s.info}>
            <p className={`${s.infoText} ${s.title}`}>{name}</p>
            <p className={s.infoText}>
              <span className={s.title}>Character:</span> {character}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
