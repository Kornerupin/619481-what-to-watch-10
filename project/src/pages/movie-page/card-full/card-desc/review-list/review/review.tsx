import {ReviewType} from '../../../../../../types/review-type';

type ReviewProps = {
  reviewData: ReviewType,
};

const ReviewComponent = ({reviewData}: ReviewProps) => {
  const dateText = `${reviewData.date.toLocaleString('EN', {month: 'long'})} ${reviewData.date.getDay()}, ${reviewData.date.getFullYear()}`;
  const dateTime = `${reviewData.date.getFullYear()}-${reviewData.date.getMonth()}-${reviewData.date.getDay()}`;
  const ratingArr = `${reviewData.rating}`.split('.');
  const rating = `${ratingArr[0]},${ratingArr[1] || 0}`;

  return (
    <div className='review'>
      <blockquote className='review__quote'>
        <p className='review__text'>{reviewData.text}</p>

        <footer className='review__details'>
          <cite className='review__author'>{reviewData.author}</cite>
          <time className='review__date' dateTime={dateTime}>{dateText}</time>
        </footer>
      </blockquote>

      <div className='review__rating'>{rating}</div>
    </div>
  );
};

export default ReviewComponent;
