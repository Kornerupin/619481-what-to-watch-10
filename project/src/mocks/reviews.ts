import {ReviewType} from '../types/review-type';

export const Reviews: ReviewType[] = [
  {
    reviewId: 0,
    filmId: 1,
    author: 'Kate Muir',
    rating: 8.9,
    text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    date: new Date('December 24, 2016'),
  },
  {
    reviewId: 1,
    filmId: 1,
    author: 'Matthew Lickona',
    rating: 7.2,
    text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    date: new Date('December 20, 2016'),
  },
  {
    reviewId: 2,
    filmId: 1,
    author: 'Bill Goodykoontz',
    rating: 8.0,
    text: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. \'The Grand Budapest Hotel\' is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    date: new Date('November 18, 2015'),
  },
  {
    reviewId: 3,
    filmId: 2,
    author: 'Paula Fleri-Soler',
    rating: 7.6,
    text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    date: new Date('December 20, 2016'),
  },
  {
    reviewId: 4,
    filmId: 2,
    author: 'Amanda Greever',
    rating: 8.0,
    text: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
    date: new Date('November 18, 2015'),
  },
  {
    reviewId: 6,
    filmId: 3,
    author: 'Paula Fleri-Soler',
    rating: 7.0,
    text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    date: new Date('December 20, 2016'),
  },
];
