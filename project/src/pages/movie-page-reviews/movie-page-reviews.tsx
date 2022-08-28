import Logo from '../../components/logo/logo';
import CardSmallList from '../../components/card-small-list/card-small-list';
import {Film} from '../../types/film';

type MoviePageReviewsProps = {
  listData: Film[],
};

const MoviePageReviews = ({listData}: MoviePageReviewsProps) => (

  <div className='page-content'>
    <section className='catalog catalog--like-this'>
      <h2 className='catalog__title'>More like this</h2>

      <CardSmallList films={listData} />
    </section>

    <footer className='page-footer'>
      <Logo isLight />

      <div className='copyright'>
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export default MoviePageReviews;
