import {Film} from '../../types/film';
import VideoPlayer from '../../components/video-player/video-player';
import {useState} from 'react';

type CardSmallProps = {
  cardData: Film,
  startVideoDelay?: number,
};

const CardSmall = ({cardData, startVideoDelay = 1000}: CardSmallProps): JSX.Element => {
  const [isVideo, setIsVideo] = useState(false);
  let timerStart: any = null;

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
        <a className="small-film-card__link" href={'film-page.html'}>{cardData.title}</a>
      </h3>
    </article>
  );
};

export default CardSmall;
