import {FilmType} from '../../types/film-type';
import {useParams} from 'react-router-dom';

type PlayerProps = {
  films: FilmType[],
}

const Player = ({films}: PlayerProps) => {
  const params = useParams();
  const id:number = parseInt(params.id || '0', 10);

  return (
    <div className='player'>
      <video src={films[id].video} className='player__video' poster={'img/player-poster.jpg'}></video>

      <button type='button' className='player__exit'>Exit</button>

      <div className='player__controls'>
        <div className='player__controls-row'>
          <div className='player__time'>
            <progress className='player__progress' value='30' max='100'></progress>
            <div className='player__toggler' style={{left: '30%'}}>Toggler</div>
          </div>
          <div className='player__time-value'>1:30:29</div>
        </div>

        <div className='player__controls-row'>
          <button type='button' className='player__play'>
            <svg viewBox='0 0 19 19' width='19' height='19'>
              <use xlinkHref='#play-s'></use>
            </svg>
            <span>Play</span>
          </button>
          <div className='player__name'>Transpotting</div>

          <button type='button' className='player__full-screen'>
            <svg viewBox='0 0 27 27' width='27' height='27'>
              <use xlinkHref='#full-screen'></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
