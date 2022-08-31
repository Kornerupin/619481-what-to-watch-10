import Header from '../header/header';
import Footer from '../footer/footer';
import {useAppSelector} from '../../hooks';
import SignInError from './sign-in-error/sign-in-error';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';

const SignIn = () => {
  const error = useAppSelector((state) => state.auth.error);
  const userData = useAppSelector((state) => state.auth.userData);

  if (userData !== null) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className='user-page'>
      <Header/>

      <div className='sign-in user-page__content'>
        <form action='/login' className='sign-in__form'>
          {
            error === null
              ? ''
              : <SignInError message={error} />
          }
          <div className='sign-in__fields'>
            <div className='sign-in__field'>
              <input className='sign-in__input' type='email' placeholder='Email address' name='user-email' id='user-email'/>
              <label className='sign-in__label visually-hidden' htmlFor='user-email'>Email address</label>
            </div>
            <div className='sign-in__field'>
              <input className='sign-in__input' type='password' placeholder='Password' name='user-password' id='user-password'/>
              <label className='sign-in__label visually-hidden' htmlFor='user-password'>Password</label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button className='sign-in__btn' type='submit'>Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

export default SignIn;
