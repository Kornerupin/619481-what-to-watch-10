import CardFull from './card-full/card-full';
import {Navigate, useParams} from 'react-router-dom';
import CardSmallList from '../../components/card-small-list/card-small-list';
import {AppRoute} from '../../const';
import {Fragment} from 'react';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {store} from '../../store';
import {fetchActiveFilmAction, fetchReviewsAction, fetchSimilarFilmsAction} from '../../store/api-actions';
import Footer from '../footer/footer';

type MoviePageProps = {
  favoriteCount: number,
}

const MoviePage = ({favoriteCount}: MoviePageProps) => {
  const id: number = parseInt(useParams().id || '0', 10);

  store.dispatch(fetchActiveFilmAction(id));
  store.dispatch(fetchReviewsAction(id));
  store.dispatch(fetchSimilarFilmsAction(id));
  const currentFilmData = useAppSelector((state) => state.films.activeFilm);
  const currentFilmSimilar = useAppSelector((state) => state.films.activeFilmSimilar);

  const isDataLoaded = useAppSelector((state) => state.films.isDataLoaded);

  if (isDataLoaded || !currentFilmData) {
    return <LoadingScreen />;
  }

  if (!currentFilmData) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <Fragment>
      <CardFull film={currentFilmData} favoriteCount={favoriteCount} />

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <CardSmallList films={currentFilmSimilar || []} />
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default MoviePage;
