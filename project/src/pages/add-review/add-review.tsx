import {Film} from '../../types/film';
import {Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';
import Logo from '../../components/logo/logo';
import {useState} from 'react';

type AddReviewProps = {
  listData: Film[],
};

const AddReview = ({listData}: AddReviewProps) => {
  const id:number = parseInt(useParams().id || '0', 10);

  const film = listData[id];

  const [stateData, setStateData] = useState({
    rating: '0',
    text: '',
  });

  const filedInputHandler = (evt) => {
    const {name, value} = evt.target;
    setStateData({
      ...stateData,
      [name]: value,
    });
  }

  if (!film) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={`img/${film.image}`} alt={film.title}/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <Logo isLight={false} />

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <a href={'film-page.html'} className='breadcrumbs__link'>{film.title}</a>
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
          <img src={`img/${film.poster || film.image}`} alt={`${film.title} poster`} width='218' height='327'/>
        </div>
      </div>

      <div className='add-review'>
        <form action='src/pages/add-review/add-review#' className='add-review__form'>
          <div className='rating'>
            <div className='rating__stars'>
              <input className='rating__input' id='star-10' type='radio' name='rating' value='10' {stateData.rating === '10' ? 'checked' : ''} onInput={setStateData} />
              <label className='rating__label' htmlFor='star-10'>Rating 10</label>

              <input className='rating__input' id='star-9' type='radio' name='rating' value='9' {stateData.rating === '9' ? 'checked' : ''} onInput={setStateData} />
              <label className='rating__label' htmlFor='star-9'>Rating 9</label>

              <input className='rating__input' id='star-8' type='radio' name='rating' value='8' {stateData.rating === '8' ? 'checked' : ''} onInput={setStateData} />
              <label className='rating__label' htmlFor='star-8'>Rating 8</label>

              <input className='rating__input' id='star-7' type='radio' name='rating' value='7' {stateData.rating === '7' ? 'checked' : ''} onInput={setStateData} />
              <label className='rating__label' htmlFor='star-7'>Rating 7</label>

              <input className='rating__input' id='star-6' type='radio' name='rating' value='6' {stateData.rating === '6' ? 'checked' : ''} onInput={setStateData} />
              <label className='rating__label' htmlFor='star-6'>Rating 6</label>

              <input className='rating__input' id='star-5' type='radio' name='rating' value='5' {stateData.rating === '5' ? 'checked' : ''} onInput={setStateData} />
              <label className='rating__label' htmlFor='star-5'>Rating 5</label>

              <input className='rating__input' id='star-4' type='radio' name='rating' value='4' {stateData.rating === '4' ? 'checked' : ''} onInput={setStateData} />
              <label className='rating__label' htmlFor='star-4'>Rating 4</label>

              <input className='rating__input' id='star-3' type='radio' name='rating' value='3' {stateData.rating === '3' ? 'checked' : ''} onInput={setStateData} />
              <label className='rating__label' htmlFor='star-3'>Rating 3</label>

              <input className='rating__input' id='star-2' type='radio' name='rating' value='2' {stateData.rating === '2' ? 'checked' : ''} onInput={setStateData} />
              <label className='rating__label' htmlFor='star-2'>Rating 2</label>

              <input className='rating__input' id='star-1' type='radio' name='rating' value='1' {stateData.rating === '1' ? 'checked' : ''} onInput={setStateData} />
              <label className='rating__label' htmlFor='star-1'>Rating 1</label>
            </div>
          </div>

          <div className='add-review__text'>
            <textarea className='add-review__textarea' name='review-text' id='review-text' placeholder='Review text' onInput={setStateData}>{stateData.text}</textarea>
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
