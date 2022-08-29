import Review from './review/review';
import {ReviewType} from '../../../../../types/reviews';

type ReviewListProps = {
  reviewData: ReviewType[],
};

const ReviewList = ({reviewData}: ReviewListProps) => {
  const firstList: ReviewType[] = [], secondList: ReviewType[] = [];

  reviewData.forEach((current, i) => {
    if (i % 2 === 0) {
      firstList.push(current);
    }
    else {
      secondList.push(current);
    }
  });

  return (
    <div className='film-card__reviews film-card__row'>
      <div className='film-card__reviews-col'>
        {firstList.length > 0 ? firstList.map((current) => <Review key={current.reviewId} reviewData={current} />) : 'No reviews'}
      </div>
      <div className='film-card__reviews-col'>
        {secondList.map((current) => <Review key={current.reviewId} reviewData={current} />)}
      </div>
    </div>
  );
};

export default ReviewList;
