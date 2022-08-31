import {Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';
import Logo from '../../components/logo/logo';
import {ChangeEvent, FormEvent, useState} from 'react';
import {store} from '../../store';
import {fetchActiveFilmAction, sendNewReviewAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../components/loading-screen/loading-screen';

const AddReview = () => {
  const id:number = parseInt(useParams().id || '0', 10);

  store.dispatch(fetchActiveFilmAction(id));

  const film = useAppSelector((state) => state.activeFilm);
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);

  const [stateData, setStateData] = useState({
    rating: '',
    'review-text': '',
  });

  if (isDataLoaded) {
    return <LoadingScreen />;
  }

  const filedInputHandler = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setStateData({
      ...stateData,
      [name]: value,
    });
  };

  if (!film) {
    return <Navigate to={AppRoute.Main} />;
  }

  const sendRequestForAddReview = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const rating = parseInt(stateData.rating, 10);
    const comment = stateData['review-text'];

    // if (rating === 0) {
    // alert('Необходимо указать рейтинг фильма!');
    // return false;
    // }
    // if (comment.length < 5) {
    // alert('Слишком короткий отзыв!');
    // return false;
    // }

    store.dispatch(sendNewReviewAction({filmId: id, comment, rating}));
  };

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={`${film.backgroundImage}`} alt={film.name}/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <Logo isLight={false} />

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <a href={'film-page.html'} className='breadcrumbs__link'>{film.name}</a>
              </li>
              <li className='breadcrumbs__item'>
                <a className='breadcrumbs__link'>Add review</a>
              </li>
            </ul>
          </nav>

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
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img src={`${film.posterImage || film.previewImage}`} alt={`${film.name} poster`} width='218' height='327'/>
        </div>
      </div>

      <div className='add-review'>
        <form action='#' className='add-review__form' onSubmit={sendRequestForAddReview}>
          <div className='rating'>
            <div className='rating__stars'>
              <input className='rating__input' id='star-10' type='radio' name='rating' value='10' checked={stateData.rating === '10'} onChange={filedInputHandler} />
              <label className='rating__label' htmlFor='star-10'>Rating 10</label>

              <input className='rating__input' id='star-9' type='radio' name='rating' value='9' checked={stateData.rating === '9'} onChange={filedInputHandler} />
              <label className='rating__label' htmlFor='star-9'>Rating 9</label>

              <input className='rating__input' id='star-8' type='radio' name='rating' value='8' checked={stateData.rating === '8'} onChange={filedInputHandler} />
              <label className='rating__label' htmlFor='star-8'>Rating 8</label>

              <input className='rating__input' id='star-7' type='radio' name='rating' value='7' checked={stateData.rating === '7'} onChange={filedInputHandler} />
              <label className='rating__label' htmlFor='star-7'>Rating 7</label>

              <input className='rating__input' id='star-6' type='radio' name='rating' value='6' checked={stateData.rating === '6'} onChange={filedInputHandler} />
              <label className='rating__label' htmlFor='star-6'>Rating 6</label>

              <input className='rating__input' id='star-5' type='radio' name='rating' value='5' checked={stateData.rating === '5'} onChange={filedInputHandler} />
              <label className='rating__label' htmlFor='star-5'>Rating 5</label>

              <input className='rating__input' id='star-4' type='radio' name='rating' value='4' checked={stateData.rating === '4'} onChange={filedInputHandler} />
              <label className='rating__label' htmlFor='star-4'>Rating 4</label>

              <input className='rating__input' id='star-3' type='radio' name='rating' value='3' checked={stateData.rating === '3'} onChange={filedInputHandler} />
              <label className='rating__label' htmlFor='star-3'>Rating 3</label>

              <input className='rating__input' id='star-2' type='radio' name='rating' value='2' checked={stateData.rating === '2'} onChange={filedInputHandler} />
              <label className='rating__label' htmlFor='star-2'>Rating 2</label>

              <input className='rating__input' id='star-1' type='radio' name='rating' value='1' checked={stateData.rating === '1'} onChange={filedInputHandler} />
              <label className='rating__label' htmlFor='star-1'>Rating 1</label>
            </div>
          </div>

          <div className='add-review__text'>
            <textarea className='add-review__textarea' name='review-text' id='review-text' placeholder='Review text' value={stateData['review-text']} onChange={filedInputHandler}></textarea>
            <div className='add-review__submit'>
              <button className='add-review__btn' type='submit'>Post</button>
            </div>
          </div>
        </form>
      </div>

    </section>
  );
};

export default AddReview;
