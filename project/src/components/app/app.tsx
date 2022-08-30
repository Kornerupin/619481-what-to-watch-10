import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import Error404 from '../../pages/error-404/error-404';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import {setGenre} from '../../store/action';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';

const App = (): JSX.Element => {
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);
  const filmsAll = useAppSelector((state) => state.filmsAll);

  if (isDataLoaded) {
    return <LoadingScreen />;
  }

  const favoriteListData = filmsAll.filter((film) => film.isFavorite);
  setGenre('All genres');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'*'}
          element={<Error404/>}
        />
        <Route
          path={AppRoute.Main}
          element={<Main filmsData={filmsAll} favoriteCount={favoriteListData.length} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList filmsData={favoriteListData}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage films={filmsAll} favoriteCount={favoriteListData.length} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview filmsData={filmsAll}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<Player films={filmsAll}/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
