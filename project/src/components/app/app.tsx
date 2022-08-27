import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import Error404 from '../../pages/error-404/error-404';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import MoviePageReviews from '../../pages/movie-page-reviews/movie-page-reviews';
import Player from '../../pages/player/player';

type AppProps = {
  title: string,
  genre: string,
  year: number,
};

const App = (PromoData: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={'*'}
        element={<Error404 />}
      />
      <Route
        path={AppRoute.Main}
        element={<Main {...PromoData} />}
      />
      <Route
        path={AppRoute.SignIn}
        element={<SignIn />}
      />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute
            authStatus={AuthStatus.NoAuth}
          >
            <MyList />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Film}
        element={<MoviePage />}
      />
      <Route
        path={AppRoute.AddReview}
        element={<MoviePageReviews />}
      />
      <Route
        path={AppRoute.Player}
        element={<Player />}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
