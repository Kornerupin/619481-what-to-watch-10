import {FilmType} from '../../types/film-type';

type VideoPlayerProps = {
  film: FilmType,
  isAutoPlay?: boolean,
  isMuted?: boolean,
};

const VideoPlayer = ({film, isAutoPlay = true, isMuted = false}: VideoPlayerProps) => (
  <video height={'100%'} width={'100%'} controls={false} poster={`img/${film.poster || film.image}`} autoPlay={isAutoPlay} muted={isMuted} >
    <source src={film.preview} />
    Тег video не поддерживается вашим браузером.
  </video>
);

export default VideoPlayer;
