import {FilmType} from '../../types/film-type';
import CardSmallList from '../../components/card-small-list/card-small-list';
import Logo from '../../components/logo/logo';
import GenresList from './genres-list/genres-list';
import {useAppSelector} from '../../hooks';
import ShowMore from './show-more/show-more';
import Header from '../header/header';

type MainProps = {
  filmsData: FilmType[],
  favoriteCount: number,
};

const Main = ({filmsData, favoriteCount}: MainProps): JSX.Element => {
  const activeGenre = useAppSelector((state) => state.genre);
  const filterFilmsData = filmsData.filter((current) => current.genre === activeGenre || activeGenre === 'All genres');

  return (
    <div>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src={'img/bg-the-grand-budapest-hotel.jpg'} alt='The Grand Budapest Hotel'/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <Header />

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img src={`${filmsData[0].posterImage}`} alt={`${filmsData[0].name} poster`} width='218' height='327'/>
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{filmsData[0].name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{filmsData[0].genre}</span>
                <span className='film-card__year'>{filmsData[0].released}</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref={'#play-s'}></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref={'#add'}></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>{favoriteCount}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <GenresList filmsData={filmsData}/>

          <CardSmallList films={filterFilmsData}/>

          <ShowMore />
        </section>

        <footer className='page-footer'>
          <Logo isLight/>

          <div className='copyright'>
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Main;
