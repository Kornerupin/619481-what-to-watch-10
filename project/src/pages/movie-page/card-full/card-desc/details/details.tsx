import {FilmType} from '../../../../../types/film-type';

type DetailsProps = {
  filmData: FilmType,
};

const Details = ({filmData}: DetailsProps) => {
  const runTime = filmData.runTime ? `${Math.floor(filmData.runTime / 60)}h ${filmData.runTime % 60}m` : false;

  return (
    <div className='film-card__text film-card__row'>
      <div className='film-card__text-col'>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Director</strong>
          <span className='film-card__details-value'>
            {filmData.director || 'No data'}
          </span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Starring</strong>
          <span className='film-card__details-value' dangerouslySetInnerHTML={{__html: filmData.starring?.join(',<br />') || 'No data'}}>
          </span>
        </p>
      </div>

      <div className='film-card__text-col'>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Run Time</strong>
          <span className='film-card__details-value'>{filmData.runTime ? runTime : 'No data'}</span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Genre</strong>
          <span className='film-card__details-value'>{filmData.genre || 'No data'}</span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Released</strong>
          <span className='film-card__details-value'>{filmData.released || 'No data'}</span>
        </p>
      </div>
    </div>
  );
};

export default Details;
