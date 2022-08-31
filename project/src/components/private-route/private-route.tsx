import {AppRoute, AuthStatus} from '../../const';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element,
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const {children} = props;
  const authStatus = useAppSelector((state) => state.auth.authStatus);

  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
};

export default PrivateRoute;

