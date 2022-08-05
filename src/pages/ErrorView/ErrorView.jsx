import s from './ErrorView.module.css';
import ErrorImage from '../../images/error.png';

export default function ErrorView() {
  return (
    <div className={s.container}>
      <img src={ErrorImage} className={s.image} alt="Error" width="250" />
      <p className={s.message}>
        Sorry, can't find movies :(
        <br />
        Please, try again.
      </p>
    </div>
  );
}
