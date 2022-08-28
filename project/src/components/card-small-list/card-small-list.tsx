import {Film} from '../../types/film';
import CardSmall from '../../pages/card-small/card-small';

type CardSmallListProps = {
  films: Film[],
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
