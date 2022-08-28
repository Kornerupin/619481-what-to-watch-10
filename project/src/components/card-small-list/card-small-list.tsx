import {Film} from '../../types/film';
import CardSmall from '../../pages/card-small/card-small';
import { useState } from 'react';

type CardSmallListProps = {
  films: Film[],
};

const CardSmallList = ({films}: CardSmallListProps):JSX.Element => {
  const [activeCard, setActiveCard] = useState(films[0].id);

  const filmsList = films.map(
    (film) => (<CardSmall key={film.id} cardData = {film} onMouseOver={() => {setActiveCard(film.id);}} />)
  );

  return (
    <div className='catalog__films-list'>
      {filmsList}
      <div>{activeCard}</div>
    </div>
  );
};

export default CardSmallList;
