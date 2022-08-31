import {FilmType} from '../../types/film-type';
import CardSmall from './card-small/card-small';
import {useAppSelector} from '../../hooks';
import {memo} from 'react';

type CardSmallListProps = {
  films: FilmType[],
};

const CardSmallList = ({films}: CardSmallListProps):JSX.Element => {
  const visibleFilmsMax = useAppSelector((state) => state.films.visibleFilmsMax);

  const filmsList = films.map(
    (film, i) => {
      if (visibleFilmsMax < i + 1) {
        return false;
      }
      return <CardSmall key={film.id} cardData = {film} />;
    }
  );

  return (
    <div className='catalog__films-list'>
      {filmsList}
    </div>
  );
};

export default memo(CardSmallList);
