import ReviewList from './review-list/review-list';
import {useState} from 'react';
import Overview from './overview/overview';
import {Reviews} from '../../../../mocks/reviews';
import {FilmType} from '../../../../types/film-type';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../../../const';
import Details from './details/details';
import {useAppSelector} from '../../../../hooks';

type CardDescProps = {
  filmId: number,
}

const CardDesc = ({filmId}: CardDescProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const filmsAll = useAppSelector((state) => state.filmsAll);

  const filmData: FilmType | undefined = filmsAll.find((current) => current.id === filmId);
  if (!filmData) {
    return <Navigate to={AppRoute.Error404} />;
  }

  const reviewData = Reviews.filter((current) => current.filmId === filmId);
  const reviewCount: number = reviewData.length;
  let reviewRatingTotal = 0;
  reviewData.forEach((current) => (reviewRatingTotal += current.rating));
  reviewRatingTotal = parseFloat((reviewRatingTotal / reviewCount).toFixed(1));

  return (
    <div className='film-card__desc'>
      <nav className='film-nav film-card__nav'>
        <ul className='film-nav__list'>
          <li className={`film-nav__item ${activeTab === 0 ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(0)}>
            <a className='film-nav__link'>Overview</a>
          </li>
          <li className={`film-nav__item ${activeTab === 1 ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(1)}>
            <a className='film-nav__link'>Details</a>
          </li>
          <li className={`film-nav__item ${activeTab === 2 ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(2)}>
            <a className='film-nav__link'>Reviews</a>
          </li>
        </ul>
      </nav>
      {
        activeTab === 0
          ? <Overview filmData={filmData} total={reviewRatingTotal} count={reviewCount} />
          : null
      }
      {
        activeTab === 1
          ? <Details filmData={filmData} />
          : null
      }
      {
        activeTab === 2
          ? <ReviewList reviewData={reviewData} />
          : null
      }
    </div>
  );
};

export default CardDesc;
