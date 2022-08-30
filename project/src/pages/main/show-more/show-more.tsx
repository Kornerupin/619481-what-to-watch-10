import {useAppDispatch, useAppSelector} from '../../../hooks';
import {showMore} from '../../../store/action';

const ShowMore = () => {
  const isVisibleLimit = useAppSelector((state) => state.isVisibleLimit);
  const dispatch = useAppDispatch();

  if (isVisibleLimit) {
    return (<div></div>);
  }

  return (
    <div className='catalog__more'>
      <button className='catalog__button' type='button' onClick={() => {dispatch(showMore());}}>Show more</button>
    </div>
  );
};

export default ShowMore;
