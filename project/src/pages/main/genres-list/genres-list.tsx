import {FilmType} from '../../../types/film-type';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {setGenre} from '../../../store/action';

type GenresListProps = {
  filmsData: FilmType[],
}

const GenresList = ({filmsData}: GenresListProps) => {
  const genres: string[] = ['All genres'];
  filmsData.forEach((current) => {
    if (genres.indexOf(current.genre) === -1 && genres.length <= 10) {
      genres.push(current.genre);
    }
  });

  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);

  return (
    <ul className='catalog__genres-list'>
      {genres.map((current, i) => (
        <li key={`genre-${i + 1}`} className={`catalog__genres-item ${current === activeGenre ? 'catalog__genres-item--active' : ''}`}>
          <a className='catalog__genres-link' onClick={() => {dispatch(setGenre(current));}}>{current}</a>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
