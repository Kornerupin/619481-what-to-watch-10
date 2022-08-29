import {Fragment} from 'react';
import {FilmType} from '../../../../../types/film-type';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../../../../const';

type OverviewProps = {
  filmData: FilmType,
  total: number,
  count: number,
};

const Overview = ({filmData, total, count}: OverviewProps) => {
  const totalArr = total.toString().split('.');
  const totalData = count > 0 ? `${totalArr[0]},${totalArr[1] || 0}` : '0,0';
  let totalLevel = 'No data';
  if (total > 0) {
    totalLevel = 'Bad';
  }
  if (total > 3) {
    totalLevel = 'Normal';
  }
  if (total > 5) {
    totalLevel = 'Good';
  }
  if (total > 7) {
    totalLevel = 'Very good';
  }
  if (total === 10) {
    totalLevel = 'Awesome';
  }

  if (!filmData) {
    return <Navigate to={AppRoute.Error404} />;
  }

  return (
    <Fragment>
      <div className='film-rating'>
        <div className='film-rating__score'>{totalData}</div>
        <p className='film-rating__meta'>
          <span className='film-rating__level'>{totalLevel}</span>
          <span className='film-rating__count'>{count} ratings</span>
        </p>
      </div>

      <div className='film-card__text'>
        <div dangerouslySetInnerHTML={{__html: filmData.description ? `${filmData.description}` : '<p>No description</p>'}}></div>

        <p className='film-card__director'>
          <strong>Director: {filmData.director || 'No data'}</strong>
        </p>

        <p className='film-card__starring'>
          <strong>Starring: {filmData.starring ? `${filmData.starring?.join(', ')} and other` : 'No data'}</strong>
        </p>
      </div>
    </Fragment>
  );
};

export default Overview;
