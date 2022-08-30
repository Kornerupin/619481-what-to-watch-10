import {FilmType} from '../../../types/film-type';
import VideoPlayer from '../../video-player/video-player';
import {useState} from 'react';
import {AppRoute} from '../../../const';
import {Link} from 'react-router-dom';

type CardSmallProps = {
  cardData: FilmType,
  startVideoDelay?: number,
};

const CardSmall = ({cardData, startVideoDelay = 1000}: CardSmallProps): JSX.Element => {
  const [isVideo, setIsVideo] = useState(false);
  let timerStart: ReturnType<typeof setTimeout>;

  const setTimerToVideo = () => {
    if (!isVideo) {
      timerStart = setTimeout(playVideo, startVideoDelay);
    }
  };
  const resetVideo = () => {
    clearInterval(timerStart);
    if (isVideo) {
      setIsVideo(false);
    }
  };

  const playVideo = () => {
    if (!isVideo) {
      setIsVideo(true);
    }
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={setTimerToVideo} onMouseOut={resetVideo}>
      <div className="small-film-card__image">
        {
          isVideo
            ? <VideoPlayer film={cardData} isMuted/>
            : <img src={`img/${cardData.image}`} alt={cardData.title} width="280" height="175"/>
        }
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film.replace(':id', `${cardData.id}`)} className="small-film-card__link">{cardData.title}</Link>
      </h3>
    </article>
  );
};

export default CardSmall;
