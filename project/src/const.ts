export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Error404 = '/404',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Genres {
  All = 'All',
  Drama = 'Drama',
  Action = 'Action',
  Adventure = 'Adventure',
  Animates = 'Animated',
  Comedy = 'Comedy',
  Fantasy = 'Fantasy',
  Historical = 'Historical',
  Horror = 'Horror',
  Noir = 'Noir',
  Science = 'Science',
  Thriller = 'Thriller',
  Western = 'Western',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

export const ShowMoreCount = 8;

export const TimeoutShowError = 5000;
