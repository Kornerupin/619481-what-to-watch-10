import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import Error404 from '../../pages/error-404/error-404';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import {Film} from '../../types/film';
import AddReview from '../../pages/add-review/add-review';

type AppProps = {
  listData: Film[],
};

const App = ({listData}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={'*'}
        element={<Error404 />}
      />
      <Route
        path={AppRoute.Main}
        element={<Main listData={listData} />}
      />
      <Route
        path={AppRoute.SignIn}
        element={<SignIn />}
      />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute
            authStatus={AuthStatus.Auth}
          >
            <MyList listData={listData.filter((film) => film.isFavorite)} />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Film}
        element={<MoviePage />}
      />
      <Route
        path={AppRoute.AddReview}
        element={<AddReview listData={listData} />}
      />
      <Route
        path={AppRoute.Player}
        element={<Player films={listData} />}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
