import {Film} from '../../types/film';

type CardSmallProps = {
  cardData: Film,
  onMouseOver: () => void,
};

const CardSmall = ({cardData, onMouseOver}: CardSmallProps): JSX.Element => (
  <article className='small-film-card catalog__films-card' onMouseOver={onMouseOver}>
    <div className='small-film-card__image'>
      <img src={`img/${cardData.image}`} alt={cardData.title} width='280' height='175'/>
    </div>
    <h3 className='small-film-card__title'>
      <a className='small-film-card__link' href={'film-page.html'}>{cardData.title}</a>
    </h3>
  </article>
);

export default CardSmall;
