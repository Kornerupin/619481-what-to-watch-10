import Logo from '../../components/logo/logo';
import CardFull from './card-full/card-full';
import {Navigate, useParams} from 'react-router-dom';
import {FilmType} from '../../types/film-type';
import CardSmallList from '../../components/card-small-list/card-small-list';
import {AppRoute} from '../../const';
import {Fragment} from 'react';

type MoviePageProps = {
  films: FilmType[],
  favoriteCount: number,
}

const MoviePage = ({films, favoriteCount}: MoviePageProps) => {
  const id: number = parseInt(useParams().id || '0', 10);
  const currentFilmData = films.find((current) => current.id === id);

  if (!currentFilmData) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <Fragment>
      <CardFull film={currentFilmData} favoriteCount={favoriteCount} />

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <CardSmallList films={films.filter((current) => current.genre === films[id].genre)} />
        </section>

        <footer className='page-footer'>
          <Logo isLight/>

          <div className='copyright'>
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default MoviePage;
