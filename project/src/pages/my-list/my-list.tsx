import {FilmType} from '../../types/film-type';
import CardSmallList from '../../components/card-small-list/card-small-list';
import Logo from '../../components/logo/logo';

type MyListProps = {
  filmsData: FilmType[],
};

const MyList = ({filmsData}: MyListProps) => (
  <div className='user-page'>
    <header className='page-header user-page__head'>
      <Logo isLight={false} />

      <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'>{filmsData.length}</span></h1>
      <ul className='user-block'>
        <li className='user-block__item'>
          <div className='user-block__avatar'>
            <img src={'img/avatar.jpg'} alt='User avatar' width='63' height='63'/>
          </div>
        </li>
        <li className='user-block__item'>
          <a href={'#'} className='user-block__link'>Sign out</a>
        </li>
      </ul>
    </header>

    <section className='catalog'>
      <h2 className='catalog__title visually-hidden'>Catalog</h2>

      <CardSmallList films={filmsData} />
    </section>

    <footer className='page-footer'>
      <Logo isLight />

      <div className='copyright'>
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export default MyList;
