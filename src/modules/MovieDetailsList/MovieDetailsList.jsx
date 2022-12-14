import s from './MovieDetailsList.module.css';
import PropTypes from 'prop-types';

export default function MovieDetailsList({
  poster_path,
  tagline,
  title,
  release_date,
  overview,
  genres,
  vote_average,
  id,
}) {
  const userScore = 10 * vote_average.toFixed();
  const filmDate = release_date.slice(0, 4);
  const filmGenres = genres.map(genre => genre.name).join(', ');

  return (
    <div key={id} className={s.movieDetailContainer}>
      <img
        src={
          poster_path
            ? (poster_path = `https://image.tmdb.org/t/p/w500/${poster_path}`)
            : (poster_path =
                'https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792__340.jpg')
        }
        alt={tagline}
        width={240}
      ></img>
      <ul className={s.list}>
        <li className={s.item}>
          <h2 className={s.title}>
            {title} ({filmDate})
          </h2>
          <p className={s.text}>User score: {userScore}%</p>
        </li>
        <li className={s.item}>
          <h3 className={s.title}>Overview</h3>
          <p className={s.text}>{overview}</p>
        </li>
        <li className={s.item}>
          <h4 className={s.title}>Genres</h4>
          <p className={s.text}>{filmGenres}</p>
        </li>
      </ul>
    </div>
  );
}
MovieDetailsList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object.isRequired),
  poster_path: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  id: PropTypes.number.isRequired,
};
