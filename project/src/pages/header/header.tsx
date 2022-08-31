import Logo from '../../components/logo/logo';
import {useAppSelector} from '../../hooks';
import {AppRoute, AuthStatus} from '../../const';
import {Link} from 'react-router-dom';
import {memo} from 'react';

const Header = () => {
  const authStatus = useAppSelector((state) => state.auth.authStatus);

  return (
    <header className='page-header film-card__head'>
      <Logo/>

      {
        authStatus === AuthStatus.Auth

          ? (
            <ul className='user-block'>
              <li className='user-block__item'>
                <div className='user-block__avatar'>
                  <img src={'img/avatar.jpg'} alt='User avatar' width='63' height='63'/>
                </div>
              </li>
              <li className='user-block__item'>
                <a className='user-block__link'>Sign out</a>
              </li>
            </ul>
          )
          : (
            <div className='user-block'>
              <Link to={AppRoute.SignIn} className='user-block__link'>Sign in</Link>
            </div>
          )
      }
    </header>
  );
};

export default memo(Header);
