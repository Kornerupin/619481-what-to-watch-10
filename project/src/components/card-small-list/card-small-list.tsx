import {FilmType} from '../../types/film-type';
import CardSmall from './card-small/card-small';

type CardSmallListProps = {
  films: FilmType[],
};

const CardSmallList = ({films}: CardSmallListProps):JSX.Element => {
  const filmsList = films.map(
    (film) => (<CardSmall key={film.id} cardData = {film} />)
  );

  return (
    <div className='catalog__films-list'>
      {filmsList}
    </div>
  );
};

export default CardSmallList;
